import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from './pages/HomePage';
import ElectionInfoPage from './pages/ElectionInfoPage';
import FAQPage from './pages/FAQPage';
import PressPage from './pages/PressPage';
import Root from './Root';
import PressRelease from './components/PressRelease';
import dec5Release from "./markdown/press-release/2022-12-05.md"
import electionFAQ from "./markdown/electionFAQ.md"
import generalFAQ from "./markdown/electionFAQ.md"
import links from "./markdown/links.md"

let FAQtext;
let dec5ReleaseText;
let electionFAQObjs;
let generalFAQObjs;
let linksText;


const loadMarkdownFiles = () => {
  electionFAQObjs = useCreateFAQFromMarkdown(electionFAQ)
  generalFAQObjs = useCreateFAQFromMarkdown(generalFAQ)
  linkstext = useMarkdown(links)
  dec5ReleaseText = useMarkdown(dec5Release)
}

const router = createBrowserRouter([
  {
      path: "/",
      element: <Root />,
      children: [
          { index: true, element: <HomePage />},
          {
            path: "/faq",
            element: <FAQPage md={{faq:FAQMd}}/>
          },
          {
            path: "/press",
            element: <PressPage md={{links:linksMd}}/>
          },
          {
            path: "/election-info",
            element: <ElectionInfoPage md={{faq:electionFAQMd}}/>
          },
          {
            path: "/press/releases/2022-12-05",
            element: <PressRelease 
                md={{release: dec5PressReleaseMd}}
                date={"December 5, 2022"}
              />
          }
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
