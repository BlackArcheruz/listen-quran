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
  .bm-menu{
    background: ${({ theme }) => theme.body} !important;
    color: ${({ theme }) => theme.text} !important;  
  }
  .bm-burger-bars{
    background: ${({ theme }) => theme.text} !important; 
    border-radius: 2px;
  }
  .bm-cross{
    background: ${({ theme }) => theme.text} !important; 
  }
  .text{
    background: ${({ theme }) => theme.loadingText} !important; 
  }
  .card{
    border: 2px solid;
    background: ${({ theme }) => theme.newBody};
    border-color: ${({ theme }) => theme.loadingText} !important; 
    &>*{
      background: ${({ theme }) => theme.loadingText} !important; 
    }
  }
  .primary-card{
    background: ${({ theme }) => theme.newBody};
  }
  select{
    background: ${({ theme }) => theme.newBody} !important;
    color: ${({ theme }) => theme.text} !important;  
  }
  option{
    background: ${({ theme }) => theme.newBody} !important;
    color: ${({ theme }) => theme.text} !important;  
  }
  .only_mobile{
    button{
      background: ${({ theme }) => theme.newBody} !important;
    }
  }
`;

export const lightTheme = {
  body: "#f1f1f1",
  newBody: "#e8e8e8",
  text: "#121620",
  loadingText: "rgb(148 163 184)"
};

export const darkTheme = {
  body: "#121620",
  newBody: '#1e2433',
  text: "#f1f1f1",
  loadingText: "rgb(203 213 225)"
};
