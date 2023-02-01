import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavigalionContainer = styled.div`
  position: relative;
  margin: 0;
  width: 100%;
  height: 50px;
  background-color: var(--base-black);
  padding: 15px;
  display: flex;
  justify-content: space-between;
  overflow: hidden;
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
      left: 110%;
      transform: rotate(0deg);
    }
    100% {
      left: -10%;
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
      left: -10%;
      transform: rotate(0deg);
    }
    100% {
      left: 110%;
      transform: rotate(360deg);
    }
  }
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  padding: 0;
`;

export const NavItem = styled.li`
  margin-right: 20px;
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

export const Link = styled.a`
  text-decoration: none;
  color: var(--yellow-color);
  transition: color 500ms ease;

  &:hover {
    color: var(--red-color);
  }
`;
