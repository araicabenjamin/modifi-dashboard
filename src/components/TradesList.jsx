import TradeCard from "./TradeCard";

export default function TradesList({ items }) {
  return (
    <div className="tradesList">
      {items.map((trade) => ( 
        <TradeCard key={trade.id} item={trade} /> 
      ))}
    </div>
  );
}

  {/* items = repayments */} 
  {/* trade is  a temp variable for the current item in loop, trade = items[0] */}
  {/* Passes the trade object as a prop called item */}


