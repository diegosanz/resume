import {
  faCalendarAlt,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import { ArticleTitle } from "./ArticleTitle";
import { ArticleSubtitle } from "./ArticleSubtitle";

const Style = styled.article`
  border-bottom: 2px dashed lightgrey;
  margin: 0 0 1rem 0;
  padding: 0 0 0.5rem 0;

  .meta-info {
    display: flex;

    &__items {
      font-size: 0.75rem;

      &.m-date {
        flex-grow: 1;
      }
      &.m-location {
        min-width: 200px;
      }
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
      <ArticleTitle>
        {job}
        <ArticleSubtitle>{company}</ArticleSubtitle>
      </ArticleTitle>
      <div className="meta-info">
        <div className="meta-info__items m-date">
          <FontAwesomeIcon icon={faCalendarAlt} />
          &nbsp;
          {date}
        </div>
        <div className="meta-info__items m-location">
          <FontAwesomeIcon icon={faMapMarkerAlt} />
          &nbsp;
          {location}
        </div>
      </div>
      {children ? <div>{children}</div> : ""}
    </Style>
  );
};
