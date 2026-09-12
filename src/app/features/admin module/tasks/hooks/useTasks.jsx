import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { createTask, deleteTask, getAllTasks } from "../apis/taskAPI";
import { useState } from "react";

const useTasks = () => {
  const [page, setpage] = useState(1);

  let queryClient = useQueryClient();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  let { data, isPending } = useQuery({
    queryKey: ["Tasks", page],
    queryFn: () => getAllTasks(page),
  });

  let totalPage = data?.pagination.totalPages;
  console.log(totalPage);

  function prevButton() {
    page > 1 ? setpage((prev) => prev - 1) : "";
  }
  function nextButton() {
    page < totalPage ? setpage((prev) => prev + 1) : "";
  }

  const addTaskMutation = useMutation({
    mutationFn: createTask,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["Tasks"],
      });
    },
    onError: (data) => {
      throw data;
    },
  });

  const deleteTaskMutation = useMutation({
    mutationFn: ({ id }) => deleteTask(id),

    onSuccess: (_, { id }) => {
      queryClient.setQueriesData({ queryKey: ["Tasks"] }, (oldData) => {
        if (!oldData) return oldData;

        return {
          ...oldData,
          tasks: oldData.tasks.filter((task) => task._id !== id),
        };
      });
    },

    onError: (error) => {
      throw error.response?.data || error;
    },
  });
  function addTasks(data) {
    addTaskMutation.mutate(data);
    reset();
  }

  return {
    data,
    register,
    handleSubmit,
    errors,
    addTasks,
    deleteTaskMutation,
    page,
    setpage,
    isPending,
    prevButton,
    nextButton,
  };
};

export default useTasks;
