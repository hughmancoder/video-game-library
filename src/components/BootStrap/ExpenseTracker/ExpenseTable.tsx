import type { Expense } from "./ExpenseTracker";

interface Props {
  expenses: Expense[];
  onDelete: (id: number) => void;
}

export const ExpenseTable = ({ expenses, onDelete }: Props) => {
  const totalAmount = expenses.reduce(
    (acc, expense) => acc + expense.amount,
    0
  );
  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th scope="col">Description</th>
          <th scope="col">Amount</th>
          <th scope="col">Category</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((row, i) => (
          <tr key={row.id}>
            <td>{row.description}</td>
            <td>{row.amount}</td>
            <td>{row.category}</td>
            <td>
              <button
                onClick={() => onDelete(row.id)}
                type="button"
                className="btn btn-outline-danger"
                data-index={i}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td>Total</td>
          <td>${totalAmount.toFixed(2)}</td>
          <td></td>
          <td></td>
        </tr>
      </tfoot>
    </table>
  );
};
