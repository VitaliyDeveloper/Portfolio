//STYLES/////////////////////////
import {
  PortfolioContainer,
  PortfolioList,
  PortfolioItem,
  Link,
  ImageW,
  SiteName,
  Side,
} from './Portfolio.styled';

const Portfolio = ({ portfolio }) => {
  return (
    <PortfolioContainer>
      <PortfolioList>
        {portfolio.map(site => (
          <PortfolioItem key={site.id}>
            <div>
              <Link href={site.url} target="_blank" rel="noopener noreferrer">
                <ImageW className="hoverShow" src={site.imageUrl}></ImageW>
              </Link>
              <SiteName className="hoverHide">{site.title}</SiteName>
            </div>
            <Side>
              <SiteName>{site.title}</SiteName>
              <p>{site.description}</p>
            </Side>
          </PortfolioItem>
        ))}
      </PortfolioList>
    </PortfolioContainer>
  );
};

export default Portfolio;
