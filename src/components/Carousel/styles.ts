import styled from "styled-components";

export const CarouselRow = styled.div`
  max-width: 1410px;
  width: 100%;
  margin-left: auto;
`;

export const CarouselContent = styled.div`
  display: flex;
  margin-top: 16px;
  gap: 16px;
`;

export const CarouselContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 52px;
`;

export const CarouselCard = styled.img`
  transition: all 0.3s;

  &:hover {
    transform: translateY(-3%);
  }
`;

export const CarouselVoleiCard = styled.img`
  box-shadow: 0px 8px 40.2px 1px rgba(255, 93, 161, 0.28);
  box-shadow: 0px 15px 13.7px -11px rgba(255, 87, 153, 0.39);
  transition: all 0.3s;
  border-radius: 8px;

  &:hover {
    transform: translateY(-3%);
  }
`;
