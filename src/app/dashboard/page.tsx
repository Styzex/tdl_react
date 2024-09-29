"use client";

import Link from "next/link";

export const dynamic = "force-dynamic";

const ToDoList = () => {
  return (
    <div>
      <button
        onMouseDown={() => addTodoList}
        className="broder-white h-8 w-8 justify-center rounded-lg bg-[#ffffff] text-xl font-bold text-[#000000]"
      >
        +
      </button>
    </div>
  );
};

function addTodoList() {
  return (
    <div>
      <textarea>Done</textarea>
      <div>
        <button
          onMouseDown={() => addTodo}
          className="broder-white h-12 w-12 justify-center rounded-lg border-2 bg-[#000000] text-2xl font-bold text-[#ffffff]"
        >
          +
        </button>
      </div>
    </div>
  );
}

function addTodo() {
  return (
    <div>
      <textarea>To-do</textarea>
    </div>
  );
}

export default function Dashboard() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#000000] to-[#1b1b1b] text-white">
      <h1 className="mb-5">This is your dashboard</h1>
      <ToDoList />
    </main>
  );
}
