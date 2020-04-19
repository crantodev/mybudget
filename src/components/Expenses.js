import React from "react";
import PropTypes from "prop-types";

import Expense from "./Expense";

const Expenses = ({ expenses }) => (
  <div className="expenses-done">
    <h2>Listado</h2>
    {expenses.map((expense) => (
      <Expense key={expense.id} expense={expense} />
    ))}
  </div>
);

Expenses.propTypes = {
  expenses: PropTypes.array.isRequired,
};

export default Expenses;
