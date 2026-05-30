export type TradeStatus = "In Review" | "In Progress" | "Approved";

export type Trade = {
  id: string;
  tradePartner: string;
  amount: number;
  currency: string;
  dueDate: string;
  status: TradeStatus;
};