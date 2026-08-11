import { FaFilter } from "react-icons/fa";

function Filter( { categoryFilter, setCategoryFilter, typeFilter, setTypeFilter, darkMode,}) {
  return (
    <div className="container mb-4">
      <div className="card shadow-sm border-0">
        <div className="card-body">

          <div className="row g-3">
            <h5 className=" filter mb-4 fw-semibold">
              <FaFilter className="me-2 text-primary" />
              Filters
            </h5>

            <div className="col-md-6">
              <label className="form-label fw-semibold">
                Filter by Category
              </label>

              <select
                className={`form-select ${
                  darkMode ? "" : ""
                }`}
                value={categoryFilter}
                onChange={(e) =>
                  setCategoryFilter(e.target.value)
                }
              >
                <option value="All">All Categories</option>
                <option value="Salary">Salary</option>
                <option value="Food">Food</option>
                <option value="Shopping">Shopping</option>
                <option value="Travel">Travel</option>
                <option value="Entertainment">Entertainment</option>
                <option value="Bills">Bills</option>
                <option value="Health">Health</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="col-md-6">
              <label className="form-label fw-semibold">
                Filter by Type
              </label>

              <select
                className={`form-select ${
                  darkMode ? "" : ""
                }`}
                value={typeFilter}
                onChange={(e) => setTypeFilter(e.target.value)}
              >
                <option value="All">All Types</option>
                <option value="Income">Income</option>
                <option value="Expense">Expense</option>
              </select>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
export default Filter;