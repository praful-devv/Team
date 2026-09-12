const StatCard = ({
  title,
  value,
  icon,
  iconBackground,
  iconColor,
  footer,
}) => {
  return (
    <div
      className="rounded-xl border p-5"
      style={{
        backgroundColor: "var(--bg-card)",
        borderColor: "var(--border-color)",
        boxShadow: "var(--shadow-md)",
      }}
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm" style={{ color: "var(--text-third)" }}>
            {title}
          </p>

          <h2 className="mt-2 text-3xl font-bold">{value}</h2>
        </div>

        <div
          className="rounded-xl p-3"
          style={{
            backgroundColor: iconBackground,
            color: iconColor,
          }}
        >
          {icon}
        </div>
      </div>

      <div className="mt-5 flex items-center gap-2">{footer}</div>
    </div>
  );
};

export default StatCard;
