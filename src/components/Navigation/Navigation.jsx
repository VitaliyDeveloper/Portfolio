import {
  NavigalionContainer,
  NavList,
  NavItemTopMenu,
  NavListSubmenu,
  NavItemSubmenu,
  NavItem,
  NavLinkStyle,
  Link,
  Menu,
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
          <NavLinkStyle to="/mycontacts">AboutMe</NavLinkStyle>
        </NavItem>
        <NavItem>
          <NavLinkStyle to="/portfolio">Portfolio</NavLinkStyle>
        </NavItem>
        <NavItemTopMenu>
          <Menu href="" class="down">
            CONTACTS
          </Menu>
          <NavListSubmenu className="submenu">
            <NavItemSubmenu>
              <Link
                href="https://github.com/VitaliyDeveloper"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </Link>
            </NavItemSubmenu>
            <NavItemSubmenu>
              <Link
                href="https://www.linkedin.com/in/vitaliy-gerassimov-665255236/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Linkedin
              </Link>
            </NavItemSubmenu>
            <NavItemSubmenu>
              <Link
                href="mailto:gerassimov.developer@mail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                gerassimov.developer@gmail.com
              </Link>
            </NavItemSubmenu>
          </NavListSubmenu>
        </NavItemTopMenu>
      </NavList>
      {/* <NavList>
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
      </NavList> */}
      <Dot1></Dot1>
      <Dot2></Dot2>
    </NavigalionContainer>
  );
};

export default Navigation;
