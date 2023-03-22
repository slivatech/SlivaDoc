import React from "react";
import { ThemeProvider } from "styled-components";
import logo from "./logo.svg";
import HomePage from "./pages/HomePage";
import GlobalCss from "./styles/Global";
import { defaultTheme } from "./styles/Theme";

import './App.css';
import DetailArtikel from './pages/DetailArtikel/DetailArtikel';


const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalCss />
      <HomePage />
    </ThemeProvider>
  );
}

export default App;