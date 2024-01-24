function TableHeader() {
  return (
    <thead className="table_header_bg text_heading dark:text-sky-600  dark:bg-slate-900 text-[14px] font-poppins border-none">
      <tr>
        <th>No</th>
        <th>Year</th>
        <th>Opening Value</th>
        <th>Depreciation Amount ( $ )</th>
        <th>Description ( % )</th>
        <th>Accumulated Depreciation</th>
        <th>Ending Value</th>
      </tr>
    </thead>
  );
}

export default TableHeader;
