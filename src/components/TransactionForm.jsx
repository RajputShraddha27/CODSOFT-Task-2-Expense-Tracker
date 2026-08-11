import { FaPlus, FaEdit  } from "react-icons/fa";

function TransactionForm({ formData, handleChange, handleSubmit, errors, setErrors, editingId, handleCancelEdit, formRef, }) {
  return (
    <div 
      ref={formRef}
      className="container my-4"
    >
      <div className="card shadow-sm form-card">
        <div className="card-body">
          <h2 className="mb-4">
            {editingId !== null
              ? "Edit Transaction"
              : "Add New Transaction"}
          </h2>

          {/* Edit Mode Alert */}
          {editingId !== null && (
            <div className="alert alert-warning d-flex align-items-center mb-3">
              <FaEdit className="me-2" />
              You are editing an existing transaction.
            </div>
          )}

          <form onSubmit={handleSubmit}>

            <div className="row g-3">
              {/* Type */}
              <div className="col-md-6 mb-3">
                <label className="form-label fw-semibold">Transaction Type</label>

                <select 
                  className="form-select"
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                >
                  <option value="Income">Income</option>
                  <option value="Expense">Expense</option>
                </select>
              </div>

              {/* Title */}
              <div className="col-md-6 mb-3">
                <label className="form-label fw-semibold">Title</label>

                <input
                  type="text"
                  className={`form-control ${
                    errors.title
                      ? "is-invalid"
                      : formData.title
                      ? "is-valid"
                      : ""
                  }`}
                  placeholder="Enter Title"
                  name="title"
                  value={formData.title}
                  onChange={(e) => {
                    handleChange(e);

                    setErrors({
                      ...errors,
                      title: "",
                    });
                  }}
                />
                {errors.title && (
                  <div className="invalid-feedback d-block">
                    {errors.title}
                  </div>
                )}
              </div>

              {/* Amount */}
              <div className="col-md-6 mb-3">
                <label className="form-label fw-semibold">Amount</label>

                <input
                  type="number"
                  className={`form-control ${
                    errors.amount
                      ? "is-invalid"
                      : formData.amount
                      ? "is-valid"
                      : ""
                  }`}
                  placeholder="Enter Amount"
                  name="amount"
                  value={formData.amount}
                  onChange={(e) => {
                    handleChange(e);

                    setErrors({
                      ...errors,
                      amount: "",
                    });
                  }}
                />
                {errors.amount && (
                  <div className="invalid-feedback d-block">
                    {errors.amount}
                  </div>
                )}
              </div>

              {/* Category */}
              <div className="col-md-6 mb-3">
                <label className="form-label fw-semibold">Category</label>

                <select 
                  className={`form-select ${
                    errors.category
                      ? "is-invalid"
                      : formData.category
                      ? "is-valid"
                      : ""
                  }`}
                  name="category"
                  value={formData.category}
                  onChange={(e) => {
                    handleChange(e);
                    setErrors({
                      ...errors,
                      category: "",
                    });
                  }}
                >
                  <option value="">Select Category</option>
                  <option value="Salary">Salary</option>
                  <option value="Food">Food</option>
                  <option value="Shopping">Shopping</option>
                  <option value="Travel">Travel</option>
                  <option value="Entertainment">Entertainment</option>
                  <option value="Bills">Bills</option>
                  <option value="Health">Health</option>
                  <option value="Other">Other</option>
                </select>
                {errors.category && (
                  <div className="invalid-feedback d-block">
                    {errors.category}
                  </div>
                )}
              </div>

              {/* Date */}
              <div className="col-md-6 mb-4">
                <label className="form-label fw-semibold">Date</label>

                <input
                  type="date"
                  className={`form-control ${
                    errors.date
                      ? "is-invalid"
                      : formData.date
                      ? "is-valid"
                      : ""
                  }`}
                  name="date"
                  value={formData.date}
                   onChange={(e) => {
                    handleChange(e);

                    setErrors({
                      ...errors,
                      date: "",
                    });
                  }}
                />
                {errors.date && (
                  <div className="invalid-feedback d-block">
                    {errors.date}
                  </div>
                )}
              </div>

            </div>

            <button
              type="submit"
              className={`btn px-4 ${
                editingId !== null ? "btn-warning" : "btn-primary"
              }`}
            >
              <FaPlus className="me-2" />
              {editingId !== null ? "Update Transaction" : "Add Transaction"}
            </button>
            {
              editingId !== null && (
                <button
                  type="button"
                  className="btn btn-secondary ms-3 px-4"
                  onClick={handleCancelEdit}
                >
                  Cancel
                </button>
              )
            }

          </form>

        </div>
      </div>
    </div>
  );
}

export default TransactionForm;