import { faMobile } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { ContactItem } from "../ui/ContactItem";

export const ContactPhone = () => {
  const telTrim = (process.env.REACT_APP_PHONE || "").replace(/(\s)*/g, "");

  return (
    <ContactItem icon={faMobile}>
      <a href={"tel:" + telTrim}>{process.env.REACT_APP_PHONE}</a>
    </ContactItem>
  );
};
