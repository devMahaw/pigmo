import styled from "styled-components";
import { colors } from "@/styles";

export const SidebarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 240px;
  border-right: 1px solid ${colors.darkPurple};
`;
