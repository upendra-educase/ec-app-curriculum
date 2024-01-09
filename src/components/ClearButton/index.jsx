import React from "react";
import { ReactComponent as Delete } from "../../images/delete.svg";
import { Trash2 } from "react-feather";
import "./index.css";

const ClearButton = ({ title = "Clear" }) => {
  return (
    <div className="clearBtn">
      <div>{title}</div>
      <div>
        <Trash2 size={17} />
      </div>
    </div>
  );
};

export default ClearButton;
