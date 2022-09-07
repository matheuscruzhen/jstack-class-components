import React, { Component, createContext } from 'react';

export const ThemeContext = createContext();

export class ThemeProvider extends Component {
  constructor(props) {
    super(props);

    let theme = 'dark';
    theme = JSON.parse(localStorage.getItem('theme'));
    try {
    } catch (error) {
      console.log(error);
    }

    this.state = { theme };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.theme !== this.state.theme) {
      localStorage.setItem('theme', JSON.stringify(this.state.theme));
    }
  }

  handleToggleTheme = () => {
    this.setState(
      (prevState) => ({
        theme: prevState.theme === 'light' ? 'dark' : 'light',
      }),
      () => {
        localStorage.setItem('theme', JSON.stringify(this.state.theme));
      }
    );
  };

  render() {
    return (
      <ThemeContext.Provider
        value={{
          theme: this.state.theme,
          handleToggleTheme: this.handleToggleTheme,
        }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}
