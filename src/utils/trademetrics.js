export function getOverviewMetrics(trades, totalLimit = 200000) {
  const totalTrades = trades.length;

  const totalTradeValue = trades.reduce((sum, trade) => {
    return sum + trade.amount;
  }, 0);

  const actionRequired = trades.filter((trade) => {
    return trade.status === "In Review";
  }).length;

  const usedLimit = trades
    .filter((trade) => {
      return trade.status === "Approved" || trade.status === "In Progress";
    })
    .reduce((sum, trade) => {
      return sum + trade.amount;
    }, 0);

      const inProgress = trades.filter((trade) => {
    return trade.status === "In Progress";
  }).length;
  
// If limit is above 0 then calculate percentage, else return 0
  const utilizationPercent = 
  totalLimit > 0 ? Math.round(usedLimit / totalLimit * 100) : 0;

  return {
    totalTrades,
    totalTradeValue,
    actionRequired,
    usedLimit,
    inProgress,
    utilizationPercent,
    totalLimit,
  };
} 
