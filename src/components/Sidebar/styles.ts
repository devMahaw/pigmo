import styled from "styled-components";
import { colors } from "@/styles";

export const SidebarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 240px;
  border-right: 1px solid ${colors.darkPurple};
  padding: 16px 24px;
`;

export const SidebarLinksContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 192px;
  height: 48px;
  border: 1px solid ${colors.darkPurple};
  gap: 20px;
  padding: 4px;
  border-radius: 12px;
`;

export const SidebarLink = styled.a`
  width: 40px;
  display: flex;
  align-items: center;
  transition: width 0.3s ease-in-out, background 0.3s ease-in-out;

  @keyframes slideInRight {
    from {
      background-position: -100%;
    }
    to {
      background-position: 0%;
    }
  }

  span {
    display: none;
    color: ${colors.white};
    font-size: 14px;
  }

  &:hover {
    background: linear-gradient(90deg, #ff01b7 0%, #ff6864 100.01%);
    width: 94px;
    height: 40px;
    border-radius: 8px;
    padding: 0px 8px;
    animation: slideInRight 0.5s ease-in-out forwards;

    svg path {
      fill: ${colors.white};
    }

    span {
      display: block;
    }
  }
`;
