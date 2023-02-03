import {
  ContactContainer,
  TitleContainer,
  Title,
  Wrapper,
  MainContact,
  Contact,
  // IconGitHub,
  IconPhone,
  IconMail,
  IconLinkedin,
  IconWhatsapp,
  Link,
} from './MyContacts.styled';

const MyContacts = () => {
  return (
    <ContactContainer>
      <TitleContainer>
        <Title className="desetungavon dsongentom">How to contact me</Title>
      </TitleContainer>
      <Wrapper>
        <MainContact className="main"></MainContact>
        {/* <Contact>
          <Link
            href="https://github.com/VitaliyDeveloper"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconGitHub className="hover" size="100" />
            <Link className="desetungavon dsongentom hoverLink">
              Link to GitHub
            </Link>
          </Link>
        </Contact> */}
        <Contact className="tel">
          <Link
            href="tel:+77777777777"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconPhone className="hover" size="100" />
            <Link className="desetungavon dsongentom hoverLink">
              +7 777 777 77 77
            </Link>
          </Link>
        </Contact>
        <Contact className="mail">
          <Link
            href="mailto:gerassimov.developer@mail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconMail className="hover" size="100" />
            <Link className="desetungavon dsongentom hoverLink">
              gerassimov.developer@gmail.com
            </Link>
          </Link>
        </Contact>
        <Contact className="linkedin">
          <Link
            href="https://www.linkedin.com/in/vitaliy-gerassimov-665255236/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconLinkedin className="hover" size="100" />
            <Link className="desetungavon dsongentom hoverLink">
              Link to Linkedin
            </Link>
          </Link>
        </Contact>
        <Contact className="whatsApp">
          <Link
            href="https://wa.me/77777777777"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconWhatsapp className="hover" size="100" />
            <Link className="desetungavon dsongentom hoverLink">WhatsApp</Link>
          </Link>
        </Contact>
      </Wrapper>
    </ContactContainer>
  );
};

export default MyContacts;
