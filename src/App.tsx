<<<<<<< HEAD
import React from "react";
import { ThemeProvider } from "styled-components";
import logo from "./logo.svg";
import HomePage from "./pages/HomePage";
import GlobalCss from "./styles/Global";
import { defaultTheme } from "./styles/Theme";
=======
import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import PageArtikel from './PageArtikel/PageArtikel';
>>>>>>> 6001aaf5ed71037a044a724f844095593e90b09c

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
    <Router>
        <Routes>
            <Route path='/artikel' element={<PageArtikel/>}/>
        </Routes>
    </Router>
>>>>>>> 6001aaf5ed71037a044a724f844095593e90b09c
  );
}

export default App;