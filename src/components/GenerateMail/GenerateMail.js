import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import "./GenerateMail.styles.css";

const GenerateMail = () => {
  return (
    <>
      <div className="not-avalible">Not avalible</div>
      <div className="container-generator">
        <div className="input-generator">
          <center>
            <label className="label-email">Email Temporal</label>
          </center>
          <input type="text" readOnly />
        </div>
        <div className="copy-button">
          <button>
            <FontAwesomeIcon icon={faCopy} />
          </button>
        </div>
      </div>
    </>
  );
};

export default GenerateMail;
