import React, { Fragment } from "react";
import PropTypes from "prop-types";

import { CheckBudget } from "../helpers/index";

const BudgetManager = ({ budget, remaining }) => {
  return (
    <Fragment>
      <div className="alert alert-primary">Presupuesto: ${budget}</div>
      <div className={CheckBudget(budget, remaining)}>
        Restante: ${remaining}
      </div>
    </Fragment>
  );
};

BudgetManager.propTypes = {
  budget: PropTypes.number.isRequired,
  remaining: PropTypes.number.isRequired,
};

export default BudgetManager;
