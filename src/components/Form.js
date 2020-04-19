import React, { useState } from "react";
import shortid from "shortid";
import PropTypes from "prop-types";

import Error from "./Error";

const Form = ({ setExpense, setSavingExpense }) => {
  const [expenseName, setExpenseName] = useState("");
  const [amount, setAmount] = useState(0);
  const [error, setError] = useState(false);

  const submitForm = (e) => {
    e.preventDefault();

    if (amount < 1 || isNaN(amount) || expenseName.trim() === "") {
      setError(true);
      return;
    }

    setError(false);

    const expense = {
      id: shortid.generate(),
      name: expenseName,
      amount,
    };

    setSavingExpense(true);

    setExpense(expense);
    setExpenseName("");
    setAmount(0);
  };

  return (
    <form onSubmit={submitForm}>
      <h2>Agrega tus gastos aquí</h2>

      {error ? <Error message="Gasto es inválido" /> : null}

      <div className="field">
        <label>Nombre Gasto</label>
        <input
          type="text"
          className="u-full-width"
          placeholder="Ej. Transporte"
          value={expenseName}
          onChange={(e) => setExpenseName(e.target.value)}
        />
      </div>

      <div className="field">
        <label>Cantidad Gasto</label>
        <input
          type="number"
          className="u-full-width"
          placeholder="Ej. 300"
          value={amount}
          onChange={(e) => setAmount(parseInt(e.target.value))}
        />
      </div>

      <input
        type="submit"
        className="button-primary u-full-width"
        value="Agregar gasto"
      />
    </form>
  );
};

Form.propTypes = {
  setExpense: PropTypes.func.isRequired,
  setSavingExpense: PropTypes.func.isRequired,
};

export default Form;
