function DeleteModal({ setDeleteTransactionId, handleDeleteTransaction, darkMode }) {
  return (
    <div
      className="modal fade show d-block"
      style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
    >
      <div className="modal-dialog modal-dialog-centered">
        <div 
          className={`modal-content ${
            darkMode
              ? "bg-dark text-light border-secondary"
              : ""
          }`}
        >

          <div className="modal-header border-secondary">
            <h5 className="modal-title text-danger fw-bold">
              Delete Transaction
            </h5>
            <button
              className={`btn-close ${
                darkMode ? "btn-close-white" : ""
              }`}
              onClick={() => setDeleteTransactionId(null)}
            ></button>
          </div>

          <div className="modal-body">
            <p>Are you sure you want to delete this transaction?</p>
            <p
              className={`mb-0 ${
                darkMode ? "text-light opacity-75" : "text-muted"
              }`}
            >
              This action cannot be undone.
            </p>
          </div>

          <div className="modal-footer border-secondary">
            <button
              className={`btn ${
                darkMode
                ?"btn-outline-light"
                :"btn-secondary"
              }`}
              onClick={() => setDeleteTransactionId(null)}
            >
              Cancel
            </button>

            <button
              className="btn btn-danger"
              onClick={handleDeleteTransaction}
            >
              Delete
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
export default DeleteModal;