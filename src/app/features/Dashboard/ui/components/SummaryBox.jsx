const SummaryBox = ({ icon, title, value }) => {
  return (
    <div
      className="rounded-xl border p-4"
      style={{
        backgroundColor: "var(--bg-surface)",
        borderColor: "var(--border-subtle)",
      }}
    >
      <div
        className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg"
        style={{
          backgroundColor: "var(--primary-soft)",
          color: "var(--primary)",
        }}
      >
        {icon}
      </div>

      <p
        className="text-xs"
        style={{
          color: "var(--text-third)",
        }}
      >
        {title}
      </p>

      <p className="mt-1 text-xl font-bold">{value}</p>
    </div>
  );
};

export default SummaryBox;
