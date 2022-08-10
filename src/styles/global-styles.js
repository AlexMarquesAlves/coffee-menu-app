import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;

    body{
      background-color: #ffedd5;
      font-family: 'Roboto', sans-serif;

      ul{
        list-style: none;
      }

      h1,
      h2,
      h3,
      .price{
        font-family: 'Roboto Serif', serif;
        color: #2d2c2a;
      }
  }
  }
`;
