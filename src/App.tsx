import React from "react";
import HomePage from "./pages/HomePage";
import Artikel from "./pages/PageArtikel/PageArtikel";
import DetailArtikel from "./pages/DetailArtikel/DetailArtikel";
import GlobalCss from "./styles/Global";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/Theme";
import { useWindowDimensions } from "./Hooks/useWindowDimensions";
import Auth from "./pages/Auth/Auth";
// import TablePage from './pages/Example/TablePage';
import DetailKlinik from "./pages/DetailKlinik/DetailKlinik";
import EditProfil from './pages/EditProfil/EditProfil';
import TindakanMedis from "./pages/TindakanMedis/TindakanMedis";
// import PageArtikel from './pages/PageArtikel/PageArtikel';
import DetailDokter from "./pages/DetailDokter/DetailDokter";
import DetailLayananKlinik from "./pages/DetailLayananKlinik/DetailLayananKlinik";
import TanyaDokter from "./pages/TanyaDokter/TanyaDokter";
import CustomerListPage from "./pages/CustomerList/CustomerListPage";
import Invoice from "./pages/InvoiceList/Invoice";
import { Routes, Route } from "react-router-dom";
import DashboardArtikel from "./pages/DashboardArtikel/DashboardArtikel";
import TabGroup from "./pages/DashboardArtikel/TabGroup";
import SlivaProteksi from "./pages/SlivaProteksi/SlivaProteksi";
import store from "./store/store";
import { Provider } from "react-redux";
import ScheduleListPage from "./pages/ScheduleList/ScheduleListPage";
import UnlimitedChat from "./pages/SlivaProteksi/UnlimitedChat";
import Reguler from "./pages/SlivaProteksi/Reguler";
import Plus from "./pages/SlivaProteksi/Plus";
import PromoGajian from "./pages/PromoProduct/PromoGajian";
import DiskonSpesial from "./pages/PromoProduct/DiskonSpesial";
const App = () => {
  const { width } = useWindowDimensions();

  return (
    <ThemeProvider theme={defaultTheme}>
      <Provider store={store}>
        <GlobalCss />
        <PromoGajian width={0}/>
        {/* <DiskonSpesial width={0}/> */}
        <Routes>
          {/* <Route path='/' element={<HomePage width={width}/>} />
          <Route path='/auth' element={<Auth/>} />
          <Route path='/articles' element={<Artikel width={width}/>}/>
          <Route path='/article/:id' element={<DetailArtikel width={width}/>}/>
          <Route path="/clinic/:id" element={<DetailKlinik width={width}/>} />
          <Route path='/medical' element={<TindakanMedis width={width}/>}/>
          <Route path='/ask' element={<TanyaDokter width={width}/>}/>
          <Route path='/clinicService' element={<DetailLayananKlinik width={width}/>}/>
          <Route path='/doctor' element={<DetailDokter width={width} />}/> */}
          {/* <Route path='/profileUpdate' element={<EditProfil />}/>
          <Route path='/invoice' element={<Invoice />}/>
          <Route path='/customers' element={<CustomerListPage />}/>
          {/* <Route path='/dashboardArticle' element={<DashboardArtikel />}/> */}
          <Route path='/tabs' element={<TabGroup />}/>
          <Route path='/protection' element={<SlivaProteksi width={width} />}/>
        </Routes>
      </Provider>
    
    </ThemeProvider>
  );
};

export default App;
