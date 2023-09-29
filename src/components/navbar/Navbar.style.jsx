import styled from "styled-components";
import Flex from "../../styles/Flex";
import { NavLink } from "react-router-dom";

export const Nav = styled(Flex)`
  background: ${({ theme }) => theme.colors.navbarBgColor};
  padding: 0.1rem 2rem;
  height: 4rem;
`;

export const Logo = styled(NavLink)`
  padding: 0.1rem 0;
  color: ${({ theme }) => theme.colors.logoColor};
  text-decoration: none;
  font-weight: 800;
  font-size: 2rem;
  width: 20rem;
`;

export const Menu = styled(Flex)`
  font-weight: bold;
  /* border: #151515 solid 3px; */
  width: 40rem;
  @media (max-width: ${({ theme }) => theme.screens.lg}) {
    flex-direction: column;
    width: 100%;
    transition: all 0.3s ease-in;
    max-height: ${({ showMenu }) => (showMenu ? "300px" : "0")};
    overflow: hidden;
  }
`;

export const MenuLink = styled(NavLink)`
  text-align: center;
  padding: 1rem 2rem;
  cursor: pointer;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.linkColor};
  transition: all 0.3s ease-in;
  :hover {
    color: ${({ theme }) => theme.colors.linkHoverColor};
  }
  .active {
    color: blue;
  }
`;

export const HamburgerIcon = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: ${({ theme }) => theme.screens.lg}) {
    display: block;
  }
`;
export const ButtonTr = styled.button`
  color: #faf9fd;
  background: #fa0202;
  border: #09acec solid 3px;
  font-size: 1em;
  margin: 0.2em;
  padding: 0.25em 1em;
  border-radius: 3px;
  cursor: pointer;
  width: 7rem;
  :hover {
    color: #fa0808;
    background: white;
    border: yellow solid 5px;
  }
`;
export const ButtonEn = styled.button`
  color: #fa0808;
  background: white;
  border: #151515 solid 3px;
  font-size: 1em;
  margin: 0.2em;
  padding: 0.25em 1em;
  border-radius: 3px;
  cursor: pointer;
  width: 7rem;
  :hover {
    color: #faf9fd;
    background: #fa0202;
    border: yellow solid 5px;
  }
`;
