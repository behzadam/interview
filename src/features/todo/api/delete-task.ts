import { API_URL } from "@/config/constants";
import { apiClient } from "@/utils/api-client";
import { queryClient } from "@/utils/react-query";
import { useMutation } from "@tanstack/react-query";
import { Todo } from "../types/todo";

export const deleteTask = (id: string): Promise<Todo> => {
  return apiClient.delete(`${API_URL}/tasks/${id}`);
};

export const useDeleteTask = () => {
  const { mutate: onDelete, isLoading } = useMutation({
    mutationFn: deleteTask,
    onSuccess: () => {
      queryClient.invalidateQueries(["tasks"]);
    },
  });

  return { onDelete, isLoading };
};
