import styled from "styled-components";
import { colors } from "@/styles";

export const BannerImg = styled.div`
  max-width: 1680px;
  width: 100%;
  height: 350px;
  background-image: url("/assets/banner.png");
  display: flex;
  background-size: cover;
  background-position: center;
  margin-left: auto;

  h1 {
    font-size: 42px;
    line-height: 48px;
    color: ${colors.white};

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
  }
`;

export const BannerTitle = styled.h1`
  font-size: 42px;
  line-height: 48px;
  color: ${colors.white};
  margin-bottom: 12px;

  span {
    color: ${colors.hotPink};
  }
`;

export const BannerButtons = styled.div`
  display: flex;
  margin-left: 270px;
`;
