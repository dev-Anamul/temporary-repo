function TableHeader() {
  return (
    <thead className="table_header_bg text_heading dark:text-sky-600  dark:bg-slate-900 text-[14px] font-poppins border-none">
      <tr>
        <th>No</th>
        <th>Year</th>
        <th>Income</th>
        <th>Expense</th>
        <th>Taxable Income</th>
        <th>TAX</th>
      </tr>
    </thead>
  );
}

export default TableHeader;
