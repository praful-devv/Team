import useTasks from "../../hooks/useTasks";
import Assign from "./AddTask/Assign";
import Date from "./AddTask/Date";
import Description from "./AddTask/Description";
import Priority from "./AddTask/Priority";
import Title from "./AddTask/Title";

const AddTask = () => {
  const { register, errors, handleSubmit, addTasks } = useTasks();

  return (
    <form
      onSubmit={handleSubmit(addTasks)}
      className="space-y-5 rounded-(--radius-lg) border p-6 bg-(--bg-card) border-(--border-color) shadow-(--shadow-md) "
    >
      <Title register={register} errors={errors} />
      <Description register={register} errors={errors} />
      <Date register={register} errors={errors} />
      <Assign register={register} errors={errors} />
      <Priority register={register} errors={errors} />
      <button
        type="submit"
        className="w-full rounded-(--radius-md) px-4 py-3 font-semibold transition-opacity hover:opacity-90 bg-(--primary) text-(--text-primary)"
      >
        {" "}
        Create Task{" "}
      </button>{" "}
    </form>
  );
};

export default AddTask;
