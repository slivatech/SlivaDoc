import React from "react";
import { ThemeProvider } from "styled-components";
import HomePage from "./pages/HomePage";
import GlobalCss from "./styles/Global";
import { defaultTheme } from "./styles/Theme";
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';

import './App.css';
import Artikel from './pages/PageArtikel/PageArtikel';
import DetailArtikel from './pages/DetailArtikel/DetailArtikel';
import PageArtikel from "./pages/PageArtikel/PageArtikel";


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