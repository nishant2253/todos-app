export interface Todo {
  id: number;
  title: string;
  description: string | null;
  isCompleted: boolean;
  createdAt: string;
}

const API_BASE = "http://localhost:3000";

// GET ALL
export async function fetchTodos(): Promise<Todo[]> {
  const res = await fetch(`${API_BASE}/todos`);
  if (!res.ok) throw new Error("Failed to fetch todos");
  return res.json();
}

// CREATE
export async function createTodo(data: { title: string; description: string }) {
  const res = await fetch(`${API_BASE}/todos`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Failed to create todo");
  return res.json();
}

// UPDATE
export async function updateTodo(id: number, data: Partial<Todo>) {
  const res = await fetch(`${API_BASE}/todos/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Failed to update todo");
  return res.json();
}

// DELETE
export async function deleteTodo(id: number) {
  const res = await fetch(`${API_BASE}/todos/${id}`, {
    method: "DELETE",
  });
  if (!res.ok) throw new Error("Failed to delete todo");
  return res.json();
}
