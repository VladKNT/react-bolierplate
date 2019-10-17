import React from 'react';
import { ThemeProvider } from 'react-jss';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { theme } from './theme';
import { Routes } from './navigation/Routes';
import './App.css';

const browserHistory = createBrowserHistory();

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
        <Router history={browserHistory}>
            <Routes />
        </Router>
    </ThemeProvider>
  );
};

export default App;
