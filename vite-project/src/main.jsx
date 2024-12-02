// src/index.js
import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'; // Asegúrate de que tienes estilos básicos
import App from './App';
import Fetching from './components/Fetching'; // Importamos solo Fetching

// Creamos el render en el div con id "root"
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Fetching />
  </React.StrictMode>
);
