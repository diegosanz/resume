import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { ContactItemText } from "./ContactItemText";

export const ContactItem = ({ icon, children }) => {
  return (
    <ContactItemText>
      <FontAwesomeIcon icon={icon} /> {children}
    </ContactItemText>
  );
};
