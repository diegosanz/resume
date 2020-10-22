import styled from "styled-components";

const padding = "0.25rem 0 0.25rem 1rem";

export const SkillBar = styled.div`
  width: 100%;
  padding: ${padding};
  border: 2px solid ${(props) => props.mainColor || "black"};
  position: relative;
  font-weight: bold;
  margin: 0.2rem;

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

    /* HACK: there are some glitches when it is printed as a pdf between the background/box-shadow and the parent border, so we expand it one pixel at the top, left and bottom side */
    top: -1px;
    left: -1px;
    height: calc(100% + 2px); // 2px => 1px top + 1px bottom;
    width: calc(${(props) => props.percentage || 0}% + 1px);

    @media print {
      /* HACK: When printing, for browsers with config "Print Background colours and images" turned off */
      box-shadow: inset 0 0 0 1000px ${(props) => props.mainColor || "black"};
    }
  }
`;
