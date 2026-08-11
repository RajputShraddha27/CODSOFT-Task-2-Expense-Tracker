import { FaArrowTrendUp, FaArrowTrendDown, FaWallet } from "react-icons/fa6";

function SummaryCards({ balance, totalIncome, totalExpense, }) {
  const formatCurrency = (amount) => {
    return amount.toLocaleString("en-IN");
  };
  return (
    <div className="container my-4">
      <div className="row g-4">

        {/* Income Card */}
        <div className="col-lg-4 col-md-6 col-12">
          <div className="card summary-card income-card shadow-sm border-0">
            <div className="card-body d-flex justify-content-between align-items-center">
              <div>
                <p className="stats-title mb-2">
                  Total Income
                </p>
                <h3 className="fw-bold text-success">
                  ₹{formatCurrency(totalIncome)}
                </h3>
              </div>

              <div className="icon-box income-icon">
                <FaArrowTrendUp />
              </div>
            </div>
          </div>
        </div>

        {/* Expense Card */}
        <div className="col-lg-4 col-md-6 col-12">
          <div className="card summary-card expense-card shadow-sm border-0">
            <div className="card-body d-flex justify-content-between align-items-center">
              <div>
                <p className="stats-title mb-2">
                  Total Expense
                </p>
                <h3 className="fw-bold text-danger">
                  ₹{formatCurrency(totalExpense)}
                </h3>
              </div>

              <div className="icon-box expense-icon">
                <FaArrowTrendDown />
              </div>
            </div>
          </div>
        </div>

        {/* Balance Card */}
        <div className="col-lg-4 col-md-12 col-12">
          <div className="card summary-card balance-card shadow-sm border-0">
            <div className="card-body d-flex justify-content-between align-items-center">
              <div>
                <p className="stats-title mb-2">
                  Current Balance
                </p>
                <h3 className="fw-bold">
                  ₹{formatCurrency(balance)}
                </h3>
              </div>

              <div className="icon-box balance-icon">
                <FaWallet />
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default SummaryCards;