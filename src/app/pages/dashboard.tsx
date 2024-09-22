import Link from "next/link";

export const dynamic = "force-dynamic";

function addList() {
  const list = document.getElementById("todo-list");
  const todo = document.createElement("div");
  todo.className = "mb-3 inline-block rounded-lg bg-gray-200 px-6 py-4";
}

function addTodo() {
  const list = document.getElementById("list-container");
  const todo = document.createElement("div");
  todo.className = "mb-3 inline-block rounded-lg bg-gray-200 px-6 py-4";
}

const ToDo = () => {
  return (
    <div className="mb-3 inline-block rounded-lg bg-gray-200 px-6 py-4">
      <p>To-Do</p>
      <button onClick={addTodo}>+</button>
    </div>
  );
};

const ToDoList = () => {
  return (
    <div
      className="mb-3 inline-block rounded-lg bg-gray-200 px-6 py-4"
      id="list-container"
    >
      <p>List</p>
      <button onClick={addList}>+</button>
    </div>
  );
};

export default function Dashboard() {
  return (
    <main
      className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white"
      id="list-container"
    >
      <Link href="src/app/page.tsx">Home</Link>
      <h1>This is your dashboard</h1>
      <div
        className="mb-3 inline-block rounded-lg bg-gray-200 px-6 py-4"
        id="todo-list"
      ></div>
    </main>
  );
}
