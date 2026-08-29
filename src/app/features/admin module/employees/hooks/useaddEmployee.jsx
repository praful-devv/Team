import { useForm } from "react-hook-form";
import { createEmployee } from "../apis/employeesApi";

const useaddEmployee = () => {
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

  return { register, handleSubmit, errors, formSubmit };
};

export default useaddEmployee;
