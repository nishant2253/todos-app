import { Header } from "@/components/layout/Header";
import { TodoList } from "@/components/todo/TodoList";
import { TodoForm } from "@/components/todo/TodoForm";

import {
  fetchTodos,
  createTodo,
  updateTodo,
  deleteTodo,
  Todo,
} from "@/lib/api";

import { useMutation, useQuery } from "@tanstack/react-query";
import { queryClient } from "@/lib/queryClient";
import { useState } from "react";
import { EditTodoDialog } from "@/components/todo/EditTodoDialog";

export function Dashboard() {
  const [editingTodo, setEditingTodo] = useState<Todo | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const { data, isLoading } = useQuery({
    queryKey: ["todos"],
    queryFn: fetchTodos,
  });

  const createMutation = useMutation({
    mutationFn: createTodo,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["todos"] }),
  });

  const updateMutation = useMutation({
    mutationFn: ({ id, data }: { id: number; data: Partial<Todo> }) =>
      updateTodo(id, data),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["todos"] }),
  });

  const deleteMutation = useMutation({
    mutationFn: deleteTodo,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["todos"] }),
  });

  return (
    <div className="min-h-screen bg-slate-100">
      <Header />

      <main className="flex justify-center py-10">
        <div className="w-full max-w-xl space-y-6 px-4">
          {/* CREATE TODO FORM */}
          <TodoForm
            onSubmit={(d) => createMutation.mutate(d)}
            isLoading={createMutation.isPending}
          />

          {/* TODO LIST */}
          {isLoading ? (
            <p className="text-center text-slate-500">Loading...</p>
          ) : (
            <TodoList
              todos={data!}
              onToggle={(todo) =>
                updateMutation.mutate({
                  id: todo.id,
                  data: { isCompleted: !todo.isCompleted },
                })
              }
              onDelete={(todo) => deleteMutation.mutate(todo.id)}
              onEdit={(todo) => {
                setEditingTodo(todo);
                setIsDialogOpen(true);
              }}
            />
          )}
        </div>
      </main>

      {/* EDIT TODO DIALOG */}
      <EditTodoDialog
        todo={editingTodo}
        open={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        onSave={(id, data) => updateMutation.mutate({ id, data: data })}
      />
    </div>
  );
}
