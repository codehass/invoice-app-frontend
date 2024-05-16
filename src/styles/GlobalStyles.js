import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`:root{

  --color-gray-0: #18212f;
  --color-gray-50: #111827; 
  --color-gray-100:  #1F213A;
  --color-brand-100: #e0e7ff; 

  html {
    font-size: 62.5%;
  }

  body {
    font-family: "Poppins", sans-serif;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    transition: color 0.3s, background-color 0.3s;
    min-height: 100vh;
    line-height: 1.5;
    font-size: 1.6rem;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
    color: inherit;
  }

  button {
    cursor: pointer;
  }

  *:disabled {
    cursor: not-allowed;
  }

  button:has(svg) {
    line-height: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    overflow-wrap: break-word;
    hyphens: auto;
   } 

   img {
    max-width: 100%;
  }  
  
}`;

export default GlobalStyles;
