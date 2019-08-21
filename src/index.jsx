import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import createStore from './Store/configureStore';
import { MuiThemeProvider } from '@material-ui/core';
import createMyTheme from './RootTheme/Theme';

const theme = createMyTheme();
const store = createStore();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <MuiThemeProvider theme={theme}>
        <App />
      </MuiThemeProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
