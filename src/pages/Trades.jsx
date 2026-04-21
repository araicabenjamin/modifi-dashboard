function Trades() {
  return (
    <>
      FilterBar
      <RepaymentsTable repayments={filteredRepayments} />
    </>
  );
}

//  import RepaymentsTable
// 1. own filter state
// 2. compute filteredRepayments
// 3. render:
