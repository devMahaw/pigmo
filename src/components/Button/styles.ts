import styled from "styled-components";
import { colors } from "@/styles";
import { myFont } from "@/pages";

export const ButtonDefault = styled.button`
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
  transition: box-shadow 0.3s ease, transform 0.2s ease;

  &:hover {
    box-shadow: 0 3px ${colors.magenta}, inset 0 1px ${colors.lightRed},
      inset 0 0 50px -25px ${colors.lightRed}, 0 0 50px -12px #e90083a3;
  }

  &:active {
    transform: translateY(2px);
    box-shadow: 0 1px ${colors.magenta}, inset 0 1px ${colors.lightRed},
      inset 0 0 50px -25px ${colors.lightRed}, 0 0 50px -12px #e90083a3;
  }
`;

export const ButtonLogin = styled.button`
  color: ${colors.lightGray};
  background-color: transparent;
  border: none;
  border: none;
  margin-right: 20px;
  margin-top: 3px;
  font-family: ${myFont.style.fontFamily};
  font-size: 16px;
  line-height: 18px;
  transition: color 0.2s ease;

  &:hover {
    color: ${colors.hotPink};
  }
`;
