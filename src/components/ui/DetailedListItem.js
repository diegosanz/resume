import {
  faCalendarAlt,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";

const Style = styled.article`
  .meta-info {
    display: flex;

    &__items {
      flex-grow: 1;
    }
  }
`;

export const DetailedListItem = ({
  date,
  location,
  job,
  company,
  children,
}) => {
  return (
    <Style>
      <div className="meta-info">
        <div className="meta-info__items">
          <FontAwesomeIcon icon={faCalendarAlt} />
          {date}
        </div>
        <div className="meta-info__items">
          <FontAwesomeIcon icon={faMapMarkerAlt} />
          {location}
        </div>
      </div>
      <h3>{job}</h3>
      <h4>{company}</h4>
      {children ? <p>{children}</p> : ""}
    </Style>
  );
};
