import { createGlobalStyle } from "styled-components";

export const BaseStyles = createGlobalStyle`
  body {
    font-family: ${(props) => props.theme.font};
  }
`;
