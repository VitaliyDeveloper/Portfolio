import {
  HomeContainer,
  Container,
  MyPhoto,
  TitleContainer,
  TitleName,
  TitleSurname,
  TitlePosition,
  Button,
} from './Home.styled';

const Home = () => {
  return (
    <HomeContainer>
      <Container>
        <MyPhoto></MyPhoto>
        <TitleContainer>
          <TitleName>Vitaliy</TitleName>
          <TitleSurname>Gerassimov</TitleSurname>
          <TitlePosition>Frontend Developer</TitlePosition>
        </TitleContainer>
      </Container>

      <Button>Let's go</Button>
    </HomeContainer>
  );
};

export default Home;
