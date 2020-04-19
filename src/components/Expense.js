import React, { Fragment } from "react";
import PropTypes from "prop-types";

const Expense = ({ expense }) => (
  <Fragment>
    <li className="expenses">
      <p>
        {expense.name}
        <span className="expense">${expense.amount}</span>
      </p>
    </li>
  </Fragment>
);

Expense.propTypes = {
  expense: PropTypes.object.isRequired,
};

export default Expense;
