"use client";

import { useState, useEffect } from "react";

import { supabase } from "../lib/supabase.js";

import { getOverviewMetrics } from "../utils/trademetrics";

import { ChevronRight, ClockCheck } from "lucide-react";

import ProgressArc from "../components/ProgressArc";

import "../styles/overview-page.scss";
import "../styles/overview-mobile.scss";

import type { Trade, TradeStatus } from "../types/trade";
import shipImage from "../assets/images/ship.svg";

type BillingItem = {
  id: number;
  invoiceNumber: string;
  date: string;
  amount: number;
};

export default function OverviewPage() {
  const [repayments, setRepayments] = useState<Trade[]>([]);

  const [billingData, setBillingData] = useState<BillingItem[]>([]);

  const [loading, setLoading] = useState<boolean>(true);

  const metrics = getOverviewMetrics(repayments);

  /* ----------------------------- */
  /* FETCH REPAYMENTS */
  /* ----------------------------- */

  useEffect(() => {
    async function fetchRepayments() {
      const { data, error } = await supabase.from("Repayments").select("*");

      if (error) {
        console.error(error);
        return;
      }

      setRepayments(data || []);

      setLoading(false);
    }

    fetchRepayments();
  }, []);

  /* ----------------------------- */
  /* FETCH BILLING */
  /* ----------------------------- */

  useEffect(() => {
    async function fetchBilling() {
      const { data, error } = await supabase.from("Billing").select("*");

      if (error) {
        console.error(error);
        return;
      }

      setBillingData(data || []);
    }

    fetchBilling();
  }, []);

  /* ----------------------------- */
  /* STATUS BADGES */
  /* ----------------------------- */

  function getRepaymentBadgeClass(status: TradeStatus): string {
    if (status === "In Review") {
      return "isReview";
    }

    if (status === "In Progress") {
      return "isProgress";
    }

    if (status === "Approved") {
      return "isCompleted";
    }

    return "";
  }

  return (
    <div className="overviewPage">
      {/* TOP */}

      <div className="buyerSellerTabs">
        <button className="buyerSellerTab activeTab">Buyer</button>

        <button className="buyerSellerTab">Seller</button>
      </div>

      <div className="overviewTop">
        {/* UTILIZATION */}

        <div className="card utilizationCard">
          <p className="cardLabel">LIMIT UTILIZATION</p>

          <div className="utilArcContainer">
            <ProgressArc value={metrics.utilizationPercent} />

            <div className="utilArcContent">
              <h2 className="stat-heading">
                {loading ? (
                  <span className="skeleton skeletonStat" />
                ) : (
                  `${metrics.utilizationPercent}%`
                )}
              </h2>

              <span className="utilLabel">used</span>
            </div>
          </div>

          <div className="utilRange">
            <span>$0</span>

            <span>${metrics.totalLimit.toLocaleString()}</span>
          </div>
        </div>

        {/* SUMMARY */}

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

      {/* BILLING + SHIPMENT */}

      <div className="overviewMiddle">
        {/* BILLING */}

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

            {billingData.map((item) => (
              <div className="billingRow" key={item.invoiceNumber}>
                <span className="invoiceLink table-link">
                  {item.invoiceNumber}
                </span>

                <span className="table-cell">{item.date}</span>

                <span className="table-cell">
                  €{Number(item.amount).toLocaleString()}
                </span>

                <button type="button" className="detailsLink table-link">
                  Details
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* SHIPMENT */}

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

          <div className="shipmentLineWrap">
            <div className="shipmentStartBlock"></div>

            <div className="shipmentLine"></div>

            <div className="shipmentDottedLine"></div>

            <div className="shipmentEndBlock"></div>

            <div className="shipImgContainer">
              <img
                src="/ship.svg"
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

      {/* REPAYMENTS */}

      <div className="overviewBottom">
        <div className="card repaymentsCard">
          <p className="cardLabel">REPAYMENTS</p>

          {/* DESKTOP */}

          <div className="repaymentsDesktop">
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

          {/* MOBILE */}

          <div className="repaymentsMobile">
            {repayments.slice(0, 6).map((item) => (
              <div className="repaymentMobileCard" key={item.id}>
                <div className="repaymentMobileTop">
                  <span className="repaymentReference">{item.id}</span>

                  <span className="repaymentPartner">{item.tradePartner}</span>
                </div>

                <div className="repaymentMobileBottom">
                  <span className="repaymentAmount">
                    {item.currency} {item.amount.toLocaleString()}
                  </span>

                  <span className="repaymentDate">{item.dueDate}</span>

                  <span
                    className={`repaymentBadge ${getRepaymentBadgeClass(
                      item.status,
                    )}`}
                  >
                    {item.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
