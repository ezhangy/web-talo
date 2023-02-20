import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from './pages/HomePage';
import Navbar from './Navbar';
import FAQPage from './pages/FAQPage';

const router = createBrowserRouter([
  {
      path: "/",
      element: <Navbar />,
      children: [
          { index: true, element: <HomePage />},
          {
              path: "/faq",
              element: <FAQPage />
          },
      ],
  },
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>
  <RouterProvider router={router} />
</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
