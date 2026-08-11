import { useState, useRef, useEffect, } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import SummaryCards from './components/SummaryCards'
import TransactionForm from './components/TransactionForm'
import Filter from './components/Filter'
import TransactionList from './components/TransactionList'
import DeleteModal from "./components/DeleteModal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
   const [transactions, setTransactions] = useState(() => {
      const savedTransactions = localStorage.getItem("transactions");
      if (savedTransactions) {
        return JSON.parse(savedTransactions);
      }
      return [];
    });

   const [formData, setFormData] = useState({
      type: "Income",
      title: "",
      amount: "",
      category: "",
      date: "",
    });

    const [errors, setErrors] = useState({});
    const [editingId, setEditingId] = useState(null);
    const [categoryFilter, setCategoryFilter] = useState("All");
    const [typeFilter, setTypeFilter] = useState("All");

    const [darkMode, setDarkMode] = useState(() => {
      const savedMode = localStorage.getItem("darkMode");
      return savedMode ? JSON.parse(savedMode) : false;
    });

    const [deleteTransactionId, setDeleteTransactionId] = useState(null);
    const formRef = useRef(null)
    const transactionListRef = useRef(null);

    const handleChange = (e) => {
      const { name, value } = e.target;

      setFormData({
        ...formData,
        [name]: value,
      });
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      const validationErrors = {};
      if (!formData.title.trim()) {
        validationErrors.title = "Title is required.";
      }
      if (!formData.amount) {
        validationErrors.amount = "Amount is required.";
      }
      if (!formData.category) {
        validationErrors.category = "Please select a category.";
      }
      if (!formData.date) {
        validationErrors.date = "Please select a date.";
      }
      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        return;
      }
      setErrors({});
      if (editingId !== null) {
        setTransactions((prevTransactions) =>
          prevTransactions.map((transaction) =>
            transaction.id === editingId
              ? {
                  ...transaction,
                  type: formData.type,
                  title: formData.title,
                  amount: Number(formData.amount),
                  category: formData.category,
                  date: formData.date,
                }
              : transaction
          )
        );
        setEditingId(null);
        toast.success("Transaction updated successfully!");
        setTimeout(() => {
          transactionListRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }, 100);
      } else {
        const newTransaction = {
          id: Date.now(),
          type: formData.type,
          title: formData.title,
          amount: Number(formData.amount),
          category: formData.category,
          date: formData.date,
        };
        setTransactions((prevTransactions) => [
          ...prevTransactions,
          newTransaction,
        ]);
        toast.success("Transaction added successfully!");
      }
      setFormData({
        type: "Income",
        title: "",
        amount: "",
        category: "",
        date: "",
      });
    };

    const handleEditTransaction = (transaction) => {
      setEditingId(transaction.id);
      setFormData({
        type: transaction.type,
        title: transaction.title,
        amount: transaction.amount,
        category: transaction.category,
        date: transaction.date,
      });
      setErrors({});
      setTimeout(() => {
        formRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100);
    };

    const handleCancelEdit = () => {
      setEditingId(null);
      setFormData({
        type: "Income",
        title: "",
        amount: "",
        category: "",
        date: "",
      });
      setErrors({});
    };

    const handleDeleteClick = (id) => {
      setDeleteTransactionId(id);
    };

    const handleDeleteTransaction = () => {
      if (editingId === deleteTransactionId) {
        setEditingId(null);
        setFormData({
          type: "Income",
          title: "",
          amount: "",
          category: "",
          date: "",
        });
        setErrors({});
      }
      setTransactions((prevTransactions) =>
        prevTransactions.filter(
          (transaction) =>
            transaction.id !== deleteTransactionId
        )
      );
      setDeleteTransactionId(null);
      toast.success("Transaction deleted successfully!");
    };

    useEffect(() => {
      localStorage.setItem(
        "transactions",
        JSON.stringify(transactions)
      );
    }, [transactions]);

    useEffect(() => {
      localStorage.setItem(
        "darkMode",
        JSON.stringify(darkMode)
      );
    }, [darkMode]);

    useEffect(() => {
      if (darkMode) {
        document.body.style.backgroundColor = "#111827";
      } else {
        document.body.style.backgroundColor = "#e0e3e6";
      }
    }, [darkMode]);

    const totalIncome = transactions
      .filter((transaction) => transaction.type === "Income")
      .reduce(
        (total, transaction) => total + transaction.amount,
        0
      );

    const totalExpense = transactions
      .filter((transaction) => transaction.type === "Expense")
      .reduce(
        (total, transaction) => total + transaction.amount,
        0
      );

    const balance = totalIncome - totalExpense;

    const filteredTransactions = transactions.filter((transaction) => {
      const categoryMatch =
        categoryFilter === "All" ||
        transaction.category === categoryFilter;
      const typeMatch =
        typeFilter === "All" ||
        transaction.type === typeFilter;
      return categoryMatch && typeMatch;
    });

  return (
    <div className={darkMode ? "dark-theme" : ""}>
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />  
      <SummaryCards
        balance={balance}
        totalIncome={totalIncome}
        totalExpense={totalExpense}
      />  
      <TransactionForm
        formData={formData}
        handleChange={handleChange} 
        handleSubmit={handleSubmit}
        errors={errors}
        setErrors={setErrors}
        editingId={editingId}
        handleCancelEdit={handleCancelEdit}
        formRef={formRef}
      />
      <Filter 
        categoryFilter={categoryFilter}
        setCategoryFilter={setCategoryFilter}
        typeFilter={typeFilter}
        setTypeFilter={setTypeFilter}
        darkMode={darkMode}
      />  
      <TransactionList
        transactions={filteredTransactions}
        handleEditTransaction={handleEditTransaction}
        handleDeleteClick={handleDeleteClick}
        transactionListRef={transactionListRef}
       />
       {
          deleteTransactionId !== null && (
            <DeleteModal
              setDeleteTransactionId={setDeleteTransactionId}
              handleDeleteTransaction={handleDeleteTransaction}
              darkMode={darkMode}
            />
          )
        }
        <ToastContainer
          position="top-right"
          autoClose={2500}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          pauseOnHover
          theme={darkMode ? "dark" : "light"}
        />
        <footer className="text-center py-4 mt-4">
          <p className="mb-0">
            Made by <strong>Rajput Shraddha</strong>
          </p>
        </footer>
    </div>
  )
}

export default App
