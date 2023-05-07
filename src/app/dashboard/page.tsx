"use client";

import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

import {
  TodoList,
  TodoListSkeleton,
  TodoListToolbar,
  useGetTasks,
} from "@/features/todo";

export default function DashboardPage() {
  const { isLoaded, isSignedIn, user } = useUser();
  const router = useRouter();

  if (isLoaded && !isSignedIn) {
    router.push("/sign-in?redirectUrl=/dashboard");
  }

  const { data, isFetching } = useGetTasks();
  return (
    <main className="max-w-3xl px-4 py-8 mx-auto">
      <TodoListToolbar />
      <section className="mt-2">
        {isFetching ? <TodoListSkeleton /> : <TodoList todos={data} />}
      </section>
    </main>
  );
}
