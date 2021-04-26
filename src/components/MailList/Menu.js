import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRedoAlt, faTrash } from "@fortawesome/free-solid-svg-icons";
import "./MailList.styles.css";

const Menu = () => {
  return (
    <div className="container-mails">
      <div className="menu">
        <div className="option refresh">
          <p>
            <FontAwesomeIcon icon={faRedoAlt} className="faRedoAlt" /> Refresh
          </p>
        </div>
        <div className="option delete">
          <p>
            <FontAwesomeIcon icon={faTrash} className="faTrash" /> Delete
          </p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
