import styled from "styled-components";
import { colors } from "@/styles";
import { Props } from "../Button";

export const SidebarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 240px;
  border-right: 1px solid ${colors.darkPurple};
  padding: 16px 0px;
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
  margin-left: 24px;
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

export const SidebarListItem = styled.li`
  margin: 8px 0px;
  width: 200px;
  margin-left: 14px;
  border-radius: 8px;
  transition: background 0.3s ease-in-out, color 0.3s ease-in-out;

  &:hover {
    background: rgba(204, 149, 215, 0.12) 63.84%;

    svg path {
      fill: ${colors.hotPink};
      transition: fill 0.3s ease-in-out;
    }

    span {
      color: ${colors.white};
      transition: color 0.3s ease-in-out;
    }
  }
`;

export const SidebarListItemLink = styled.a`
  display: flex;
  align-items: center;
  padding: 8px;

  span {
    color: ${colors.lightPurple};
    font-size: 14px;
    margin-left: 8px;
  }
`;

export const SidebarClickedItem = styled.div<Props>`
  display: ${(props) => (props.isActive ? "block" : "none")};
`;

export const SidebarHelp = styled.div`
  position: relative;
  width: 196px;
  height: 82px;
  border-radius: 8px;
  border: 2px solid ${colors.hotPink};
  margin: 96px 24px 40px 24px;
  background: linear-gradient(
    96.25deg,
    rgba(255, 0, 184, 0) 30.23%,
    rgba(255, 0, 184, 0.25) 92.14%
  );
`;

export const HelpImage = styled.img`
  position: absolute;
  top: -63px;
  right: -30px;
  height: auto;
`;
