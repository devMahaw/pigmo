import styled from "styled-components";
import { breakpoints, colors } from "@/styles";
import { myFont } from "@/pages";
import { Props } from ".";

type ButtonProps = {
  variant?: string;
  title?: string;
  isActive?: boolean;
};

export const ButtonDefault = styled.button<ButtonProps>`
  color: ${colors.lightGray};
  width: 98px;
  height: 40px;
  border: none;
  border-radius: 8px;
  padding: 0px 16px 0px 16px;
  background-image: radial-gradient(
    50% 100% at 50% 0,
    #ff6864 0,
    ${colors.hotPink} 100%
  );
  box-shadow: 0 3px ${colors.magenta}, inset 0 1px #ffa2a080;
  margin-right: 32px;
  font-family: ${myFont.style.fontFamily};
  font-size: 14px;
  line-height: 16px;
  transition: box-shadow 0.2s ease, transform 0.2s ease;

  &:hover,
  &:active {
    box-shadow: 0 3px ${colors.magenta}, inset 0 1px ${colors.lightRed},
      inset 0 0 50px -25px ${colors.lightRed}, 0 0 50px -12px #e90083a3;
  }

  &:active {
    transform: translateY(2px);
  }
`;

export const ButtonLogin = styled.button<ButtonProps>`
  color: ${colors.lightGray};
  background-color: transparent;
  border: none;
  margin-right: 12px;
  margin-top: 3px;
  font-family: ${myFont.style.fontFamily};
  font-size: 16px;
  line-height: 18px;
  transition: color 0.2s ease;

  &:hover,
  &:active {
    color: ${colors.hotPink};
  }
`;

export const ButtonIco = styled.button<ButtonProps>`
  background-color: transparent;
  width: 40px;
  height: 40px;
  border: 1px solid ${colors.darkPurple};
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  margin-right: 8px;

  &:hover,
  &:active {
    border-color: ${colors.darkPurpleIcons};
    background: linear-gradient(180deg, rgba(37, 25, 41, 0) 0%, #38253f 100%);
    box-shadow: 0px 7px 9.3px -6px #eb0582;
  }

  img {
    width: 18px;
  }
`;

export const ButtonDrop = styled.button<Props, ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => (props.isActive ? "#1f1423" : "transparent")};
  width: 240px;
  height: 40px;
  font-family: ${myFont.style.fontFamily};
  font-size: 14px;
  border: none;
  border: 1px solid ${colors.darkPurple};

  span {
    margin: 12px 24px;
    color: ${(props) => (props.isActive ? colors.hotPink : colors.purpleTexts)};
  }

  svg {
    margin-right: 16px;
    transform: ${(props) => (props.isActive ? "rotate(-180deg)" : "none")};
    transition: transform 0.2s ease;
  }
`;

export const ButtonMenu = styled.button<Props, ButtonProps>`
  display: none;
  font-family: ${myFont.style.fontFamily};
  font-size: 18px;
  border: 1px solid ${colors.darkPurple};
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #120b14;
  color: ${colors.lightGray};
  text-align: center;
  padding: 10px 0;
  z-index: 2;

  &:hover,
  &:active {
    border-color: ${colors.darkPurpleIcons};
    background: linear-gradient(180deg, #120b14 0%, #38253f 100%);
  }

  @media (max-width: ${breakpoints.desktop}) {
    display: block;
  }
`;
