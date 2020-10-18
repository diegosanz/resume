import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { ContactItem } from "../ui/ContactItem";

export const ContactMail = () => {
  return (
    <ContactItem icon={faEnvelope}>
      <a href={"mailto:" + process.env.REACT_APP_MAIL}>
        {process.env.REACT_APP_MAIL}
      </a>
    </ContactItem>
  );
};
