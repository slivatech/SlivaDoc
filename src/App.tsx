import React from "react";
import HomePage from "./pages/HomePage";
import Artikel from "./pages/PageArtikel/PageArtikel";
import DetailArtikel from "./pages/DetailArtikel/DetailArtikel";
import GlobalCss from "./styles/Global";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/Theme";
import { useWindowDimensions } from "./hooks/useWindowDimensions";
import Auth from "./pages/Auth/Auth";
// import TablePage from './pages/Example/TablePage';
import DetailKlinik from "./pages/DetailKlinik/DetailKlinik";
// import EditProfil from './pages/EditProfil/EditProfil';
import TindakanMedis from "./pages/TindakanMedis/TindakanMedis";
// import PageArtikel from './pages/PageArtikel/PageArtikel';
import DetailDokter from "./pages/DetailDokter/DetailDokter";
import DetailLayananKlinik from "./pages/DetailLayananKlinik/DetailLayananKlinik";
import TanyaDokter from "./pages/TanyaDokter/TanyaDokter";
import CustomerListPage from "./pages/CustomerList/CustomerListPage";
import Invoice from './pages/InvoiceList/Invoice';
import {Routes, Route} from 'react-router-dom'
// import DashboardArtikel from "./pages/DashboardArtikel/DashboardArtikel";
import TabGroup from "./pages/DashboardArtikel/TabGroup";

const App = () => {
  const { width } = useWindowDimensions();

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalCss />
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
        {/* <Route path='/profileUpdate' element={<EditProfil />}/> */}
        <Route path='/invoice' element={<Invoice />}/>
        <Route path='/customers' element={<CustomerListPage />}/>
        {/* <Route path='/dashboardArticle' element={<DashboardArtikel />}/> */}
        <Route path='/tabs' element={<TabGroup />}/>
      </Routes>
    </ThemeProvider>
  );
};

export default App;
