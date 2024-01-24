function TableHeader() {
  return (
    <thead className="table_header_bg text_heading dark:text-sky-600  dark:bg-slate-900 text-[14px] font-poppins border-none">
      <tr>
        <th>No</th>
        <th>Name</th>
        <th>Email</th>
        <th>Address</th>
        <th>Date of Birth</th>
        <th className="text-center">Action</th>
      </tr>
    </thead>
  );
}

export default TableHeader;
