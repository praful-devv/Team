
import useEmployee from '../../../../employees/hooks/useEmployee';


const Assign = ({ register, errors }) => {
 

  const { data } = useEmployee();
  return (
    <div>
      <label
        className="mb-2 block text-sm font-medium"
        style={{ color: "var(--text-secondary)" }}
      >
        Assign To{" "}
      </label>{" "}
      <select
        {...register("assignedTo", { required: "Please select an employee" })}
        className="w-full rounded-[var(--radius-md)] border px-4 py-2.5 outline-none"
        style={{
          backgroundColor: "var(--bg-surface)",
          borderColor: "var(--border-color)",
          color: "var(--text-primary)",
        }}
      >
        {" "}
        <option value="">Select employee</option>{" "}
        {data?.employees.map((elem) => {
          return elem.role === "employee" ? <option value={elem._id}>{elem.name}</option>  : "";

        })}
      </select>{" "}
      {errors.assignedTo && (
        <p className="mt-1 text-sm" style={{ color: "var(--danger)" }}>
          {" "}
          {errors.assignedTo.message}{" "}
        </p>
      )}{" "}
    </div>
  );
};

export default Assign