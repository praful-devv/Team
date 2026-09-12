import useEmployee from "../../hooks/useEmployee";
import EmployeeStats from "../components/EmployeeStats";
import EmployeeTable from "../components/EmployeeTable";
import EmployeeToolbar from "../components/EmployeeToolbar";

const Employee = () => {
  let {
    data,
    isPending,
    PageNumber,
    ButtonPrev,
    ButtonNext,
    navigate,
    filter,
    Searchfilter,
  } = useEmployee();

  if (isPending) return <h1>Loading...</h1>;

  console.log(data);
  

  return (
    <div
      className="min-h-screen px-4 "
      style={{
        backgroundColor: "var(--bg-main)",
        color: "var(--text-primary)",
      }}
    >
      <div className="mb-8 flex md:items-center justify-between gap-4 flex-wrap">
        <div>
          <h2 className="text-3xl font-bold">Employees</h2>

          <p
            className="mt-1 text-sm"
            style={{
              color: "var(--text-third)",
            }}
          >
            Manage and monitor your organization employees
          </p>
        </div>

        <button
          className="rounded-[var(--radius-md)] md:px-4 md:py-2 px-2  py-2 text-sm font-semibold transition hover:opacity-90"
          style={{
            backgroundColor: "var(--primary)",
            color: "var(--text-primary)",
          }}
          onClick={() => navigate("/home/addEmployee")}
        >
          + Add Employee
        </button>
      </div>

      <EmployeeStats employees={data.employees} />

      <EmployeeToolbar filter={filter} Searchfilter={Searchfilter} />

      <div className="  overflow-auto">
        <EmployeeTable employees={data.employees} />
      </div>

      <div className="flex justify-center gap-4">
        <button className="" onClick={ButtonPrev}>
          prev
        </button>
        <p>{PageNumber}</p>

        <button className="" onClick={ButtonNext}>
          next
        </button>
      </div>
    </div>
  );
};

export default Employee;
