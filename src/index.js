import { ColorModeScript } from '@chakra-ui/react';
import React from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './serviceWorker';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import { BrowserRouter } from 'react-router-dom';
import { CricklyticsCompletedProvider, CricklyticsLiveProvider, CricklyticsUpcomingProvider } from './Context.jsx/CricklyticsContext';
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <CricklyticsUpcomingProvider>
    <CricklyticsLiveProvider>
      <CricklyticsCompletedProvider>
  <BrowserRouter>
    <ColorModeScript />
    <App />
  </BrowserRouter>
  </CricklyticsCompletedProvider>
    </CricklyticsLiveProvider>
  </CricklyticsUpcomingProvider>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorker.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
