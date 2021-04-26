import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faChevronCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const MailTable = () => {
  // onClick={() => {navigator.clipboard.writeText(this.state.textToCopy)}} para copiar el texto
  return (
    <>
      <div className="container-inbox">
        <div className="inbox-header">
          <p>Inbox</p>
        </div>
        <div className="inbox-content">
          <Link to="/inbox" style={{textDecoration: 'none', color: 'rgb(29, 29, 29)'}}>
            <div className="inbox">
              <div className="icon-message">
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <div className="inbox-from">
                <span>sdfffffffffffffffffffff</span>
                <br />
                <span style={{ fontSize: "12px", color: "grey" }}>Email</span>
                <br />
                <span style={{ fontSize: "12px", color: "grey" }}>Date</span>
              </div>
            </div>
          </Link>
        </div>
      </div>
      {/* <div className="container-table">
        <table>
          <thead>
            <tr>
              <th>User</th>
              <th>Subject</th>
              <th>Date</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>
                <div className="column-user">
                  <div className="icon-msg">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </div>

                  <div className="user-info">
                    <span className="user-info-name">Names</span>
                    <br />
                    <span className="user-info-email">email</span>
                  </div>
                </div>
              </td>

              <td className="user-info-subject">My Personal Information</td>
              <td className="user-info-date">25-08-2020 11:55 PM</td>
              <td>
                <center style={{ color: "grey" }}>
                  <Link to="/inbox">
                    <FontAwesomeIcon
                      icon={faChevronCircleRight}
                      className="faChevronCircleRight"
                    />
                  </Link>
                </center>
              </td>
            </tr>
          </tbody>
        </table>
      </div> */}
    </>
  );
};

export default MailTable;
