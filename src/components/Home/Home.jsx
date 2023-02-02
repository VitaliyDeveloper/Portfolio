import {
  HomeContainer,
  TitleContainer,
  TitleName,
  TitleSurname,
  TitlePosition,
  Button,
} from './Home.styled';

const Home = () => {
  return (
    <HomeContainer>
      <TitleContainer>
        <TitleName>Vitaliy</TitleName>
        <TitleSurname>Gerassimov</TitleSurname>
        <TitlePosition>Frontend Developer</TitlePosition>
      </TitleContainer>

      <Button>Let's go</Button>
    </HomeContainer>
  );
};

export default Home;
