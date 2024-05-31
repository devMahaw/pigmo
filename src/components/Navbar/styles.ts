import styled from "styled-components";
import { colors } from "@/styles";

export const NavbarRow = styled.div`
  max-width: 1680px;
  width: 100%;
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: auto;
  border-bottom: 1px solid ${colors.darkPurple};
`;

export const NavbarLeft = styled.div`
  display: flex;
  align-items: center;
`;

export const NavbarRight = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const NavbarHamburger = styled.img`
  margin-left: 32px;
  margin-top: 3px;
`;

export const NavbarPigmo = styled.img`
  margin-left: 12px;
`;

export const NavbarLink = styled.a`
  display: flex;
  align-items: center;
`;
