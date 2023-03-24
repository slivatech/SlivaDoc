import React from "react";
import { ThemeProvider } from "styled-components";
import HomePage from "./pages/HomePage";
import GlobalCss from "./styles/Global";
import { defaultTheme } from "./styles/Theme";

import './App.css';
import Artikel from './pages/PageArtikel/PageArtikel';
import DetailArtikel from './pages/DetailArtikel/DetailArtikel';


const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalCss />
      <HomePage />
      <Artikel/>
      <DetailArtikel/>
    </ThemeProvider>
  );
}

export default App;