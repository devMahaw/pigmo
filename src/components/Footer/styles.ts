import styled from "styled-components";
import { breakpoints, colors } from "@/styles";
import { Props } from ".";

export const FooterPigmoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 80px;
`;

export const FooterLinksContainer = styled.div`
  display: flex;
  margin-left: 160px;

  @media (max-width: ${breakpoints.desktop}) {
    margin-left: 0px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const FooterText = styled.p`
  font-size: 12px;
  line-height: 32px;
  letter-spacing: 28px;
  margin-left: 24px;

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
  margin: 40px 20px;

  img {
    margin-left: 20px;
  }

  p {
    font-size: 20px;
    line-height: 24px;
    margin-left: 24px;
  }

  @media (max-width: ${breakpoints.desktop}) {
    width: 420px;

    p {
      display: none;
    }
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
  margin-left: 180px;

  @media (max-width: ${breakpoints.desktop}) {
    background: none;
    box-shadow: none;
    margin-left: 140px;
  }
`;

export const FooterLinkTelegram = styled(FooterLink)`
  background: linear-gradient(96.45deg, #34bdc6 19.95%, #299cdc 115.62%);
  box-shadow: 0px 11px 26.8px 0px rgba(44, 165, 214, 0.07);

  @media (max-width: ${breakpoints.desktop}) {
    background: none;
    box-shadow: none;
  }
`;

export const FooterLinkTwitter = styled(FooterLink)`
  background: linear-gradient(96.45deg, #0d0b0c 19.95%, #1c1717 115.62%);
  box-shadow: 0px 11px 26.8px 0px rgba(42, 26, 47, 0.29);

  @media (max-width: ${breakpoints.desktop}) {
    background: none;
    box-shadow: none;
  }
`;

export const FooterContact = styled.div`
  display: flex;

  p {
    margin: 0px 160px 0px 16px;
  }

  @media (max-width: ${breakpoints.desktop}) {
    img {
      margin-left: 60px;
    }

    p {
      width: 100px;
      margin: 0px 40px 0px 16px;
    }
  }
`;

export const FooterInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 72px;

  @media (max-width: ${breakpoints.desktop}) {
    margin-bottom: 40px;
  }
`;
