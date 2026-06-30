import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import { Home } from './pages/Home';
import { Decentraland } from './pages/Decentraland';
import { SecurityScorecard } from './pages/SecurityScorecard';
import { WeCare } from './pages/WeCare';
import { Tardeo } from './pages/Tardeo';
import { ScrollToTop } from './components/ScrollToTop/ScrollToTop';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/security-scorecard" element={<SecurityScorecard />} />
        <Route path="/decentraland" element={<Decentraland />} />
        <Route path="/we-care" element={<WeCare />} />
        <Route path="/tardeo-argentino" element={<Tardeo />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
