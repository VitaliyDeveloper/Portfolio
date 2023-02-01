import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavigalionContainer = styled.div`
  margin: 0;
  width: 100%;
  height: 50px;
  background-color: var(--base-black);
  padding: 15px;
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  padding: 0;
  /* color: #f4e500; */
`;

export const NavItem = styled.li`
  margin-right: 20px;
`;

export const NavLinkStyle = styled(NavLink)`
  text-decoration: none;
  font-size: 20px;
  color: var(--white-color);

  &:hover,
  :focus {
    color: var(--yellow-color);
  }

  &.active {
    color: var(--red-color);
  }
`;
