import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';

// Importing pages and components
import Layout from './layouts/Layout.jsx';
import Home from './pages/Home.jsx';
import ErrorPage from './pages/Error.jsx'

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <Router>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/index.html" element={<Home />} />
        {/* Dynamic routes for Pest Control Services in each city */}
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  </Router>
);