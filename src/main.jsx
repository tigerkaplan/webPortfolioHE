import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Experience from './pages/Experience/Experience.jsx';
import Features from './pages/Features/Features.jsx';
import Portfolio from './pages/Portfolio/Portfolio';
import Blog from './pages/Blog/Blog.jsx';
import Contact from './pages/Contact/Contact.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/about', element: <About /> },
      { path: '/experience', element: <Experience /> },
      { path: '/features', element: <Features /> },
      { path: '/portfolio', element: <Portfolio /> },
      { path: '/blog', element: <Blog /> },
      { path: '/contact', element: <Contact /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
