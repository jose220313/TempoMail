import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import "./ReadMail.styles.css";

const ReadMail = () => {
  return (
    <div className="container-readmail">
      <div className="back-inbox" style={{ cursor: "pointer" }}>
        <span>
          <FontAwesomeIcon
            icon={faChevronLeft}
            style={{ color: "grey", fontSize: "15px" }}
          />
        </span>
        <span style={{ marginLeft: "10px", fontSize: "15px", color: "grey" }}>
          Back
        </span>
      </div>

      <div className="mail">
        <div className="mail-tmp">
          <span>Subject: </span>
        </div>

        <div className="mail-tmp">
          <span>From: </span>
        </div>

        <div className="mail-tmp">
            <p>hqwie ijwqe nasd ksa dkkasd kajskdn asjdia kams</p>
        </div>
      </div>
    </div>
  );
};

export default ReadMail;
