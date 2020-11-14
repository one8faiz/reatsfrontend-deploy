import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import App from './App';
import theme from './Theme';


export { default as Footer } from "./Footer";
export { default as Home } from "./Home";
export { default as About } from "./About";
export { default as Contact } from "./Contact";
export { default as SignUp } from "./Signup";
export { default as ListProperty } from "./ListProperty";
export { default as Login } from "./Login";
ReactDOM.render(
  <ThemeProvider theme={theme}>
    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
    <CssBaseline />
    <App />
  </ThemeProvider>,
  document.querySelector('#root'),
);