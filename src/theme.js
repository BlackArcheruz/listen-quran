import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: background 0.2s ease-in, color 0.2s ease-in;
  }
  .rhap_container{
    background: ${({ theme }) => theme.body} !important;
    color: ${({ theme }) => theme.text} !important; 
    border-color: ${({ theme }) => theme.text} !important; 
  }
  .rhap_time{
    color: ${({ theme }) => theme.text} !important; 
  }
`;

export const lightTheme = {
  body: "#f1f1f1",
  text: "#121620"
};

export const darkTheme = {
  body: "#121620",
  text: "#f1f1f1"
};
