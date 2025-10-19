import React from 'react';
import { StrictMode } from 'react';
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './router/router'
import {createRoot} from 'react-dom/client'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
