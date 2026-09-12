import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateEmployee } from "../apis/employeesApi";

const useUpdateEmployee = () => {
  const queryClient = useQueryClient();

  const updateMutation = useMutation({
    mutationFn: ({ id, data }) => updateEmployee(id, data),

    onSuccess: (updatedEmployee) => {
      queryClient.setQueriesData({ queryKey: ["AllEmployees"] }, (oldData) => {
        if (!oldData) return oldData;

        return {
          ...oldData,
          employees: oldData.employees.map((employee) =>
            employee._id === updatedEmployee._id ? updatedEmployee : employee,
          ),
        };
      });
    },
  });

  return {
    updateMutation,
  };
};

export default useUpdateEmployee;
