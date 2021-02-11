import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { createGlobalStyle } from 'styled-components/macro';

const GlobalStyling = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: 'Roboto Mono', monospace;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow: hidden;
  }

  html,
  body,
  #root {
    height: 100%;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  p {
    margin: 0;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyling />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
