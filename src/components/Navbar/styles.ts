import styled from "styled-components";
import { breakpoints, colors } from "@/styles";

export const NavbarRow = styled.div`
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${colors.darkPurple};
`;

export const NavbarRight = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  @media (max-width: ${breakpoints.phone}) {
    gap: 0px;
    margin-right: -16px;
  }
`;

export const NavbarHamburger = styled.img`
  margin-left: 32px;
  margin-top: 3px;

  @media (max-width: ${breakpoints.phone}) {
    display: none;
  }
`;

export const NavbarPigmo = styled.img`
  margin-left: 12px;

  @media (max-width: ${breakpoints.phone}) {
    margin-left: 32px;
  }
`;
