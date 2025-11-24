import { Todo } from "@/lib/api";
import { TodoItem } from "./TodoItem";

export function TodoList({
  todos,
  onToggle,
  onDelete,
  onEdit,
}: {
  todos: Todo[];
  onToggle: (todo: Todo) => void;
  onDelete: (todo: Todo) => void;
  onEdit: (todo: Todo) => void;
}) {
  if (todos.length === 0) {
    return (
      <div className="rounded border bg-white p-3 text-center text-slate-500">
        No todos yet.
      </div>
    );
  }

  return (
    <div className="space-y-2">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
}
