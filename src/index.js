import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './Server';
import Carrito from './Components/Carrito';
import reportWebVitals from './reportWebVitals';
import Layout from './Components/Layout'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Layout>
  <BrowserRouter>
  <Routes>
   
      <Route path="/" element={<App />} />
      <Route path="/carrito" element={<Carrito/>} />
      
    </Routes>
    </BrowserRouter>
    </Layout>
);

reportWebVitals();
