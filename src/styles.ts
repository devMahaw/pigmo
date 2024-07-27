import { createGlobalStyle, styled } from "styled-components";

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
  lightRed: "#ffa222",
  magenta: "#7f064d",
};

export const breakpoints = {
  desktop: "1366px",
  phone: "768px",
};

export const GlobalCss = createGlobalStyle`
    @keyframes Fade {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
    
    * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;  
    list-style: none;
    scrollbar-color: ${colors.darkPurple} transparent;
    scrollbar-width: thin;
    text-decoration: none;
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

export const Width = styled.div`
  max-width: calc(100% - 240px);
  width: 100%;
  margin-left: auto;

  @media (max-width: ${breakpoints.desktop}) {
    max-width: 1920px;
    margin-left: auto;
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
  z-index: 1;
  animation: Fade 0.5s ease-in-out forwards;
`;
