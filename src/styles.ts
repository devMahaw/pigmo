import { createGlobalStyle } from "styled-components";

export const colors = {
  darkerPurple: "#170D19",
  darkerPurpleFooter: "#120B14",
  darkPurple: "#35243D",
  darkPurpleIcons: "#4B3456",
  purpleTexts: "#644B72",
  lightPurple: "#826B8E",
  white: "#FFFFFF",
  lightGray: "#E6E3E8",
  hotPink: "#E90083",
  green: "#24D861",
  red: "#DE3449",
  lightRed: "#ffa2a0",
  magenta: "#7f064d",
};

export const breakpoints = {
  desktop: "1200px",
  tablet: "768px",
};

export const GlobalCss = createGlobalStyle`
    
    * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;  
    list-style: none;
    scrollbar-color: ${colors.darkPurple} transparent;
    scrollbar-width: thin;
    }

    body {
      background-color: ${colors.darkerPurple};
      color: ${colors.white};
      max-width: 1920px;
      width: 100%;
      height: 100%;
    }

    button {
      cursor: pointer;
    }
`;
