import styled from "styled-components";

export const DetailedListTitle = styled.h2`
  font-family: ${(props) => props.theme.fontAlt};
  color: white;
  background-color: black;
  display: inline-block;
  padding: 0.25rem 0.5rem;
  margin: 0.75rem 0 0.5rem;

  @media print {
    /* HACK: when printing, some browsers turn the white fonts grey */
    color: transparent;
    text-shadow: 0 0 white;
    box-shadow: inset 0 0 0 1000px black;
  }
`;
