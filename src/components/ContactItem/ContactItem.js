import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export const ContactItem = ({ icon, children }) => {
  return (
    <span>
      <FontAwesomeIcon icon={icon} /> {children}
    </span>
  );
};
