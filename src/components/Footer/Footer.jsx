import {
  FooterContainer,
  FooterList,
  FooterItem,
  Link,
  Dot1,
  Dot2,
  Text,
  Copy,
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
      <Text>Almaty, Kazakhstan</Text>
      <Copy>&copy; Vitaliy Gerassimov 2023</Copy>
    </FooterContainer>
  );
};

export default Footer;
