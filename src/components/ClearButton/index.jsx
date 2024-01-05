import React from "react";
import { ReactComponent as Delete } from "../../images/delete.svg";
import "./index.css";

const ClearButton = ({ title = "Clear" }) => {
  return (
    <div className="clearBtn">
      <div>{title}</div>
      <div>
        <Delete />
      </div>
    </div>
  );
};

export default ClearButton;
