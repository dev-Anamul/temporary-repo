function TableHeader() {
  return (
    <thead className="table_header_bg text_heading dark:text-sky-600  dark:bg-slate-900 text-[14px] font-poppins border-none">
      <tr>
        <th>No</th>
        <th>Fiscal Year</th>
        <th>Start Date</th>
        <th>End Date</th>
        <th className="text-center">Action</th>
      </tr>
    </thead>
  );
}

export default TableHeader;
