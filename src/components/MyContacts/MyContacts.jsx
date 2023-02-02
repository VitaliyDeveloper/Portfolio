import {
  ContactContainer,
  TitleContainer,
  Title,
  Wrapper,
  Contact,
  IconGitHub,
  IconPhone,
  IconMail,
  IconLinkedin,
  Link,
} from './MyContacts.styled';

const MyContacts = () => {
  return (
    <ContactContainer>
      <TitleContainer>
        <Title>How to contact me</Title>
      </TitleContainer>
      <Wrapper>
        <Contact>
          <IconGitHub className="hover" size="100" />
          <Link href="" className="desetungavon dsongentom hoverLink">
            Link to GitHub
          </Link>
        </Contact>
        <Contact>
          <IconPhone className="hover" size="100" />
          <Link href="" className="desetungavon dsongentom hoverLink">
            +7 777 777 77 77
          </Link>
        </Contact>
        <Contact>
          <IconMail className="hover" size="100" />
          <Link href="" className="desetungavon dsongentom hoverLink">
            gerassimov.developer@gmail.com
          </Link>
        </Contact>
        <Contact>
          <IconLinkedin className="hover" size="100" />
        </Contact>
        <Contact></Contact>
        <Contact></Contact>
      </Wrapper>
    </ContactContainer>
  );
};

export default MyContacts;
