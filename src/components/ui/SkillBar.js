import styled from "styled-components";

const padding = "0.25rem 0.5rem";

export const SkillBar = styled.div`
  width: 100%;
  padding: ${padding};
  position: relative;
  font-weight: bold;
  margin: 0.2rem 0;
  font-family: ${(props) => props.theme.fontAlt};

  &::before {
    content: "${(props) => props.children}";
    padding: ${padding};
    color: ${(props) => props.textColor || "white"};
    position: absolute;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 1;
    overflow: hidden;
    width: ${(props) => props.percentage || 0}%;
    white-space: nowrap;
    /* FIXME: no bold font */
    font-weight: bold;

    @media print {
      /* HACK: when printing, some browsers turn the white fonts grey */
      color: transparent;
      text-shadow: 0 0 ${(props) => props.textColor || "white"};
    }
  }

  &::after {
    content: "";
    position: absolute;
    height: 100%;
    background-color: ${(props) => props.mainColor || "black"};
    overflow: hidden;

    top: 0;
    left: 0;
    height: 100%;
    width: ${(props) => props.percentage}%;

    @media print {
      /* HACK: When printing, for browsers with config "Print Background colours and images" turned off */
      box-shadow: inset 0 0 0 1000px ${(props) => props.mainColor || "black"};
    }
  }
`;
