import { FaEdit, FaTrash } from "react-icons/fa";

function TransactionItem({ transaction, handleEditTransaction, handleDeleteClick, }) {
  return (
    <tr>
      <td>{transaction.title}</td>

      <td>{transaction.category}</td>

      <td>
        <span
          className={`badge ${
            transaction.type === "Income"
              ? "bg-success"
              : "bg-danger"
          }`}
        >
          {transaction.type}
        </span>
      </td>

      <td>{transaction.date}</td>

      <td
        className={`fw-bold ${
          transaction.type === "Income"
            ? "text-success"
            : "text-danger"
        }`}
      >
        {transaction.type === "Income" ? "+" : "-"} ₹
        {transaction.amount}
      </td>

      <td>
        <button 
          className="btn btn-sm btn-warning me-2"
          onClick={() => handleEditTransaction(transaction)}
        >
          <FaEdit />
        </button>

        <button 
          className="btn btn-sm btn-danger"
          onClick={() => handleDeleteClick(transaction.id)}
        >
          <FaTrash />
        </button>
      </td>
    </tr>
  );
}

export default TransactionItem;