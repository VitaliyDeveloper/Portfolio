import { Link } from 'react-router-dom';
import {
  HomeContainer,
  Container,
  MyPhoto,
  TitleContainer,
  TitleName,
  TitleSurname,
  TitlePosition,
  Button,
  AvatarContainer,
  PulserContainer,
} from './Home.styled';

const Home = () => {
  return (
    <HomeContainer>
      <Container>
        <AvatarContainer>
          <MyPhoto></MyPhoto>
          <PulserContainer></PulserContainer>
        </AvatarContainer>
        <TitleContainer>
          <TitleName>Vitaliy</TitleName>
          <TitleSurname>Gerassimov</TitleSurname>
          <TitlePosition>Frontend Developer</TitlePosition>

          <Link to="/mycontacts">
            <Button>Let's go</Button>
          </Link>
        </TitleContainer>
      </Container>
    </HomeContainer>
  );
};

export default Home;
