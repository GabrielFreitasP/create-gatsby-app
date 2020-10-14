import React from 'react';
import { ThemeProvider } from 'styled-components';

import light from '../src/styles/themes/light';

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={light}>{element}</ThemeProvider>
);
