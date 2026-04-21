import StatusBadge from "./StatusBadge";

function RepaymentsTable({repayments}) {

  const pendingTotal = repayments
    .filter((repayment) => repayment.status === "Pending")
    .reduce((sum, repayment) => sum + repayment.amount, 0);

  return (
    <div>
      <h2>Repayments</h2>
      <p><strong>Pending total:</strong>{pendingTotal}EUR</p>

     <table>
        <thead>
          <tr>
            <th>Reference Code</th>
            <th>Trade Partner</th>
            <th>Amount</th>
            <th>Due Date</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {repayments.map((repayment) => (
            <tr key={repayment.id}>
              <td>{repayment.id}</td>
              <td>{repayment.tradePartner}</td>
              <td>
                {repayment.amount} {repayment.currency}
              </td>
              <td>{repayment.dueDate}</td>
              <td>
                <StatusBadge status={repayment.status}/>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RepaymentsTable;