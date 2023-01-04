import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
    scroll-behavior: smooth;
  }
  body {
    line-height: 1.2;
    background:linear-gradient(135deg,#e09,#d0e);

  }
  a {
    color: inherit;
    text-decoration: none;
  }
`;
