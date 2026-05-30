import "../styles/shipments-page.scss";


export default function Shipments() {
  return (
    <div className="shipmentsPage">

      {/* HEADER */}

      <div className="shipmentsHeader">
        <h1>Shipment Tracker</h1>
      </div>

      {/* TOP CARD */}

      <div className="shipmentsTopCard">

        {/* LEFT */}

        <div className="uploadSection">
          <h3>Uploading Bill of Lading</h3>

          <p>
            Please upload the Document to track container.
          </p>

          <div className="uploadRow">
            <button className="uploadBtn">UPLOAD</button>

            <span className="infoIcon">ⓘ</span>
          </div>
        </div>

        {/* DIVIDER */}

        <div className="divider">
          <span>OR</span>
        </div>

        {/* RIGHT */}

        <div className="searchSection">
          <h3>Search for containers</h3>

          <p>
            Please enter the container ID and date of shipment to track
          </p>

          <div className="searchRow">

            <input
              type="text"
              placeholder="4324354354456"
            />

            <div className="dateInput">
              <input
                type="text"
                placeholder="05.02.2022"
              />

              <span className="calendarIcon">🗓</span>
            </div>

            <button className="submitBtn">
              SUBMIT
            </button>

            <button className="resetBtn">
              RESET
            </button>

          </div>
        </div>

      </div>

      {/* RECENT */}

      <div className="recentHeader">
        <span>Most recent</span>
        <span className="chevron">⌃</span>
      </div>

      {/* LIST */}

      <div className="shipmentList">

        {/* ITEM */}

        <div className="shipmentCard">

          <div className="progressLine progress50"></div>

          <div className="shipmentLocation">
            <h4>Lagos, Nigeria</h4>
            <p>22, February 2023</p>

            <div className="fileRow">
              <span>📄</span>
              <span>NameoftheFile</span>
            </div>
          </div>

          <div className="shipmentLocation">
            <h4>Cairo, Egypt</h4>
            <p>22, February 2023</p>
          </div>

          <div className="shipmentContainer">
            <h4>Container</h4>
            <p>#340586</p>
          </div>

          <div className="shipmentStatus">
            <span>⟳</span>
            In Progress
          </div>

          <div className="shipmentDetails">
            Details →
          </div>

        </div>

        {/* ITEM */}

        <div className="shipmentCard">

          <div className="progressLine progress30"></div>

          <div className="shipmentLocation">
            <h4>Las Vegas, USA</h4>
            <p>Dateoftheshipmentdeparture</p>

            <div className="fileRow">
              <span>📄</span>
              <span>NameoftheFile</span>
            </div>
          </div>

          <div className="shipmentLocation">
            <h4>Shanghai, China</h4>
            <p>Dateoftheshipmentdeparture</p>
          </div>

          <div className="shipmentContainer">
            <h4>Container</h4>
            <p>#340586</p>
          </div>

          <div className="shipmentStatus">
            <span>⟳</span>
            In Progress
          </div>

          <div className="shipmentDetails">
            Details →
          </div>

        </div>

        {/* ITEM */}

        <div className="shipmentCard">

          <div className="progressLine progress20"></div>

          <div className="shipmentLocation">
            <h4>New York, USA</h4>
            <p>Dateoftheshipmentdeparture</p>

            <div className="fileRow">
              <span>📄</span>
              <span>NameoftheFile</span>
            </div>
          </div>

          <div className="shipmentLocation">
            <h4>Hong Kong, China</h4>
            <p>Dateoftheshipmentdeparture</p>
          </div>

          <div className="shipmentContainer">
            <h4>Container</h4>
            <p>#340586</p>
          </div>

          <div className="shipmentStatus">
            <span>⟳</span>
            In Progress
          </div>

          <div className="shipmentDetails">
            Details →
          </div>

        </div>

        {/* ITEM */}

        <div className="shipmentCard">

          <div className="progressLine progress40"></div>

          <div className="shipmentLocation">
            <h4>New York, USA</h4>
            <p>Dateoftheshipmentdeparture</p>

            <div className="fileRow">
              <span>📄</span>
              <span>NameoftheFile</span>
            </div>
          </div>

          <div className="shipmentLocation">
            <h4>Shanghai, China</h4>
            <p>Dateoftheshipmentdeparture</p>
          </div>

          <div className="shipmentContainer">
            <h4>Container</h4>
            <p>#340586</p>
          </div>

          <div className="shipmentStatus">
            <span>⟳</span>
            In Progress
          </div>

          <div className="shipmentDetails">
            Details →
          </div>

        </div>

        {/* ITEM */}

        <div className="shipmentCard">

          <div className="progressLine progress70"></div>

          <div className="shipmentLocation">
            <h4>Georgia, USA</h4>
            <p>Dateoftheshipmentdeparture</p>

            <div className="fileRow">
              <span>📄</span>
              <span>NameoftheFile</span>
            </div>
          </div>

          <div className="shipmentLocation">
            <h4>Beijing, China</h4>
            <p>Dateoftheshipmentdeparture</p>
          </div>

          <div className="shipmentContainer">
            <h4>Container</h4>
            <p>#340586</p>
          </div>

          <div className="shipmentStatus">
            <span>⟳</span>
            In Progress
          </div>

          <div className="shipmentDetails">
            Details →
          </div>

        </div>

      </div>

    </div>
  );
}