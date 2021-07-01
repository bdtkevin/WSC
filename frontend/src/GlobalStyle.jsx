import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    color: #fff;
  }

  body {
    overflow: hidden;
  }
`;

export default GlobalStyle;
