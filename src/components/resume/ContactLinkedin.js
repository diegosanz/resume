import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import React from "react";
import { ContactItem } from "../ui/ContactItem";

export const ContactLinkedin = () => {
  return (
    <ContactItem icon={faLinkedin}>
      <a
        href="https://www.linkedin.com/in/diego-sanz-b902408a/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Diego Sanz
      </a>
    </ContactItem>
  );
};
