import EmployeeAvatar from "./EmployeeAvatar";
import StatusBadge from "./StatusBadge";
import useaddEmployee from "../../hooks/useaddEmployee";
import useUpdateEmployee from "../../hooks/useUpdateEmployee";


const EmployeeRow = ({ employee }) => {
   
  const { avatar, name, email, department, role, status, createdAt } = employee;
  let { deleteMutation } = useaddEmployee();

  
    const { updateMutation } = useUpdateEmployee();

  
  

  const joinedDate = new Date(createdAt).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  return (
    <tr
      className="border-b transition-colors"
      style={{
        borderColor: "var(--border-color)",
      }}
    >
      <td className="px-5 py-4">
        <div className="flex items-center gap-3">
          <EmployeeAvatar avatar={avatar} name={name} />

          <div>
            <p
              className="font-semibold"
              style={{
                color: "var(--text-primary)",
              }}
            >
              {name}
            </p>

            <p
              className="text-sm"
              style={{
                color: "var(--text-third)",
              }}
            >
              {email}
            </p>
          </div>
        </div>
      </td>

      <td
        className="px-5 py-4 text-sm capitalize"
        style={{
          color: "var(--text-secondary)",
        }}
      >
        {department}
      </td>

      <td
        className="px-5 py-4 text-sm capitalize"
        style={{
          color: "var(--text-secondary)",
        }}
      >
        {role}
      </td>

      <td className="px-5 py-4">
        <StatusBadge status={status} />
      </td>

      <td
        className="px-5 py-4 text-sm"
        style={{
          color: "var(--text-third)",
        }}
      >
        {joinedDate}
      </td>

      <td className="px-5 py-4">
        <select
          name=""
          id=""
          disabled={updateMutation.isPending}
          onChange={(e) => {
            updateMutation.mutate({
              id: employee._id,
              data: {
                status: e.target.value,
              },
            });
          }}
        >
          <option className="text-black">status</option>
          <option value={"active"} className="text-black">
            active
          </option>
          <option value={"inactive"} className="text-black">
            inactive
          </option>
        </select>
      </td>

      <td className="px-5 py-4">
        <button
          onClick={() => deleteMutation.mutate(employee._id)}
          className="rounded px-3 py-1.5 text-sm transition hover:opacity-80"
          style={{
            color: "var(--text-four)",
          }}
        >
          delete
        </button>
      </td>
    </tr>
  );
};

export default EmployeeRow;
