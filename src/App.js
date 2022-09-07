import React, { Component } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { ThemeProvider, ThemeContext } from './contexts/ThemeContext';

import GlobalStyle from './styles/global';
import Layout from './components/Layout';

import themes from './styles/themes';

class App extends Component {
  render() {
    return (
      <ThemeProvider>
        <ThemeContext.Consumer>
          {({ theme }) => (
            <StyledThemeProvider theme={themes[theme] || themes.dark}>
              <GlobalStyle />
              <Layout />
            </StyledThemeProvider>
          )}
        </ThemeContext.Consumer>
      </ThemeProvider>
    );
  }
}

export default App;
