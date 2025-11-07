import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import ScrollToTop from './router/ScrollToTop.jsx';
import HomePage from './pages/Home.jsx';
import ServicesPage from './pages/Services.jsx';
import PortfolioPage from './pages/Portfolio.jsx';
import OurStoryPage from './pages/OurStory.jsx';
import VarnanPage from './pages/Varnan.jsx';
import ContactPage from './pages/Contact.jsx';

import './styles/home.css';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/our-story" element={<OurStoryPage />} />
          <Route path="/varnan" element={<VarnanPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

