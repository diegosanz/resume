import React from "react";
import { ContactItemText } from "./ContactItemText";

export const ContactItem = ({ icon, children }) => {
  return (
    <ContactItemText>
      {icon}, {children}
    </ContactItemText>
  );
};
