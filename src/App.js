import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './styles/global';
import Layout from './components/Layout';

import themes from './styles/themes';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      theme: 'dark',
    };
    this.handleToggleTheme = this.handleToggleTheme.bind(this);
  }

  // const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

  // useEffect(() => {
  //   localStorage.setItem('theme', JSON.stringify(theme));
  // }, [theme]);
  handleToggleTheme() {
    this.setState((prevState) => ({
      theme: prevState.theme === 'light' ? 'dark' : 'light',
    }));
  }

  render() {
    const { theme } = this.state;

    return (
      <ThemeProvider theme={themes[theme] || themes.dark}>
        <GlobalStyle />
        <Layout onToggleTheme={this.handleToggleTheme} selectedTheme={theme} />
      </ThemeProvider>
    );
  }
}

export default App;
