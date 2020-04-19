import React, { useState, useEffect } from "react";
import Question from "./components/Question";
import Form from "./components/Form";
import Expenses from "./components/Expenses";
import BudgetManager from "./components/BudgetManager";

function App() {
  const [budget, setBudget] = useState(0);
  const [remaining, setRemaining] = useState(0);
  const [showQuestion, setShowQuestion] = useState(true);
  const [expenses, setExpenses] = useState([]);
  const [expense, setExpense] = useState({});
  const [savingExpense, setSavingExpense] = useState(false);

  useEffect(() => {
    if (savingExpense) {
      setExpenses([...expenses, expense]);
      setRemaining(remaining - expense.amount);
      setSavingExpense(false);
    }
  }, [expense, expenses, remaining, savingExpense]);

  return (
    <div className="container">
      <header>
        <h1>Gasto Semanal</h1>

        <div className="main-content content">
          {showQuestion ? (
            <Question
              setBudget={setBudget}
              setRemaining={setRemaining}
              setShowQuestion={setShowQuestion}
            />
          ) : (
            <div className="row">
              <div className="one-half column">
                <Form
                  setExpense={setExpense}
                  setSavingExpense={setSavingExpense}
                />
              </div>

              <div className="one-half column">
                <Expenses expenses={expenses} />

                <BudgetManager budget={budget} remaining={remaining} />
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
