"use client";

import {
  TodoList,
  TodoListSkeleton,
  TodoListToolbar,
  useGetTasks,
} from "@/features/todo";

export default function DashboardPage() {
  const { data, isFetching } = useGetTasks();
  return (
    <main className="max-w-3xl py-8 mx-auto">
      <TodoListToolbar />
      <section className="mt-2">
        {isFetching ? <TodoListSkeleton /> : <TodoList todos={data} />}
      </section>
    </main>
  );
}
