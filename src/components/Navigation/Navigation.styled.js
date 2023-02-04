import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavigalionContainer = styled.div`
  position: relative;
  margin: 0;
  width: 100%;
  height: 50px;
  background-color: var(--base-black);
  /* padding: 15px 0; */
  display: flex;
  justify-content: space-between;
  /* overflow: hidden; */
`;

export const Dot1 = styled.span`
  position: absolute;
  bottom: 0;
  width: 10px;
  height: 10px;
  background-color: var(--red-color);

  animation: dotLeft 7000ms ease-in-out infinite alternate-reverse;

  @keyframes dotLeft {
    0% {
      left: 100%;
      transform: rotate(0deg);
    }
    100% {
      left: 0%;
      transform: rotate(360deg);
    }
  }
`;
export const Dot2 = styled.span`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 10px;
  height: 10px;

  background-color: var(--yellow-color);

  animation: dotRight 7000ms ease-in-out infinite alternate-reverse;

  @keyframes dotRight {
    0% {
      left: 0%;
      transform: rotate(0deg);
    }
    100% {
      left: 100%;
      transform: rotate(360deg);
    }
  }
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  padding: 0 20px;
`;

export const NavItem = styled.li`
  :not(:last-child) {
    margin-right: 20px;
  }
`;

export const NavLinkStyle = styled(NavLink)`
  text-decoration: none;
  font-size: 20px;
  color: var(--white-color);
  transition: color 500ms solid ease;

  &:hover,
  :focus {
    color: var(--yellow-color);
  }

  &.active {
    color: var(--red-color);
  }
`;

//submenu//////////////////////////////////////
export const NavItemTopMenu = styled.li`
  position: relative;
  :hover .submenu {
    visibility: visible;
    opacity: 1;
    transform: perspective(600px) rotateX(0deg);
  }
`;
export const Menu = styled.div`
  padding: 5px;
  background-color: var(--yellow-color);
  color: var(--base-black);
  transition: color 500ms ease;

  &:hover {
    color: var(--red-color);
  }
`;

export const NavListSubmenu = styled.ul`
  list-style: none;
  padding: 0 20px;
  background: var(--yellow-color);
  position: absolute;
  left: 0;
  visibility: hidden;
  opacity: 0;
  z-index: 5;
  min-width: 150px;
  /* min-height: 100px; */
  transform: perspective(600px) rotateX(-90deg);
  transform-origin: 0% 0%;
  transition: 0.6s ease-in-out;
`;

export const NavItemSubmenu = styled.li`
  margin: 10px 0 10px 0;
`;

export const Link = styled.a`
  text-decoration: none;
  color: var(--base-black);
  transition: color 500ms ease;

  &:hover {
    color: var(--red-color);
  }
`;
