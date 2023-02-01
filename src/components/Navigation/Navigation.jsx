import {
  NavigalionContainer,
  NavList,
  NavItem,
  NavLinkStyle,
  Link,
  Dot1,
  Dot2,
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
      <NavList>
        <NavItem>
          <Link href="">GitHub</Link>
        </NavItem>
        <NavItem>
          <Link href="">Linkedin</Link>
        </NavItem>
      </NavList>
      <Dot1></Dot1>
      <Dot2></Dot2>
    </NavigalionContainer>
  );
};

export default Navigation;
