import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function TodoForm({
  onSubmit,
  isLoading,
}: {
  onSubmit: (data: { title: string; description: string }) => void;
  isLoading: boolean;
}) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!title.trim()) return;
    onSubmit({ title, description });
    setTitle("");
    setDescription("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-3 rounded-lg border bg-white p-4 shadow-sm"
    >
      <Input
        placeholder="Todo title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        disabled={isLoading}
      />
      <Textarea
        placeholder="Todo description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        disabled={isLoading}
      />
      <Button
        type="submit"
        disabled={isLoading}
        className="bg-green-600 hover:bg-green-700 text-white"
      >
        {isLoading ? "Adding..." : "Add TODO"}
      </Button>
    </form>
  );
}
