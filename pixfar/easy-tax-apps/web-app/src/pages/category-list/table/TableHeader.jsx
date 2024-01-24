function TableHeader() {
  return (
    <thead className="table_header_bg text_heading dark:text-sky-600  dark:bg-slate-900 text-[14px] font-poppins border-none">
      <tr>
        <th>No</th>
        {/* <th>Category Type</th> */}
        <th>Expense Type</th>
        <th>Claimable ( % )</th>
        <th>Depreciation ( % )</th>
        <th>Description</th>
        <th>Created at</th>
        <th className="text-center">Actions</th>
      </tr>
    </thead>
  );
}

export default TableHeader;
