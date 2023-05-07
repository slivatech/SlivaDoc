import React from "react";
import HomePage from "./pages/HomePage";
import Artikel from "./pages/PageArtikel/PageArtikel";
import DetailArtikel from "./pages/DetailArtikel/DetailArtikel";
import GlobalCss from "./styles/Global";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/Theme";
import { useWindowDimensions } from './Hooks/useWindowDimensions';
import Auth from './pages/Auth/Auth';
import TablePage from './pages/Example/TablePage';
import DetailKlinik from './pages/DetailKlinik/DetailKlinik';
import EditProfil from './pages/EditProfil/EditProfil';
import TindakanMedis from './pages/TindakanMedis/TindakanMedis';
import PageArtikel from './pages/PageArtikel/PageArtikel';
import DetailDokter from './pages/DetailDokter/DetailDokter';
import DetailLayananKlinik from './pages/DetailLayananKlinik/DetailLayananKlinik';
import TanyaDokter from './pages/TanyaDokter/TanyaDokter';
import CustomerListPage from "./pages/CustomerList/CustomerListPage";
import Invoice from './pages/InvoiceList/Invoice';
import {Routes, Route} from 'react-router-dom'
import PopUpTranksaksi from "./pages/PopUpTranksaksi/PopUpTranksaksi";
import SlivaProteksi from "./pages/SlivaProteksi/SlivaProteksi";
import UnlimitedChat from "./pages/SlivaProteksi/UnlimitedChat";

const App = () => {
  const {width} = useWindowDimensions()

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalCss />
      {/* <Artikel width={0} />
      <DetailArtikel width={0} />
      <DetailDokter width={0}/>
      <DetailLayananKlinik width={0}/>
      <TanyaDokter width={0}/>
      <PopUpTranksaksi /> */}
      <SlivaProteksi width={0}/>
      <UnlimitedChat width={0}/>
      <Routes>
        <Route path='/' element={<HomePage width={width}/>} />
        <Route path='/auth' element={<Auth/>} />
        <Route path='/articles' element={<Artikel width={width}/>}/>
        <Route path='/article' element={<DetailArtikel width={width}/>}/>
        <Route path="/clinic" element={<DetailKlinik width={width}/>} />
        <Route path='/medical' element={<TindakanMedis width={width}/>}/>
        <Route path='/ask' element={<TanyaDokter width={width}/>}/>
        <Route path='/clinicService' element={<DetailLayananKlinik width={width}/>}/>
        <Route path='/doctor' element={<DetailDokter width={width} />}/>
        <Route path='/profileUpdate' element={<EditProfil />}/>
        <Route path='/invoice' element={<Invoice />}/>
        <Route path='/customers' element={<CustomerListPage />}/>
      </Routes>
    </ThemeProvider>
  );
};

export default App;
