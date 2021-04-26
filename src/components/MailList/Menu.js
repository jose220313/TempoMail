import React from "react";
import { faRedoAlt, faTrash, faCopy } from "@fortawesome/free-solid-svg-icons";
import "./MailList.styles.css";
import { CircleButton } from "../Button/CustumButtons";

const Menu = () => {
  return (
    <div className="container-mails">
      <div className="menu">
        <div className="option is-option-validate">
          <CircleButton title={"Copy"} icon={faCopy} />
        </div>
        <div className="option">
          <CircleButton title={"Refresh"} icon={faRedoAlt} />
        </div>
        <div className="option">
          <CircleButton title={"Delete"} icon={faTrash} />
        </div>
      </div>
    </div>
  );
};

export default Menu;
