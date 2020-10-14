import { faGithubAlt } from "@fortawesome/free-brands-svg-icons";
import React from "react";
import { ContactItem } from "../ui/ContactItem";

export const ContactGithub = () => {
  return (
    <ContactItem icon={faGithubAlt}>
      <a href="https://github.com/diegosanz" target="_blank">
        github.com/diegosanz
      </a>
    </ContactItem>
  );
};
