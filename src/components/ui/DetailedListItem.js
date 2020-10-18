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

  .meta-info {
    display: flex;

    &__items {
      font-size: 0.75rem;

      &.m-date {
        min-width: 220px;
      }
    }
  }

  .desc {
    font-size: 0.85rem;
    margin: 1rem 0;
  }
`;

export const DetailedListItem = ({
  date,
  location,
  title,
  subtitle,
  children,
}) => {
  return (
    <Style>
      <ArticleTitle>
        {title}
        <ArticleSubtitle>{subtitle}</ArticleSubtitle>
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
      <div className="desc">{children}</div>
    </Style>
  );
};
