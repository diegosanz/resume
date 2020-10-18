import styled from "styled-components";

export const ArticleSubtitle = styled.span`
  font-family: ${(props) => props.theme.font};

  &::before {
    content: " - ";
  }
`;
