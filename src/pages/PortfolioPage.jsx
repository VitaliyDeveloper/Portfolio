import portfolio from '../data_base/dbPortfolio.json';
import Portfolio from 'components/Portfolio/Portfolio';

const PortfolioPage = () => {
  return <Portfolio portfolio={portfolio.portfolio} />;
};

export default PortfolioPage;
