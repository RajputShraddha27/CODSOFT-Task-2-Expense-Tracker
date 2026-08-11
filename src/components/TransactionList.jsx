import { FaWallet } from "react-icons/fa";
import TransactionItem from "./TransactionItem";

function TransactionList({ transactions, handleEditTransaction, handleDeleteClick, transactionListRef, }) {
  return (
    <div 
      className="container mb-5"
      ref={transactionListRef}
    >
      <div className="card shadow-sm border-0 history-card">
        <div className="card-body">
          <h2 className="mb-4">Transaction History</h2>
          {transactions.length === 0 ? (
            <div className="card border-0 shadow-sm rounded-4 p-5 text-center">
              <FaWallet className="fs-1 text-secondary mb-3" />

              <h5 className="fw-bold">
                No Transactions Found
              </h5>

              <p className="text-muted mb-0">
                Add your first transaction to get started.
              </p>
            </div>
          ) : (
            <div className="table-responsive">
              <table className="table table-hover align-middle">

                <thead className="table-light">
                  <tr>
                    <th>Title</th>
                    <th>Category</th>
                    <th>Type</th>
                    <th>Date</th>
                    <th>Amount</th>
                    <th>Action</th>
                  </tr>
                </thead>

                <tbody>
                  {transactions.map((transaction) => (
                    <TransactionItem
                      key={transaction.id}
                      transaction={transaction}
                      handleEditTransaction={handleEditTransaction}
                      handleDeleteClick={handleDeleteClick}
                    />
                  ))}
                </tbody>

              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default TransactionList;