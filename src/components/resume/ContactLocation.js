import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { ContactItem } from "../ui/ContactItem";

export const ContactLocation = () => {
  return <ContactItem icon={faMapMarkerAlt}>Zaragoza, Spain</ContactItem>;
};
