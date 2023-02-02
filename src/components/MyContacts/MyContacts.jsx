import {
  ContactContainer,
  TitleContainer,
  Title,
  Wrapper,
  Contact,
} from './MyContacts.styled';

const MyContacts = () => {
  return (
    <ContactContainer>
      <TitleContainer>
        <Title>How to contact me</Title>
      </TitleContainer>
      <Wrapper>
        <Contact></Contact>
        <Contact></Contact>
        <Contact></Contact>
        <Contact></Contact>
        <Contact></Contact>
        <Contact></Contact>
      </Wrapper>
    </ContactContainer>
  );
};

export default MyContacts;
