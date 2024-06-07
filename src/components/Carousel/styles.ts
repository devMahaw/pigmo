import styled from "styled-components";
import { breakpoints } from "@/styles";

export const CarouselRow = styled.div`
  max-width: 1200px;
  width: 100%;
`;

export const CarouselContent = styled.div`
  display: flex;
  margin-top: 16px;
  gap: 16px;

  @media (max-width: ${breakpoints.desktop}) {
    overflow-x: auto;
    scroll-behavior: smooth;
    scroll-snap-type: x mandatory;
    padding-bottom: 20px;
    -webkit-overflow-scrolling: touch;
    margin-left: 20px;
  }
`;

export const CarouselContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 52px;

  @media (max-width: ${breakpoints.desktop}) {
    svg,
    img {
      margin-left: 20px;
    }
  }

  @media (max-width: ${breakpoints.phone}) {
    span {
      display: none;
    }
  }
`;

export const CarouselCard = styled.img`
  transition: all 0.3s;

  &:hover,
  &:active {
    transform: translateY(-3%);
  }
`;

export const CarouselVoleiCard = styled.img`
  box-shadow: 0px 8px 40.2px 1px rgba(255, 93, 161, 0.28);
  box-shadow: 0px 15px 13.7px -11px rgba(255, 87, 153, 0.39);
  transition: all 0.3s;
  border-radius: 8px;

  &:hover,
  &:active {
    transform: translateY(-3%);
  }
`;
