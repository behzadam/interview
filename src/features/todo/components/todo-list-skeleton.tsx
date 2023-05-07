const TodoListSkeletonItem = (): JSX.Element => {
  return (
    <div
      role="status"
      className="max-w-full p-4 space-y-4 border divide-y rounded shadow border-gray-50 divide-gray-50 animate-pulse"
    >
      <div className="flex items-center justify-between">
        <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
        <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
      </div>
    </div>
  );
};

type Props = {
  count?: number;
};
export const TodoListSkeleton = ({ count = 4 }: Props): JSX.Element => {
  const posts = Array.from({ length: count });
  return (
    <div
      role="status"
      className="max-w-full p-4 space-y-4 border divide-y rounded shadow border-gray-50 divide-gray-50 animate-pulse"
    >
      <>
        {posts.map((_, index) => {
          return <TodoListSkeletonItem key={index} />;
        })}
      </>
      <span className="sr-only">Loading...</span>
    </div>
  );
};
