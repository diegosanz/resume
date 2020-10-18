import styled from "styled-components";

const padding = "0.2rem";

export const SkillBar = styled.div`
  width: 100%;
  padding: ${padding};
  border: 2px solid ${(props) => props.mainColor || "black"};
  position: relative;
  overflow: hidden;
  font-weight: bold;

  &::before {
    content: "${(props) => props.children}";
    padding: ${padding};
    color: ${(props) => props.textColor || "white"};
    position: absolute;
    height: 100%;
    top: 0;
    left: 0;
    background-color: ${(props) => props.mainColor || "black"};
    width: ${(props) => props.percentage || 0}%;
    overflow: hidden;
    font-weight: bold;

    /** HACK: (When printing) For browser config "Print Background colours and images" turned off */
    @media print {
      box-shadow: inset 0 0 0 1000px ${(props) => props.mainColor || "black"};
      color: transparent;
      text-shadow: 2px 0 ${(props) => props.textColor || "white"};
    }
  }
`;
