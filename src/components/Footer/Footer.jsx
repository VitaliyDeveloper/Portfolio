import {
  FooterContainer,
  FooterList,
  FooterItem,
  Link,
  Dot1,
  Dot2,
} from './Footer.styled';

const Footer = () => {
  return (
    <FooterContainer>
      <Dot1></Dot1>
      <Dot2></Dot2>
      <FooterList>
        <FooterItem>
          <Link
            href="https://github.com/VitaliyDeveloper"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </Link>
        </FooterItem>
        <FooterItem>
          <Link
            href="https://www.linkedin.com/in/vitaliy-gerassimov-665255236/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Linkedin
          </Link>
        </FooterItem>
      </FooterList>
      <p>&copy; Vitaliy Gerassimov 2023</p>
    </FooterContainer>
  );
};

export default Footer;
