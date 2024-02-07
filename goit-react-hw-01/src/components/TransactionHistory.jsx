export const TransactionHistory = ({ items }) => {
  return (
    <table className="table.transaction">
      <thead className="thead-transaction">
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map((iteam) => (
          <tr key={iteam.id}>
            <td className="td-transaction">{iteam.type}</td>
            <td className="td-transaction">{iteam.amount}</td>
            <td className="td-transaction">{iteam.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
