import { API_URL } from "@/config/constants";
import { apiClient } from "@/utils/api-client";
import { useQuery } from "@tanstack/react-query";
import { Todo } from "../types/todo";

export const getTasks = (): Promise<Todo[]> => {
  return apiClient.get(`${API_URL}/tasks`);
};

export const useGetTasks = () => {
  const { data, isFetching } = useQuery<Todo[]>({
    queryKey: ["tasks"],
    queryFn: getTasks,
  });

  return {
    data,
    isFetching,
  };
};
