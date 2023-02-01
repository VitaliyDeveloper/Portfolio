import {
  NavigalionContainer,
  NavList,
  NavItem,
  NavLinkStyle,
} from './Navigation.styled';

const Navigation = () => {
  return (
    <NavigalionContainer>
      <NavList>
        <NavItem>
          <NavLinkStyle to="/">Home</NavLinkStyle>
        </NavItem>
        <NavItem>
          <NavLinkStyle to="/mycontacts">Contacts</NavLinkStyle>
        </NavItem>
        <NavItem>
          <NavLinkStyle to="/portfolio">Portfolio</NavLinkStyle>
        </NavItem>
      </NavList>
    </NavigalionContainer>
  );
};

export default Navigation;
