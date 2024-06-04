import styled from "styled-components";
import { colors } from "@/styles";

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
`;
