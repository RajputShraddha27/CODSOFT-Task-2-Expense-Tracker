import { FaMoon, FaSun } from "react-icons/fa";

function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav
      className={`navbar sticky-top shadow-sm py-3 ${
        darkMode
          ? "bg-dark navbar-dark"
          : "bg-primary"
      }`}
    >
      <div className="container d-flex justify-content-between align-items-center">

        <h3
          className="navbar-brand d-flex align-items-center gap-2 fs-2 fw-bold mb-0"
          style={{ cursor: "pointer" }}
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
        >
          <img
            src="/wallet.png"
            alt="Expense Tracker Logo"
            width="35"
            height="35"
          />
          Expense Tracker
        </h3>

        <button
          className={`btn rounded-circle ${
            darkMode ? "btn-warning text-dark" : "btn-dark"
          }`}
          style={{
            width: "45px",
            height: "45px",
          }}
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>

      </div>
    </nav>
  );
}
export default Navbar;