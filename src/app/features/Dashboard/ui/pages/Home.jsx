import React from "react";

import {
  Users,
  UserCheck,
  UserX,
  Building2,
  Download,
  CalendarDays,
  ShieldCheck,
  BriefcaseBusiness,
  ClipboardList,
  Clock3,
  CheckCircle2,
} from "lucide-react";

import { useSelector } from "react-redux";

import StatCard from "../components/StatCard";
import StatusRow from "../components/StatusRow";
import RoleRow from "../components/RoleRow";
import SummaryBox from "../components/SummaryBox";

import useEmployee from "../../../admin module/employees/hooks/useEmployee";
import DashboardHook from "../../hooks/DashboardHook";

const Home = () => {
  // ==============================
  // AUTH USER
  // ==============================

  const employee = useSelector((state) => state.auth.employee);

  const isAdmin = employee?.role === "admin";

  // ==============================
  // TASK DATA
  // ==============================

const { task } = DashboardHook();

const tasks = task?.tasks ?? [];

const totalTasks = task?.total ?? tasks.length;

const completedTasks = tasks.filter(
  (item) => item.status === "completed",
).length;

const pendingTasks = tasks.filter(
  (item) => item.status === "todo" || item.status === "in-progress",
).length;
 

  const { data, isLoading, isError } = useEmployee({
    enabled: isAdmin,
  });

  const employees = data?.employees ?? [];


  const totalEmployees = data?.total ?? 0;

  const activeEmployees = employees.filter(
    (employee) => employee.status === "active",
  ).length;

  const inactiveEmployees = employees.filter(
    (employee) => employee.status === "inactive",
  ).length;

  const departments = [
    ...new Set(
      employees.map((employee) => employee.department).filter(Boolean),
    ),
  ];

  const departmentData = departments.map((department) => {
    const count = employees.filter(
      (employee) => employee.department === department,
    ).length;

    const percentage =
      employees.length > 0 ? Math.round((count / employees.length) * 100) : 0;

    return {
      department,
      count,
      percentage,
    };
  });

  const adminCount = employees.filter(
    (employee) => employee.role === "admin",
  ).length;

  const employeeCount = employees.filter(
    (employee) => employee.role === "employee",
  ).length;

  const activePercentage =
    employees.length > 0
      ? Math.round((activeEmployees / employees.length) * 100)
      : 0;

  const inactivePercentage =
    employees.length > 0
      ? Math.round((inactiveEmployees / employees.length) * 100)
      : 0;



  if (isAdmin && isLoading) {
    return (
      <div
        className="flex min-h-[400px] items-center justify-center"
        style={{ color: "var(--text-third)" }}
      >
        Loading dashboard...
      </div>
    );
  }



  if (isAdmin && isError) {
    return (
      <div
        className="rounded-xl border p-6"
        style={{
          backgroundColor: "var(--bg-card)",
          borderColor: "var(--border-color)",
        }}
      >
        <h2 className="font-semibold">Failed to load dashboard</h2>

        <p className="mt-1 text-sm" style={{ color: "var(--text-third)" }}>
          Please try again later.
        </p>
      </div>
    );
  }



  if (!isAdmin) {
    return (
      <div className="space-y-6">
        {/* Header */}

        <div>
          <h1 className="text-2xl font-bold">
            Welcome, {employee?.name || "Employee"}
          </h1>

          <p className="mt-1 text-sm" style={{ color: "var(--text-third)" }}>
            Here's an overview of your work and account.
          </p>
        </div>

       

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
          <StatCard
            title="My Tasks"
            value={totalTasks}
            icon={<ClipboardList size={22} />}
            iconBackground="var(--primary-soft)"
            iconColor="var(--primary)"
            footer={
              <span className="text-sm" style={{ color: "var(--text-third)" }}>
                Assigned tasks
              </span>
            }
          />

          <StatCard
            title="Completed"
            value={completedTasks}
            icon={<CheckCircle2 size={22} />}
            iconBackground="rgba(34,197,94,0.12)"
            iconColor="var(--success)"
            footer={
              <span className="text-sm" style={{ color: "var(--success)" }}>
                Completed tasks
              </span>
            }
          />

          <StatCard
            title="Pending"
            value={pendingTasks}
            icon={<Clock3 size={22} />}
            iconBackground="rgba(245,158,11,0.12)"
            iconColor="var(--warning)"
            footer={
              <span className="text-sm" style={{ color: "var(--warning)" }}>
                Tasks remaining
              </span>
            }
          />

          <StatCard
            title="Status"
            value={employee?.status || "-"}
            icon={<UserCheck size={22} />}
            iconBackground="rgba(34,197,94,0.12)"
            iconColor="var(--success)"
            footer={
              <span className="text-sm" style={{ color: "var(--text-third)" }}>
                Account status
              </span>
            }
          />
        </div>

    

        <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
          {/* Profile */}

          <div
            className="rounded-xl border p-6"
            style={{
              backgroundColor: "var(--bg-card)",
              borderColor: "var(--border-color)",
              boxShadow: "var(--shadow-md)",
            }}
          >
            <div className="mb-6">
              <h2 className="text-lg font-semibold">My Profile</h2>

              <p
                className="mt-1 text-sm"
                style={{ color: "var(--text-third)" }}
              >
                Your account information.
              </p>
            </div>

            <div className="flex items-center gap-4">
              <img
                src={
                  employee?.avatar ||
                  `https://ui-avatars.com/api/?name=${encodeURIComponent(
                    employee?.name || "User",
                  )}`
                }
                alt={employee?.name || "User"}
                className="h-16 w-16 rounded-full object-cover"
              />

              <div>
                <h3 className="font-semibold">{employee?.name || "-"}</h3>

                <p className="text-sm" style={{ color: "var(--text-third)" }}>
                  {employee?.email || "-"}
                </p>

                <div className="mt-2 flex gap-2">
                  <span
                    className="rounded-full px-3 py-1 text-xs capitalize"
                    style={{
                      backgroundColor: "var(--primary-soft)",
                      color: "var(--primary)",
                    }}
                  >
                    {employee?.role || "-"}
                  </span>

                  <span
                    className="rounded-full px-3 py-1 text-xs capitalize"
                    style={{
                      backgroundColor:
                        employee?.status === "active"
                          ? "rgba(34,197,94,0.12)"
                          : "rgba(239,68,68,0.12)",

                      color:
                        employee?.status === "active"
                          ? "var(--success)"
                          : "var(--danger)",
                    }}
                  >
                    {employee?.status || "-"}
                  </span>
                </div>
              </div>
            </div>
          </div>

          
          <div
            className="rounded-xl border p-6"
            style={{
              backgroundColor: "var(--bg-card)",
              borderColor: "var(--border-color)",
              boxShadow: "var(--shadow-md)",
            }}
          >
            <div className="mb-6">
              <h2 className="text-lg font-semibold">Work Summary</h2>

              <p
                className="mt-1 text-sm"
                style={{ color: "var(--text-third)" }}
              >
                Your current work overview.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <SummaryBox
                icon={<ClipboardList size={18} />}
                title="Tasks"
                value={totalTasks}
              />

              <SummaryBox
                icon={<CheckCircle2 size={18} />}
                title="Completed"
                value={completedTasks}
              />

              <SummaryBox
                icon={<Clock3 size={18} />}
                title="Pending"
                value={pendingTasks}
              />

              <SummaryBox
                icon={<Building2 size={18} />}
                title="Department"
                value={employee?.department || "-"}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }


  return (
    <div className="space-y-6">
      {/* Header */}

      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>

          <p className="mt-1 text-sm" style={{ color: "var(--text-third)" }}>
            Overview of your workforce and employee activity.
          </p>
        </div>

        
      </div>

      {/* Stats */}

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard
          title="Total Employees"
          value={totalEmployees}
          icon={<Users size={22} />}
          iconBackground="var(--primary-soft)"
          iconColor="var(--primary)"
          footer={
            <span className="text-sm" style={{ color: "var(--text-third)" }}>
              Total workforce
            </span>
          }
        />

        <StatCard
          title="Active Employees"
          value={activeEmployees}
          icon={<UserCheck size={22} />}
          iconBackground="rgba(34,197,94,0.12)"
          iconColor="var(--success)"
          footer={
            <span className="text-sm" style={{ color: "var(--success)" }}>
              {activePercentage}% of current page
            </span>
          }
        />

        <StatCard
          title="Inactive Employees"
          value={inactiveEmployees}
          icon={<UserX size={22} />}
          iconBackground="rgba(239,68,68,0.12)"
          iconColor="var(--danger)"
          footer={
            <span className="text-sm" style={{ color: "var(--text-third)" }}>
              {inactivePercentage}% of current page
            </span>
          }
        />

        <StatCard
          title="Departments"
          value={departments.length}
          icon={<Building2 size={22} />}
          iconBackground="rgba(59,130,246,0.12)"
          iconColor="rgb(59,130,246)"
          footer={
            <span className="text-sm" style={{ color: "var(--text-third)" }}>
              Active departments
            </span>
          }
        />
      </div>

     

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
     

        <div
          className="rounded-xl border p-6"
          style={{
            backgroundColor: "var(--bg-card)",
            borderColor: "var(--border-color)",
            boxShadow: "var(--shadow-md)",
          }}
        >
          <div className="mb-6">
            <h2 className="text-lg font-semibold">
              Department-wise Employee Distribution
            </h2>

            <p className="mt-1 text-sm" style={{ color: "var(--text-third)" }}>
              Employee distribution across departments.
            </p>
          </div>

          <div className="space-y-5">
            {departmentData.length > 0 ? (
              departmentData.map((item) => (
                <div key={item.department}>
                  <div className="mb-2 flex justify-between">
                    <span className="text-sm font-medium">
                      {item.department}
                    </span>

                    <span
                      className="text-sm"
                      style={{ color: "var(--text-third)" }}
                    >
                      {item.count} ({item.percentage}%)
                    </span>
                  </div>

                  <div
                    className="h-2 overflow-hidden rounded-full"
                    style={{
                      backgroundColor: "var(--bg-hover)",
                    }}
                  >
                    <div
                      className="h-full rounded-full transition-all duration-500"
                      style={{
                        width: `${item.percentage}%`,
                        backgroundColor: "var(--primary)",
                      }}
                    />
                  </div>
                </div>
              ))
            ) : (
              <p className="text-sm" style={{ color: "var(--text-third)" }}>
                No department data available.
              </p>
            )}
          </div>
        </div>

     

        <div
          className="rounded-xl border p-6"
          style={{
            backgroundColor: "var(--bg-card)",
            borderColor: "var(--border-color)",
            boxShadow: "var(--shadow-md)",
          }}
        >
          <div className="mb-6">
            <h2 className="text-lg font-semibold">Employee Status</h2>

            <p className="mt-1 text-sm" style={{ color: "var(--text-third)" }}>
              Current employee status breakdown.
            </p>
          </div>

          <div className="flex flex-col items-center gap-8 sm:flex-row sm:justify-center">
            <div
              className="relative flex h-44 w-44 items-center justify-center rounded-full"
              style={{
                background: `conic-gradient(
                  var(--primary) 0% ${activePercentage}%,
                  var(--warning) ${activePercentage}% 100%
                )`,
              }}
            >
              <div
                className="flex h-32 w-32 flex-col items-center justify-center rounded-full"
                style={{
                  backgroundColor: "var(--bg-card)",
                }}
              >
                <span className="text-3xl font-bold">{employees.length}</span>

                <span
                  className="text-xs"
                  style={{ color: "var(--text-third)" }}
                >
                  Employees
                </span>
              </div>
            </div>

            <div className="w-full max-w-[220px] space-y-5">
              <StatusRow
                color="var(--primary)"
                title="Active"
                value={activeEmployees}
              />

              <StatusRow
                color="var(--warning)"
                title="Inactive"
                value={inactiveEmployees}
              />
            </div>
          </div>
        </div>
      </div>

      

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
       

        <div
          className="rounded-xl border p-6"
          style={{
            backgroundColor: "var(--bg-card)",
            borderColor: "var(--border-color)",
            boxShadow: "var(--shadow-md)",
          }}
        >
          <div className="mb-6">
            <h2 className="text-lg font-semibold">Role Overview</h2>

            <p className="mt-1 text-sm" style={{ color: "var(--text-third)" }}>
              Distribution of employees by role.
            </p>
          </div>

          <div className="space-y-6">
            <RoleRow
              title="Administrators"
              value={adminCount}
              total={employees.length}
              color="var(--primary)"
              icon={<ShieldCheck size={18} />}
            />

            <RoleRow
              title="Employees"
              value={employeeCount}
              total={employees.length}
              color="var(--success)"
              icon={<BriefcaseBusiness size={18} />}
            />
          </div>
        </div>

       

        <div
          className="rounded-xl border p-6"
          style={{
            backgroundColor: "var(--bg-card)",
            borderColor: "var(--border-color)",
            boxShadow: "var(--shadow-md)",
          }}
        >
          <div className="mb-6">
            <h2 className="text-lg font-semibold">Workforce Summary</h2>

            <p className="mt-1 text-sm" style={{ color: "var(--text-third)" }}>
              Quick overview of workforce data.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <SummaryBox
              icon={<Users size={18} />}
              title="Total Employees"
              value={totalEmployees}
            />

            <SummaryBox
              icon={<UserCheck size={18} />}
              title="Active"
              value={activeEmployees}
            />

            <SummaryBox
              icon={<Building2 size={18} />}
              title="Departments"
              value={departments.length}
            />

            <SummaryBox
              icon={<ShieldCheck size={18} />}
              title="Admins"
              value={adminCount}
            />
          </div>
        </div>
      </div>

   

      <div
        className="rounded-xl border"
        style={{
          backgroundColor: "var(--bg-card)",
          borderColor: "var(--border-color)",
          boxShadow: "var(--shadow-md)",
        }}
      >
        <div
          className="border-b p-6"
          style={{
            borderColor: "var(--border-color)",
          }}
        >
          <h2 className="text-lg font-semibold">Employees</h2>

          <p className="mt-1 text-sm" style={{ color: "var(--text-third)" }}>
            Recently loaded employees.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr
                className="border-b text-sm"
                style={{
                  borderColor: "var(--border-color)",
                  color: "var(--text-third)",
                }}
              >
                <th className="px-6 py-4">Employee</th>

                <th className="px-6 py-4">Department</th>

                <th className="px-6 py-4">Role</th>

                <th className="px-6 py-4">Status</th>
              </tr>
            </thead>

            <tbody>
              {employees.length > 0 ? (
                employees.map((employee) => (
                  <tr
                    key={employee._id || employee.id}
                    className="border-b"
                    style={{
                      borderColor: "var(--border-subtle)",
                    }}
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <img
                          src={
                            employee.avatar ||
                            `https://ui-avatars.com/api/?name=${encodeURIComponent(
                              employee.name || "User",
                            )}`
                          }
                          alt={employee.name}
                          className="h-10 w-10 rounded-full object-cover"
                        />

                        <div>
                          <p className="font-medium">{employee.name}</p>

                          <p
                            className="text-xs"
                            style={{
                              color: "var(--text-third)",
                            }}
                          >
                            {employee.email}
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="px-6 py-4 text-sm">
                      {employee.department || "-"}
                    </td>

                    <td className="px-6 py-4 text-sm capitalize">
                      {employee.role || "-"}
                    </td>

                    <td className="px-6 py-4">
                      <span
                        className="rounded-full px-3 py-1 text-xs font-medium capitalize"
                        style={{
                          backgroundColor:
                            employee.status === "active"
                              ? "rgba(34,197,94,0.12)"
                              : "rgba(239,68,68,0.12)",

                          color:
                            employee.status === "active"
                              ? "var(--success)"
                              : "var(--danger)",
                        }}
                      >
                        {employee.status}
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="4"
                    className="px-6 py-10 text-center text-sm"
                    style={{
                      color: "var(--text-third)",
                    }}
                  >
                    No employees found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Home;
