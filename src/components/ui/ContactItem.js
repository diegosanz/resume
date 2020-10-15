import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";

const Style = styled.span`
  margin-right: 1rem;
`;

export const ContactItem = ({ icon, children }) => {
  return (
    <Style>
      <FontAwesomeIcon icon={icon} /> {children}
    </Style>
  );
};
