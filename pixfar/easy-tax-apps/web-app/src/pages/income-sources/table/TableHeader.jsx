function TableHeader() {
  return (
    <thead className="table_header_bg text_heading dark:text-sky-600  dark:bg-slate-900 text-[14px] font-poppins border-none">
      <tr>
        <th>No</th>
        <th>User</th>
        <th>Income</th>
        <th>Type</th>
        <th>Total($)</th>
        <th>Date</th>
        <th>Status</th>
        <th className="text-center">Actions</th>
      </tr>
    </thead>
  );
}

export default TableHeader;
