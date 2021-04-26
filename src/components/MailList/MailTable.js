import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faChevronCircleRight,
} from "@fortawesome/free-solid-svg-icons";

const MailTable = () => {
  return (
    <>
      <div className="not-avalible">Not avalible</div>
      <div className="container-table">
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
                  <FontAwesomeIcon icon={faChevronCircleRight} className="faChevronCircleRight" />
                </center>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default MailTable;
