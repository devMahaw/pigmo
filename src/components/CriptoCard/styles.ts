import styled from "styled-components";
import { colors } from "@/styles";
import { Props } from ".";

export const CriptoCardLink = styled.a`
  display: block;
  justify-content: center;
  align-items: center;
  width: 182px;
  height: 162px;
  color: inherit;
  text-decoration: none;
  border-radius: 8px;
  border: 1px solid ${colors.darkPurple};
  padding: 12px;
  position: relative;
`;

export const CriptoValueDiv = styled.div<Props>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  padding-right: 4px;
  border-radius: 4px;
  top: 11%;
  left: 64%;
  border: ${(props) =>
    props.green ? `1px solid ${colors.green}` : `1px solid ${colors.red}`};
  box-shadow: ${(props) =>
    props.green ? `0 0 4px ${colors.green}` : `0 0 4px ${colors.red}`};

  span {
    color: ${(props) => (props.green ? `${colors.green}` : `${colors.red}`)};
  }
`;

export const CriptoLine = styled.div`
  border-bottom: 1px solid ${colors.darkPurple};
  width: 158px;
`;

export const CriptoTextLittle = styled.span`
  font-size: 14px;
`;
