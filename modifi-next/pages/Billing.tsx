import "../styles/billing-page.scss";

export default function Billing() {
  return (
    <div className="billingPage">

      <div className="billingHeader">
        <h1 className="page-heading">Billing</h1>
      </div>

      <div className="billingTopCard">

        <div className="uploadSection">
          <h3>Upload Invoice</h3>
          <p>Please upload the invoice document for processing.</p>

          <div className="uploadRow">
            <button className="uploadBtn">UPLOAD</button>
            <span className="infoIcon">ⓘ</span>
          </div>
        </div>

        <div className="divider">
          <span>OR</span>
        </div>

        <div className="searchSection">
          <h3>Search for invoice</h3>
          <p>Please enter invoice ID or trade partner</p>

          <div className="searchRow">
            <input type="text" placeholder="SF-1213" />
            <input type="text" placeholder="Indian Shoes" />

            <button className="submitBtn">SUBMIT</button>
            <button className="resetBtn">RESET</button>
          </div>
        </div>

      </div>

      <div className="recentHeader">
        <span>Most recent</span>
        <span className="chevron">⌃</span>
      </div>

      <div className="invoiceList">

        {/* ITEM */}

        <div className="invoiceCard">

          <div className="progressLine progress80"></div>

          <div className="invoiceLeft">
            <h4>SF-1213</h4>
            <p>Indian Shoes</p>

            <div className="fileRow">
              <span>📄</span>
              <span>Invoice_1213.pdf</span>
            </div>
          </div>

          <div className="invoiceMiddle">
            <span className="label">Due Date</span>
            <p>11 April 2026</p>
          </div>

          <div className="invoiceAmount">
            € 50,000.00
          </div>

          <div className="status upcoming">
            <span>◔</span>
            Upcoming
          </div>

          <div className="details">
            Details →
          </div>

        </div>

        

        {/* ITEM */}

        <div className="invoiceCard">

          <div className="progressLine progress60"></div>

          <div className="invoiceLeft">
            <h4>SF-1225</h4>
            <p>Footlocker Germany</p>

            <div className="fileRow">
              <span>📄</span>
              <span>Invoice_1225.pdf</span>
            </div>
          </div>

          <div className="invoiceMiddle">
            <span className="label">Due Date</span>
            <p>05 April 2026</p>
          </div>

          <div className="invoiceAmount">
            € 25,000.00
          </div>

          <div className="status overdue">
            <span>!</span>
            Overdue
          </div>

          <div className="details">
            Details →
          </div>

        </div>

        {/* ITEM */}

        <div className="invoiceCard">

          <div className="progressLine progress40"></div>

          <div className="invoiceLeft">
            <h4>SF-1667</h4>
            <p>Alpha Trading</p>

            <div className="fileRow">
              <span>📄</span>
              <span>Invoice_1667.pdf</span>
            </div>
          </div>

          <div className="invoiceMiddle">
            <span className="label">Due Date</span>
            <p>21 May 2026</p>
          </div>

          <div className="invoiceAmount">
            € 15,000.00
          </div>

          <div className="status paid">
            <span>✓</span>
            Paid
          </div>

          <div className="details">
            Details →
          </div>

        </div>



         {/* ITEM */}

        <div className="invoiceCard">

          <div className="progressLine progress60"></div>

          <div className="invoiceLeft">
            <h4>SF-1125</h4>
            <p>ABC Mart</p>

            <div className="fileRow">
              <span>📄</span>
              <span>Invoice_1125.pdf</span>
            </div>
          </div>

          <div className="invoiceMiddle">
            <span className="label">Due Date</span>
            <p>05 April 2026</p>
          </div>

          <div className="invoiceAmount">
            € 25,000.00
          </div>

          <div className="status overdue">
            <span>!</span>
            Overdue
          </div>

          <div className="details">
            Details →
          </div>

        </div>

      </div>

    </div>

  );
}