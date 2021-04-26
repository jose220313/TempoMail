import React, { useState } from "react";
import "./CustumButtons.styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Animated } from "react-animated-css";

export const CircleButton = ({ title, icon }) => {
  const [isShown, setIsShown] = useState(false);

  return (
    <>
      <button
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
        className="circle-button"
      >
        {!isShown ? (
          <span className="title"><FontAwesomeIcon icon={icon} /> {title}</span>
        ) : (
          <span className="icon">
            <Animated
              animationIn="headShake"
              animationOut="fadeOut"
              isVisible={true}
            >
                <FontAwesomeIcon icon={icon} />
            </Animated>
          </span>
        )}
      </button>
    </>
  );
};
