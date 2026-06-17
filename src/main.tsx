import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import { Home } from './pages/Home';
import { Decentraland } from './pages/Decentraland';
import { ScrollToTop } from './components/ScrollToTop/ScrollToTop';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/decentraland" element={<Decentraland />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
