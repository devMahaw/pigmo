import styled from "styled-components";
import { colors } from "@/styles";
import { Props } from ".";

export const FooterRow = styled.div`
  max-width: 1630px;
  margin-left: auto;
  width: 100%;
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
  display: flex;
  align-items: center;
  color: inherit;
  width: 420px;
  height: 90px;
  border-radius: 10px;
  margin: 40px 0px;

  img {
    margin-left: 20px;
  }

  p {
    font-size: 20px;
    line-height: 24px;
    margin-left: 24px;
  }
`;

export const FooterLinkDiscord = styled(FooterLink)`
  background: linear-gradient(96.45deg, #e90083 19.95%, #ff6864 115.62%),
    linear-gradient(
      91.16deg,
      rgba(255, 140, 184, 0.78) 1%,
      rgba(255, 148, 187, 0) 29.61%
    );

  box-shadow: 0px 11px 26.8px 0px rgba(233, 0, 131, 0.24);
`;

export const FooterLinkTelegram = styled(FooterLink)`
  background: linear-gradient(96.45deg, #34bdc6 19.95%, #299cdc 115.62%);
  box-shadow: 0px 11px 26.8px 0px rgba(44, 165, 214, 0.07);
`;

export const FooterLinkTwitter = styled(FooterLink)`
  background: linear-gradient(96.45deg, #0d0b0c 19.95%, #1c1717 115.62%);
  box-shadow: 0px 11px 26.8px 0px rgba(42, 26, 47, 0.29);
`;
