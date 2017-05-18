import React, { Component } from 'react';
import styled, { ThemeProvider, injectGlobal } from 'styled-components';
import theme from '../theme';
import Base, { global } from '../base';

const StyledBase = styled(Base)`
  background-color: transparent;
`;

export default class Wrapper extends Component {
  componentWillMount() {
    // eslint-disable-next-line no-unused-expressions
    injectGlobal`
      ${global}
    `;
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <StyledBase>
          {this.props.children}
        </StyledBase>
      </ThemeProvider>
    );
  }
}
