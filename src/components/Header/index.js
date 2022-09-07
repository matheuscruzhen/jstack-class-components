import React, { Component } from 'react';

import { Container } from './styles';

export default class Header extends Component {
  render() {
    const { selectedTheme, onToggleTheme } = this.props;

    return (
      <Container>
        <h1>JStack's Blog</h1>
        <button type='button' onClick={onToggleTheme}>
          {selectedTheme === 'dark' ? '🌞' : '🌚'}
        </button>
      </Container>
    );
  }
}
