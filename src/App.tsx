import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import PageArtikel from './PageArtikel/PageArtikel';

function App() {
  return (
    <Router>
        <Routes>
            <Route path='/artikel' element={<PageArtikel/>}/>
        </Routes>
    </Router>
  );
}

export default App;
