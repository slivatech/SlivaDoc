<<<<<<< HEAD
import React from "react";
import { ThemeProvider } from "styled-components";
import logo from "./logo.svg";
import HomePage from "./pages/HomePage";
import GlobalCss from "./styles/Global";
import { defaultTheme } from "./styles/Theme";
=======
>>>>>>> 5faa1f0f97354369bdfc9450239afe2b753980a4

import './App.css';
import DetailArtikel from './pages/DetailArtikel/DetailArtikel';


const App = () => {
  return (
<<<<<<< HEAD
    <ThemeProvider theme={defaultTheme}>
      <GlobalCss />
      <HomePage />
    </ThemeProvider>
=======
    <DetailArtikel/>
>>>>>>> 5faa1f0f97354369bdfc9450239afe2b753980a4
  );
}

export default App;