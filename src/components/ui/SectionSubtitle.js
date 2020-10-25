import styled from "styled-components";

export const SectionSubtitle = styled.span`
  font-family: ${(props) => props.theme.font};

  &::before {
    content: " - ";
  }
`;
