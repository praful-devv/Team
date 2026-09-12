import React from "react";
import {
  User,
  Mail,
  Shield,
  Building2,
  Lock,
  Bell,
  Palette,
  ChevronRight,
  CheckCircle2,
} from "lucide-react";

import { useSelector } from "react-redux";

const Settings = () => {
  const employee = useSelector((state) => state.auth.employee);

  return (
    <div className="mx-auto max-w-5xl space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Settings</h1>

        <p className="mt-1 text-sm" style={{ color: "var(--text-third)" }}>
          Manage your profile, account preferences and security.
        </p>
      </div>

      <section
        className="rounded-xl border p-6"
        style={{
          backgroundColor: "var(--bg-card)",
          borderColor: "var(--border-color)",
          boxShadow: "var(--shadow-md)",
        }}
      >
        <div className="mb-6">
          <h2 className="text-lg font-semibold">Profile</h2>

          <p className="text-sm" style={{ color: "var(--text-third)" }}>
            Your current account information.
          </p>
        </div>

        <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
          <img
            src={
              employee?.avatar ||
              `https://ui-avatars.com/api/?name=${encodeURIComponent(
                employee?.name || "User",
              )}`
            }
            alt={employee?.name || "User"}
            className="h-24 w-24 rounded-full object-cover"
          />

          <div className="grid flex-1 grid-cols-1 gap-5 sm:grid-cols-2">
            <ProfileItem
              icon={<User size={17} />}
              label="Full Name"
              value={employee?.name || "-"}
            />

            <ProfileItem
              icon={<Mail size={17} />}
              label="Email"
              value={employee?.email || "-"}
            />

            <ProfileItem
              icon={<Shield size={17} />}
              label="Role"
              value={employee?.role || "-"}
            />

            <ProfileItem
              icon={<Building2 size={17} />}
              label="Department"
              value={employee?.department || "-"}
            />
          </div>
        </div>
      </section>

      <section
        className="rounded-xl border"
        style={{
          backgroundColor: "var(--bg-card)",
          borderColor: "var(--border-color)",
          boxShadow: "var(--shadow-md)",
        }}
      >
        <div className="flex items-center justify-between p-5">
          <div className="flex items-center gap-4">
            <div
              className="rounded-lg p-2.5"
              style={{
                backgroundColor: "var(--primary-soft)",
                color: "var(--primary)",
              }}
            >
              <CheckCircle2 size={20} />
            </div>

            <div>
              <p className="font-medium">Current Session</p>

              <p className="text-sm" style={{ color: "var(--text-third)" }}>
                You are currently logged in.
              </p>
            </div>
          </div>

          <span
            className="rounded-full px-3 py-1 text-xs font-medium"
            style={{
              backgroundColor: "rgba(34,197,94,0.12)",
              color: "var(--success)",
            }}
          >
            Active
          </span>
        </div>
      </section>
    </div>
  );
};

const ProfileItem = ({ icon, label, value }) => {
  return (
    <div>
      <div
        className="mb-1 flex items-center gap-2 text-xs"
        style={{ color: "var(--text-third)" }}
      >
        {icon}
        {label}
      </div>

      <p className="text-sm font-medium capitalize">{value}</p>
    </div>
  );
};

export default Settings;
