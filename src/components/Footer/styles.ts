import styled from "styled-components";
import { colors } from "@/styles";
import { Props } from ".";

export const FooterRow = styled.div`
  max-width: 1680px;
  width: 100%;
  margin-left: auto;
`;

export const FooterText = styled.p`
  font-size: 12px;
  line-height: 32px;
  letter-spacing: 28px;

  span {
    color: ${colors.lightPurple};
  }
`;

export const FooterList = styled.ul`
  margin-right: 80px;

  span {
    font-size: 16px;
    line-height: 28px;
  }
`;

export const FooterListItem = styled.li<Props>`
  margin-top: 24px;
  font-size: 14px;
  color: ${colors.lightPurple};
  cursor: pointer;
  list-style: ${(props) => (props.isActive ? "disc" : "none")};
  color: ${(props) =>
    props.isActive ? `${colors.hotPink}` : `${colors.lightPurple}`};
`;

export const FooterLink = styled.a`
  color: inherit;

  p {
    font-size: 20px;
    line-height: 24px;
  }
`;
