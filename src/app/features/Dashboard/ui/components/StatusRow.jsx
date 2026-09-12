const StatusRow = ({ color, title, value }) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <span
          className="h-2.5 w-2.5 rounded-full"
          style={{
            backgroundColor: color,
          }}
        />

        <span className="text-sm">{title}</span>
      </div>

      <span className="text-sm font-medium">{value}</span>
    </div>
  );
};

export default StatusRow;
