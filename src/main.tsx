import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from './pages/home'
import ContactPage from './pages/contato'
import ServicePage from './pages/services'
import PortfolioPage from './pages/portfolio';
import BlogPage from './pages/blog';
import App from './App';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // criar rota para erro 404
    children: [
      {
        path: "/",
        element: <HomePage />
      },
      {
        path: "/inicio",
        element: <HomePage />
      },
      {
        path: "contato",
        element: <ContactPage />
      },
      {
        path: "services",
        element: <ServicePage />
      },
      {
        path: "portfolio",
        element: <PortfolioPage />
      },
      {
        path: "blog",
        element: <BlogPage />
      }
    ]
  }
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
