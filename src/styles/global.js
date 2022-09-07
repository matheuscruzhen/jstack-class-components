import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  body { 
    color: ${(props) => props.theme.textColor};
    background: ${(props) => props.theme.backgroundColor};
    font-family: sans-serif;
  }
`;
