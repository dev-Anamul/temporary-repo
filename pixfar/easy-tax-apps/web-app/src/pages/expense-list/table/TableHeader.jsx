function TableHeader() {
  return (
    <thead className="table_header_bg text_heading dark:text-sky-600  dark:bg-slate-900 text-[14px] font-poppins border-none">
      <tr>
        <th>No</th>
        {/* <th>Expense</th> */}
        <th>User Name</th>
        <th>Expense Type</th>
        <th>Total($)</th>
        <th>GST($)</th>
        <th>Claimable($)</th>
        <th>GST Claimable</th>
        <th>Status</th>
        <th>Date</th>
        {/* <th className="w-52">Description</th> */}
        <th className="text-center">Actions</th>
      </tr>
    </thead>
  );
}

export default TableHeader;
