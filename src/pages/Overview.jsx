import { repayments } from "../data/repayments.js";
import { getOverviewMetrics } from "../utils/tradeMetrics";
import { ChevronRight } from "lucide-react";
import "../styles/overview.scss";

export default function OverviewPage() {
  const metrics = getOverviewMetrics(repayments);

  function getRepaymentBadgeClass(status) {
    if (status === "In Review") return "isReview";
    if (status === "In Progress") return "isProgress";
    if (status === "Approved") return "isCompleted";

    return "";
  }

  return (
    <div className="overviewPage">
      {/* TOP ROW */}
      <div className="overviewTop">
        {/* LEFT — UTILIZATION */}
        <div className="card utilizationCard">
          <p className="cardLabel">LIMIT UTILIZATION</p>

          <div className="utilCenter">
            <h2>{metrics.utilizationPercent}%</h2>
            <span>used</span>
          </div>

          <div className="utilRange">
            <span>$0</span>
            <span>${metrics.totalLimit.toLocaleString()}</span>
          </div>
        </div>

        {/* RIGHT — ORDER OVERVIEW */}
        <div className="card summaryCard">
          <p className="cardLabel">ORDER OVERVIEW</p>

          <div className="summaryRow">
            <div className="summaryText">
              <p>Total Trades</p>
              <span>Total number of trades with MODIFI</span>
            </div>

            <div className="summaryMeta">
              <h3>{metrics.totalTrades}</h3>
              <button type="button" className="viewLink">
                View
              </button>
            </div>
          </div>

          <div className="summaryRow">
            <div className="summaryText">
              <p>Trade Value</p>
              <span>Total value of trades with MODIFI till date</span>
            </div>

            <div className="summaryMeta">
              <h3>${metrics.totalTradeValue.toLocaleString()}</h3>
              <button type="button" className="viewLink">
                View
              </button>
            </div>
          </div>

          <div className="summaryRow">
            <div className="summaryText">
              <p>Trade in Progress</p>
              <span>Total number of trades in progress</span>
            </div>

            <div className="summaryMeta">
              <h3>{metrics.inProgress}</h3>
              <button type="button" className="viewLink">
                View
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* MIDDLE ROW */}
      <div className="overviewMiddle">
        <div className="card billingCard">
          <div className="billingHeader">
            <p className="cardLabel">YOUR MONTHLY BILLING</p>
            <button type="button" className="viewLink">
              <span>View Past Billing</span>
              <ChevronRight size={16} />
            </button>
          </div>

          <div className="billingTable">
            <div className="billingTableHead">
              <span>Invoice</span>
              <span>Date</span>
              <span>Amount</span>
              <span></span>
            </div>

            <div className="billingRow">
              <span className="invoiceLink">SF -1213</span>
              <span>21/03/2022</span>
              <span>€ 50,000.00</span>
              <button type="button" className="detailsLink">
                Details
              </button>
            </div>

            <div className="billingRow">
              <span className="invoiceLink">SF -1255</span>
              <span>21/03/2022</span>
              <span>€ 25,000.00</span>
              <button type="button" className="detailsLink">
                Details
              </button>
            </div>

            <div className="billingRow">
              <span className="invoiceLink">SF -1667</span>
              <span>21/03/2022</span>
              <span>€ 15,000.00</span>
              <button type="button" className="detailsLink">
                Details
              </button>
            </div>

            <div className="billingRow">
              <span className="invoiceLink">SF -1667</span>
              <span>21/03/2022</span>
              <span>€ 35,000.00</span>
              <button type="button" className="detailsLink">
                Details
              </button>
            </div>

            <div className="billingRow">
              <span className="invoiceLink">SF -1667</span>
              <span>21/03/2022</span>
              <span>€ 45,000.00</span>
              <button type="button" className="detailsLink">
                Details
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT CARD */}
        <div className="card shipmentCard">
          <div className="shipmentHeader">
            <p className="cardLabel">SHIPMENT TRACKER</p>

            <div className="shipmentControls">
              <span className="shipmentPill">Progress</span>
              <div className="shipmentNav">
                <button type="button" className="shipmentArrow">
                  ‹
                </button>
                <span>1-2</span>
                <button type="button" className="shipmentArrow">
                  ›
                </button>
              </div>
            </div>
          </div>

          <div className="shipmentLineWrap">
            <div className="shipmentLine"></div>
          </div>

          <div className="shipmentLocations">
            <div>
              <h4>New York, USA</h4>
              <span>12/01/2022</span>
            </div>

            <div className="shipmentRightLocation">
              <h4>Hamburg, DE</h4>
              <span>12/01/2022</span>
            </div>
          </div>

          <div className="shipmentDetailsTop">
            <button type="button" className="detailsLink">
              Details
            </button>
          </div>

          <div className="shipmentDetailsGrid">
            <div>
              <h5>Trade No</h5>
              <p>234256789876543</p>
            </div>

            <div>
              <h5>Container</h5>
              <p>AlphaNumericalnumber</p>
            </div>

            <div>
              <h5>City Name</h5>
              <p>Dateoftheshipmentdeparture</p>
            </div>

            <div>
              <h5>Country</h5>
              <p>Dateoftheshipmentdeparture</p>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM ROW */}
      <div className="overviewBottom">
        <div className="card repaymentsCard">
          <p className="cardLabel">REPAYMENTS</p>

          <div className="repaymentsTable">
            <div className="repaymentsHead">
              <span>Reference Code</span>
              <span>Trade Partner</span>
              <span>To be Paid</span>
              <span>Due Date</span>
              <span>Status</span>
              <span></span>
            </div>

            {repayments.slice(0, 6).map((item) => (
              <div className="repaymentsRow" key={item.id}>
                <span className="referenceLink">{item.id}</span>

                <span>{item.tradePartner}</span>

                <span>
                  {item.currency} {item.amount.toLocaleString()}
                </span>

                <span>{item.dueDate}</span>

                <div className="repaymentStatusCell">
                  <span
                    className={`repaymentBadge ${getRepaymentBadgeClass(
                      item.status,
                    )}`}
                  >
                    {item.status}
                  </span>
                </div>

                <button type="button" className="detailsLink">
                  Details
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
