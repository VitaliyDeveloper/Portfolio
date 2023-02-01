import {
  HomeContainer,
  TitleContainer,
  TitleName,
  TitleSurname,
  Button,
} from './Home.styled';

const Home = () => {
  return (
    <HomeContainer>
      <TitleContainer>
        <TitleName>Vitaliy</TitleName>
        <TitleSurname>Gerassimov</TitleSurname>
      </TitleContainer>

      <ul>
        <li>sd</li>
        <li>ddsdf</li>
        <li>aasfasf</li>
      </ul>
      <Button>Let's go</Button>
    </HomeContainer>
  );
};

export default Home;
