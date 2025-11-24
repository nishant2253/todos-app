import { Todo } from "@/lib/api";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

export function TodoItem({
  todo,
  onToggle,
  onDelete,
  onEdit,
}: {
  todo: Todo;
  onToggle: (todo: Todo) => void;
  onDelete: (todo: Todo) => void;
  onEdit: (todo: Todo) => void;
}) {
  return (
    <div
      className="flex items-center justify-between rounded border bg-white p-3 shadow-sm cursor-pointer"
      onClick={() => onEdit(todo)}
    >
      <div className="flex items-center gap-3">
        <div onClick={(e) => e.stopPropagation()}>
          <Checkbox
            checked={todo.isCompleted}
            onCheckedChange={() => onToggle(todo)}
          />
        </div>

        <div>
          <p
            className={`font-medium ${todo.isCompleted ? "line-through" : ""}`}
          >
            {todo.title}
          </p>
          <p className="text-sm text-slate-500">{todo.description}</p>
        </div>
      </div>

      <Button
        className="bg-red-600 hover:bg-red-700 text-white"
        onClick={(e) => {
          e.stopPropagation();
          onDelete(todo);
        }}
      >
        Delete
      </Button>
    </div>
  );
}
