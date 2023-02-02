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
          <Link
            href="https://github.com/VitaliyDeveloper"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </Link>
        </NavItem>
        <NavItem>
          <Link
            href="https://www.linkedin.com/in/vitaliy-gerassimov-665255236/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Linkedin
          </Link>
        </NavItem>
        <NavItem>
          <Link
            href="mailto:gerassimov.developer@mail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            gerassimov.developer@gmail.com
          </Link>
        </NavItem>
      </NavList>
      <Dot1></Dot1>
      <Dot2></Dot2>
    </NavigalionContainer>
  );
};

export default Navigation;
