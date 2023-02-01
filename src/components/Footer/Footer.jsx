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
          <Link href="">GitHub</Link>
        </FooterItem>
        <FooterItem>
          <Link href="">Linkedin</Link>
        </FooterItem>
      </FooterList>
      <p>&copy; Vitaliy Gerassimov 2023</p>
    </FooterContainer>
  );
};

export default Footer;
