const RoleRow = ({ title, value, total, color, icon }) => {
  const percentage = total > 0 ? Math.round((value / total) * 100) : 0;

  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div
            className="rounded-lg p-2"
            style={{
              backgroundColor: "var(--bg-surface)",
              color,
            }}
          >
            {icon}
          </div>

          <div>
            <p className="text-sm font-medium">{title}</p>

            <p
              className="mt-1 text-xs"
              style={{
                color: "var(--text-third)",
              }}
            >
              {percentage}%
            </p>
          </div>
        </div>

        <span className="text-lg font-semibold">{value}</span>
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
            width: `${percentage}%`,
            backgroundColor: color,
          }}
        />
      </div>
    </div>
  );
};

export default RoleRow;
