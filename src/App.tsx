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
import SlivaProteksi from "./pages/SlivaProteksi/SlivaProteksi";
import store from "./store/store";
import { Provider } from "react-redux";
import ScheduleListPage from "./pages/ScheduleList/ScheduleListPage";
import UnlimitedChat from "./pages/SlivaProteksi/UnlimitedChat";
import Reguler from "./pages/SlivaProteksi/Reguler";
import Plus from "./pages/SlivaProteksi/Plus";
import PromoGajian from "./pages/PromoProduct/PromoGajian";
import DiskonSpesial from "./pages/PromoProduct/DiskonSpesial";
import { BookingContainer } from "./pages/DetailDokter/DetailDokterStyle";
import BookingDoctorPage from "./pages/BookingDoctor/BookingDoctorPage";
import DashboardAds from "./pages/DashboardAds/DashboardAds";
import TabGroup from "./pages/DashboardArtikel/TabGroup";
import ShopHome from "./pages/ShopHomePage/ShopHome";
import ResellerDetailPage from "./pages/ResellerDetail/ResellerDetailPage";
import DashboardAdmin from "./pages/DashboardAdmin/DashboardAdmin";
import DashboardAdminSeller from "./pages/DashboardAdminSeller/DashboardAdminSeller";
const App = () => {
  const { width } = useWindowDimensions();

  return (
    <ThemeProvider theme={defaultTheme}>
      <Provider store={store}>
        <GlobalCss />
        <Routes>
          <Route path='/' element={<HomePage width={width}/>} />
          <Route path='/auth' element={<Auth/>} />
          <Route path='/articles' element={<Artikel width={width}/>}/>
          <Route path='/article/:id' element={<DetailArtikel width={width}/>}/>
          <Route path="/clinic/:id" element={<DetailKlinik width={width}/>} />
          <Route path='/medical' element={<TindakanMedis width={width}/>}/>
          <Route path='/ask' element={<TanyaDokter width={width}/>}/>
          <Route path='/clinicService' element={<DetailLayananKlinik width={width}/>}/>
          <Route path='/doctor/:id' element={<DetailDokter width={width} />}/> 
          <Route path='/profileUpdate' element={<EditProfil width={0} />}/>
          <Route path='/invoice' element={<Invoice width={0} />}/>
          <Route path='/customers' element={<CustomerListPage />}/>
          <Route path='/dashboardArticle' element={<DashboardArtikel width={0} />}/>
          <Route path='/tabs' element={<TabGroup />}/>
          <Route path='/protection' element={<SlivaProteksi width={width} />}/>
          <Route path='/promogajian' element={<PromoGajian width={0}/>}/>
          <Route path='/bookingdokter' element={<BookingDoctorPage/>}/>
          <Route path='/diskonspesial' element={<DiskonSpesial width={0}/>}/>
          <Route path='/dashboardads' element={<DashboardAds/>}/>
          <Route path='/schedulelist' element={<ScheduleListPage/>}/>
          <Route path='/unlimitedchatprotection' element={<UnlimitedChat width={0}/>}/>
          <Route path='/regulerprotection' element={<Reguler width={0}/>}/>
          <Route path='/plusprotection' element={<Plus width={0}/>}/>
          <Route path='/shop-home' element={<ShopHome width={width}/>}/>
          <Route path='/reseller' element={<ResellerDetailPage/>}/>
          <Route path='/dashboardadmin' element={<DashboardAdmin/>}/>
          <Route path='/dashboardadminseller' element={<DashboardAdminSeller/>}/>
        </Routes>
      </Provider>
    
    </ThemeProvider>
  );
};

export default App;
