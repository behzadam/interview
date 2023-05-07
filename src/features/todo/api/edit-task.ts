import { API_URL } from "@/config/constants";
import { apiClient } from "@/utils/api-client";
import { queryClient } from "@/utils/react-query";
import { useMutation } from "@tanstack/react-query";
import { Todo } from "../types/todo";

export const editTask = (todo: Todo): Promise<Todo> => {
  return apiClient.put(`${API_URL}/tasks/${todo.id}`, todo);
};

type UseEditTaskOptions = {
  onSuccess?: () => void;
};

export const useEditTask = ({ onSuccess }: UseEditTaskOptions) => {
  const { mutate: submit, isLoading } = useMutation({
    mutationFn: editTask,
    onSuccess: () => {
      queryClient.invalidateQueries(["tasks"]);
      onSuccess?.();
    },
  });

  return { submit, isLoading };
};
