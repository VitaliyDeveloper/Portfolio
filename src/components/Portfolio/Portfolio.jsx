//STYLES/////////////////////////
import {
  PortfolioContainer,
  PortfolioList,
  PortfolioItem,
  Link,
  ImageW,
  SiteName,
  Front,
  Back,
  SiteNameBack,
  Stack,
  Description,
} from './Portfolio.styled';

const Portfolio = ({ portfolio }) => {
  return (
    <PortfolioContainer>
      <PortfolioList>
        {portfolio.map(site => (
          <PortfolioItem className="center" key={site.id}>
            <Front className="front">
              <ImageW className="hoverShow" src={site.imageUrl}></ImageW>
              <SiteName className="hoverHide">{site.title}</SiteName>
            </Front>
            <Back className="back">
              <div className="center">
                <SiteNameBack>{site.title}</SiteNameBack>
                <Stack>{site.stack}</Stack>
                <Description>{site.description}</Description>
                <Link href={site.url} target="_blank" rel="noopener noreferrer">
                  Go to site...
                </Link>
              </div>
            </Back>
          </PortfolioItem>
        ))}
      </PortfolioList>
    </PortfolioContainer>
  );
};

export default Portfolio;
