import { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";

import { getOverviewMetrics } from "../utils/trademetrics";
import { ChevronRight } from "lucide-react";
import { ClockCheck } from "lucide-react";
import ProgressArc from "../components/ProgressArc";
import shipImage from "../assets/images/ship.svg";

import { repayments } from "../data/repayments.js";

import "../styles/Overview.scss";

export default function OverviewPage() {
  const [repayments, setRepayments] = useState([]);
  const [loading, setLoading] = useState(true);

  const metrics = getOverviewMetrics(repayments);

  // Fetch repayments from Supabase on component mount

  useEffect(() => {
    async function fetchRepayments() {
      const { data, error } = await supabase.from("Repayments").select("*");

      if (error) {
        console.error("Error fetching repayments:", error);
      } else {
        setRepayments(data);
        setLoading(false); // Sets loading to false after data is fetched
      }
    }

    fetchRepayments();
  }, []);

  // Helper function to determine badge class based on repayment status
  function getRepaymentBadgeClass(status) {
    if (status === "In Review") return "isReview";
    if (status === "In Progress") return "isProgress";
    if (status === "Approved") return "isCompleted";

    return "";
  }

  return (
    <div className="overviewPage">
      {/* TOP ROW */}

      <div className="buyerSellerTabs">
        <button className="buyerSellerTab activeTab">Buyer</button>

        <button className="buyerSellerTab">Seller</button>
      </div>

      <div className="overviewTop">
        {/* LEFT — UTILIZATION */}
        <div className="card utilizationCard">
          <p className="cardLabel">LIMIT UTILIZATION</p>

          <div className="utilArcContainer">
            <ProgressArc value={metrics.utilizationPercent} />

            <div className="utilArcContent ">
              <h2 className="stat-heading">
                {loading ? (
                  <div className="skeleton skeletonCircle"></div>
                ) : (
                  `${metrics.utilizationPercent}%`
                )}
              </h2>

              <span className="utilLabel">used</span>
            </div>
          </div>

          <div className="utilRange">
            <span>
              {loading ? <div className="skeleton skeletonMini"></div> : "$0"}
            </span>
            <span>
              {loading ? (
                <div className="skeleton skeletonMini"></div>
              ) : (
                `$${metrics.totalLimit.toLocaleString()}`
              )}
            </span>
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

            {/* Skeleton loader for total trades */}
            <div className="summaryMeta">
              <h3>
                {loading ? (
                  <div className="skeleton skeletonStat"></div>
                ) : (
                  metrics.totalTrades
                )}
              </h3>
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
              <h3>
                {loading ? (
                  <div className="skeleton skeletonStat"></div>
                ) : (
                  `$${metrics.totalTradeValue.toLocaleString()}`
                )}
              </h3>
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
              <h3>
                {loading ? (
                  <div className="skeleton skeletonStat"></div>
                ) : (
                  metrics.inProgress
                )}
              </h3>
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
              <span className="invoiceLink table-link">SF -1213</span>
              <span className="table-cell">21/03/2022</span>
              <span className="table-cell">€ 50,000.00</span>
              <button type="button" className="table-link">
                Details
              </button>
            </div>

            <div className="billingRow">
              <span className="invoiceLink table-link">SF -1255</span>
              <span className="table-cell">21/03/2022</span>
              <span className="table-cell">€ 25,000.00</span>
              <button type="button" className="table-link">
                Details
              </button>
            </div>

            <div className="billingRow">
              <span className="invoiceLink table-link">SF -1667</span>
              <span className="table-cell">21/03/2022</span>
              <span className="table-cell">€ 15,000.00</span>
              <button type="button" className="table-link">
                Details
              </button>
            </div>

            <div className="billingRow">
              <span className="invoiceLink table-link">SF -1667</span>
              <span className="table-cell">21/03/2022</span>
              <span className="table-cell">€ 35,000.00</span>
              <button type="button" className="table-link">
                Details
              </button>
            </div>

            <div className="billingRow">
              <span className="invoiceLink table-link">SF -1667</span>
              <span className="table-cell">21/03/2022</span>
              <span className="table-cell">€ 45,000.00</span>
              <button type="button" className="table-link">
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
              <span className="shipmentPill">
                <ClockCheck size={16} strokeWidth={2} color="#53A2D9" />
                Progress
              </span>

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

          {/* SHIP IMAGE */}
          <div className="shipmentLineWrap">
            <div className="shipmentStartBlock"></div>

            <div className="shipmentLine"></div>

            <div className="shipmentDottedLine"></div>

            <div className="shipmentEndBlock"></div>

            <div className="shipImgContainer">
              <img
                src={shipImage}
                alt="Shipment progress"
                className="shipmentTrackerImage"
              />
            </div>
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
            <button type="button" className="table-link">
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
              <p>MSKU 4583921</p>
            </div>

            <div>
              <h5>City Name</h5>
              <p>New York, USA</p>
            </div>

            <div>
              <h5>Country</h5>
              <p>United States</p>
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
                <span className="table-cell">{item.id}</span>

                <span className="table-cell">{item.tradePartner}</span>

                <span className="table-cell">
                  {item.currency} {item.amount.toLocaleString()}
                </span>

                <span className="table-cell">{item.dueDate}</span>

                <div className="repaymentStatusCell">
                  <span
                    className={`repaymentBadge ${getRepaymentBadgeClass(
                      item.status,
                    )}`}
                  >
                    {item.status}
                  </span>
                </div>

                <button type="button" className="detailsLink table-link">
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
