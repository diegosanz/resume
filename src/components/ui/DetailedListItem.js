import {
  faCalendarAlt,
  faCode,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import { SectionTitle } from "./SectionTitle";

const Style = styled.article`
  margin-bottom: 1rem;

  .meta-info {
    display: flex;
    margin: 0.5rem 0;

    &__items {
      font-size: 0.75rem;

      &.m-date {
        min-width: 200px;
      }

      &.m-technologies {
        flex-grow: 1;
        text-align: right;
        font-family: ${(props) => props.theme.fontMono};
      }
    }
  }

  .desc {
    font-size: 0.85rem;

    p {
      margin: 0.5rem 0;
      text-align: justify;
    }
  }
`;

export const DetailedListItem = ({
  date,
  location,
  title,
  children,
  technologies,
}) => {
  return (
    <Style>
      <SectionTitle>{title}</SectionTitle>
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
        {technologies ? (
          <div className="meta-info__items m-technologies">
            <FontAwesomeIcon icon={faCode} />
            &nbsp;
            {technologies}
          </div>
        ) : (
          false
        )}
      </div>
      <div className="desc">{children}</div>
    </Style>
  );
};
