import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import PressRelease from './components/PressRelease';
import './index.css';
import ElectionInfoPage from './pages/ElectionInfoPage';
import FAQPage from './pages/FAQPage';
import HomePage from './pages/HomePage';
import PressPage from './pages/PressPage';
import reportWebVitals from './reportWebVitals';
import Root from './Root';
import decFifthPR from './markdown/press-releases/2022-12-05.md';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: '/faq',
        element: <FAQPage />,
      },
      {
        path: '/press',
        element: <PressPage />,
      },
      {
        path: '/election-info',
        element: <ElectionInfoPage />,
      },
      {
        path: '/press/releases/2022-12-05',
        element: (
          <PressRelease
            markdownFilePath={decFifthPR}
            date={'December 5, 2022'}
          />
        ),
      },
    ],
  },
]);
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
