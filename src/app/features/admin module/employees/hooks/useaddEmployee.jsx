import { useForm } from "react-hook-form";
import { createEmployee, deleteEmployee } from "../apis/employeesApi";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useaddEmployee = () => {

  let queryClient = useQueryClient()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      avatar: "",
      name: "",
      email: "",
      password: "",
      department: "",
      role: "",
      status: "active",
    },
  });

  async function formSubmit(data) {
    try {
      let res = await createEmployee(data);
      reset();
    } catch (error) {
      console.log(error);
    }
  }

const deleteMutation = useMutation({
  mutationFn: (id) => deleteEmployee(id),
  

  onMutate: async (id) => {
    await queryClient.cancelQueries({
      queryKey: ["AllEmployees"],
    });

    queryClient.setQueriesData(
      {
        queryKey: ["AllEmployees"],
      },
      (oldData) => {
        if (!oldData) return oldData;

        return {
          ...oldData,

          employees: oldData.employees.filter(
            (employee) => employee._id !== id,
          ),

          pagination: {
            ...oldData.pagination,
            total: oldData.pagination.total - 1,
          },
        };
      },
    );
  },

  onSettled: () => {
    queryClient.invalidateQueries({
      queryKey: ["AllEmployees"],
    });
  },
});
  

  return { register, handleSubmit, errors, formSubmit, deleteMutation };
};


export default useaddEmployee;
