import { Outlet } from 'react-router-dom';

//COMPONENTS////////////////////////////
import Navigation from 'components/Navigation/Navigation';
import { Main } from './Layuout.styled';
import Footer from 'components/Footer/Footer';

const Layout = () => {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <Main>
        <Outlet />
      </Main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Layout;
