import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import type { Todo } from "@/lib/api";

export function EditTodoDialog({
  todo,
  open,
  onClose,
  onSave,
}: {
  todo: Todo | null;
  open: boolean;
  onClose: () => void;
  onSave: (id: number, data: { title: string; description: string }) => void;
}) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (open && todo) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setTitle(todo.title);
      setDescription(todo.description || "");
    }
  }, [open, todo]);

  if (!todo) return null;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent
        className="
          bg-white 
          text-black 
          dark:bg-neutral-900 
          dark:text-white 
          border 
          rounded-lg 
          shadow-xl
          sm:max-w-lg 
          p-6
        "
      >
        <DialogHeader>
          <DialogTitle className="text-lg font-semibold">Edit Todo</DialogTitle>
        </DialogHeader>

        <div className="space-y-4 mt-2">
          <Input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Edit title"
          />

          <Textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Edit description"
          />
        </div>

        <Button
          className="w-full bg-blue-600 hover:bg-blue-700 text-white"
          onClick={() => {
            onSave(todo.id, { title, description });
            onClose();
          }}
        >
          Save Changes
        </Button>
      </DialogContent>
    </Dialog>
  );
}
