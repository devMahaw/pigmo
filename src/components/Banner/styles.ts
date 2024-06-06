import styled from "styled-components";
import { breakpoints, colors } from "@/styles";
import { ButtonDefault } from "../Button/styles";

export const BannerImg = styled.div`
  height: 350px;
  background-image: url("/assets/bannerImages/banner.png");
  display: flex;

  h1 {
    font-size: 42px;
    line-height: 48px;

    span {
      color: ${colors.hotPink};
    }
  }

  p {
    font-size: 20px;
    line-height: 22px;
  }
`;

export const BannerText = styled.div`
  margin-left: 270px;
  margin-top: 76px;

  p {
    font-size: 20px;
    line-height: 22px;
    margin-bottom: 32px;
    color: ${colors.lightPurple};
  }

  @media (max-width: ${breakpoints.desktop}) {
    justify-content: center;
    align-items: center;
    margin-left: 220px;

    p {
      text-align: center;
    }
  }
`;

export const BannerTitle = styled.h1`
  font-size: 42px;
  line-height: 48px;
  margin-bottom: 12px;

  span {
    color: ${colors.hotPink};
  }
`;

export const BannerButtons = styled.div`
  display: flex;
  margin-left: 270px;

  @media (max-width: ${breakpoints.desktop}) {
    display: block;
  }
`;

export const BannerButtonDefault = styled(ButtonDefault)`
  width: 200px;
  margin-right: 8px;

  @media (max-width: ${breakpoints.desktop}) {
    width: 350px;
    font-size: 18px;
    margin-right: 0px;
  }
`;

export const BannerButtonsIcos = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: ${breakpoints.desktop}) {
    margin-top: 20px;
    margin-right: 50px;
  }
`;
