import React from 'react'
import HomePage from "./pages/HomePage";
import Artikel from "./pages/PageArtikel/PageArtikel";
import DetailArtikel from "./pages/DetailArtikel/DetailArtikel";
import GlobalCss from "./styles/Global";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/Theme";
import { useWindowDimensions } from './Hooks/useWindowDimensions';
import Auth from './pages/Auth/Auth';
import { Route, Routes } from 'react-router-dom';
import TablePage from './pages/Example/TablePage';
import DetailKlinik from './pages/DetailKlinik/DetailKlinik';
import EditProfil from './pages/EditProfil/EditProfil';
import TindakanMedis from './pages/TindakanMedis/TindakanMedis';
import PageArtikel from './pages/PageArtikel/PageArtikel';
import DetailDokter from './pages/DetailDokter/DetailDokter';
import DetailLayananKlinik from './pages/DetailLayananKlinik/DetailLayananKlinik';
import TanyaDokter from './pages/TanyaDokter/TanyaDokter';

const App = () => {
  const {width} = useWindowDimensions()

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalCss />
      {/* <Routes>
        <Route path='/' element={<HomePage width={width}/>} />
        <Route path='/auth' element={<Auth/>} />
        <Route path='/article' element={<Artikel/>} />
      </Routes> */}
      {/* <TablePage /> */}
      {/* <Auth /> */}
      {/* <HomePage width={dimension.width} />
      <Artikel />
      <DetailArtikel /> */}
      {/* <DetailKlinik /> */}
      {/* <EditProfil/> */}
      {/* <Routes>
        <Route path='/medis' element={<TindakanMedis/>}/>
        <Route path='/artikel' element={<PageArtikel/>}/>
      </Routes> */}
      <DetailArtikel />
      <DetailDokter/>
      <DetailLayananKlinik/>
      <TanyaDokter/>
    </ThemeProvider>
  );
};

export default App;
