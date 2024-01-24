function TableHeader() {
  return (
    <thead className="table_header_bg text_heading dark:text-sky-600  dark:bg-slate-900 text-[14px] font-poppins border-none">
      <tr>
        <th>No</th>
        <th>Range</th>
        <th>Minimum</th>
        <th>Maximum</th>
        <th>Rate</th>
        <th className="text-center">Action</th>
      </tr>
    </thead>
  );
}

export default TableHeader;
