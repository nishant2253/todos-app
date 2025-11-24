# TODO Full-Stack Application (NestJS + React + Shadcn UI + PostgreSQL)

A complete full-stack TODO application built using a modern developer stack:

- **Backend:** NestJS + TypeORM + PostgreSQL
- **Frontend:** React + Vite + Shadcn UI + TailwindCSS + React Query
- **Database:** PostgreSQL
- **Language:** TypeScript (end-to-end)

This project demonstrates clean architecture, modular backend design, reusable UI components, and proper API integration using React Query.

```

##  Demo Video

Watch the full demonstration of the TodoApp in action:

[![TODO App Demo](https://img.youtube.com/vi/Dmnb5CmubxkE/maxresdefault.jpg)](https://youtu.be/Dmnb5CmubxkE)

**[▶ Watch on YouTube](https://www.youtube.com/watch?v=Dmnb5Cmubxk)**

```

## Directory Structure

```
todos/
│
├── backend/              # NestJS backend
│   ├── src/
│   │   ├── app.module.ts
│   │   ├── main.ts
│   │   └── todo/         # Todo module (Controller, Service, DTOs, Entity)
│   ├── .env
│   └── ...
│
├── frontend/             # React + Vite + Shadcn UI frontend
│   ├── src/
│   │   ├── pages/
│   │   ├── components/
│   │   ├── lib/
│   │   └── index.css
│   ├── tsconfig.json
│   └── vite.config.ts
│
└── README.md             # This file
```

## Features

### Backend

- CRUD API for Todos
- PostgreSQL database with TypeORM
- DTO validation using class-validator
- Layered architecture (Controller → Service → Entity)
- Auto schema sync for development

### Frontend

- Beautiful UI using Shadcn/UI components
- TailwindCSS styling
- React Query for server state management
- Add, Edit, Delete, Toggle TODOs
- Clean layout and smooth interactions

## Database (PostgreSQL) Setup

Make sure PostgreSQL is installed and running.

### Check PostgreSQL status

```bash
sudo service postgresql status
```

### Login as postgres user

```bash
sudo -u postgres psql
```

### Create Database

```sql
CREATE DATABASE todosdb;
```

### Optional: Show DBs

```sql
\l
```

### Exit psql

```sql
\q
```

## Backend Setup (NestJS)

### 1. Navigate into backend

```bash
cd backend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create `.env` file

```env
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=yourpassword
DB_DATABASE=todosdb
PORT=3000
```

### 4. Start backend server

```bash
npm run start:dev
```

**Backend runs on:** http://localhost:3000

## API Documentation

### 1. Get all todos

```http
GET /todos
```

### 2. Create a new todo

```http
POST /todos
Content-Type: application/json

{
  "title": "Learn NestJS",
  "description": "Practice CRUD"
}
```

### 3. Update a todo

```http
PATCH /todos/:id
Content-Type: application/json

{
  "title": "Updated title",
  "isCompleted": true
}
```

### 4. Delete a todo

```http
DELETE /todos/:id
```

## Frontend Setup (React + Vite + Shadcn UI)

### 1. Navigate into frontend

```bash
cd frontend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start development server

```bash
npm run dev
```

**Frontend runs on:** http://localhost:5173

## Connecting Frontend & Backend

The frontend uses a helper at:

```
src/lib/api.ts
```

Make sure the base URL matches backend:

```typescript
const API_BASE = "http://localhost:3000";
```

## Environment Variables Summary

### Backend `.env`:

```env
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=yourpassword
DB_DATABASE=todosdb
PORT=3000
```

### Frontend `.env` (optional):

```env
VITE_API_URL=http://localhost:3000
```

Then use:

```typescript
const API_BASE = import.meta.env.VITE_API_URL;
```

## 🧪 Testing the Project

### Backend Check

Visit:

```
http://localhost:3000/todos
```

You should see an empty list: `[]`.

### Frontend Check

Go to:

```
http://localhost:5173
```

**Check:**

- Add Todo → Appears instantly
- Delete Todo → Removed immediately
- Refresh → Todos persist (database connected)
- Toggle completion → Works
- Console → No errors

## Build for Production

### Backend

```bash
npm run build
```

### Frontend

```bash
npm run build
```

---
