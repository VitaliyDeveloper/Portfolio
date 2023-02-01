import { Routes, Route } from 'react-router-dom';
import Layout from './Layout/Layout';
import HomePage from 'pages/HomePage';
import PortfolioPage from 'pages/PortfolioPage';
import ContactPage from 'pages/ContactPage';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/mycontacts" element={<ContactPage />} />
      </Route>
    </Routes>
  );
};
