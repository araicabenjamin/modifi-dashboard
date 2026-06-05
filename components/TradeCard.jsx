import StatusBadge from "./StatusBadge";
import { Download, Info, ChevronRight } from "lucide-react";

export default function TradeCard({ item }) {
  return (
    <div className="tradeCard">
      <div className="tradeCardTop">
        {/* LEFT */}
        <div className="tradeMeta">
          <div className="tradeDate">Created on {item.dueDate}</div>

          <div className="tradeRef">{item.id}</div>

          <div className="tradeSub">Trade with {item.tradePartner}</div>
        </div>

        {/* MIDDLE (badge + amount) */}
        <div className="tradeInfo">
          <StatusBadge status={item.status} />

          <div className="tradeAmount">
            {item.currency} {item.amount.toLocaleString()}
          </div>
        </div>

        {/* RIGHT (actions + notice) */}
        <div className="tradeActions">
          <button className="viewDetails">
            View Details <ChevronRight size={16} />
          </button>

          <div className="tradeNotice">
            <Download size={16} />
            <span>Notice of assignment</span>
            <Info size={16} />
          </div>
        </div>
      </div>
    </div>
  );
}
