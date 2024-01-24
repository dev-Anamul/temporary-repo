function TableHeader() {
  return (
    <thead className="table_header_bg text_heading dark:text-sky-600  dark:bg-slate-900 text-[14px] font-poppins border-none">
      <tr>
        <th>No</th>
        <th>Category</th>
        <th>Purchase Date</th>
        <th>Price</th>
        <th>Depreciation Rate</th>
        <th></th>
      </tr>
    </thead>
  );
}

export default TableHeader;
