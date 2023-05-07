import { API_URL } from "@/config/constants";
import { apiClient } from "@/utils/api-client";
import { queryClient } from "@/utils/react-query";
import { useMutation } from "@tanstack/react-query";
import { Todo } from "../types/todo";

type AddTaskOptions = {
  data: Todo;
};
export const addTask = ({ data }: AddTaskOptions): Promise<Todo> => {
  return apiClient.post(`${API_URL}/tasks`, data);
};

type UseAddTaskOptions = {
  onSuccess?: () => void;
};

export const useAddTask = ({ onSuccess }: UseAddTaskOptions) => {
  const { mutate: submit, isLoading } = useMutation({
    mutationFn: addTask,
    onSuccess: () => {
      queryClient.invalidateQueries(["tasks"]);
      onSuccess?.();
    },
  });

  return { submit, isLoading };
};
