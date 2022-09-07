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
  }

  // const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

  // useEffect(() => {
  //   localStorage.setItem('theme', JSON.stringify(theme));
  // }, [theme]);
  render() {
    const { theme } = this.state;

    function handleToggleTheme() {}

    return (
      <ThemeProvider theme={themes[theme] || themes.dark}>
        <GlobalStyle />
        <Layout
          onToggleTheme={() => {
            this.setState((prevState) => ({
              theme: prevState.theme === 'light' ? 'dark' : 'light',
            }));
          }}
          selectedTheme={theme}
        />
      </ThemeProvider>
    );
  }
}

export default App;
