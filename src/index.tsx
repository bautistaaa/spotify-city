import { createRoot } from 'react-dom/client';
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

const container = document.getElementById('root');
const root = createRoot(container as HTMLElement);

root.render(
  <>
    <GlobalStyling />
    <App />
  </>
);
