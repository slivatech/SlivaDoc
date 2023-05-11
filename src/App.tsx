import React from "react";
// import HomePage from "./pages/HomePage";
// import Artikel from "./pages/PageArtikel/PageArtikel";
// import DetailArtikel from "./pages/DetailArtikel/DetailArtikel";
// import GlobalCss from "./styles/Global";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/Theme";
// import Auth from "./pages/Auth/Auth";
// import DetailKlinik from "./pages/DetailKlinik/DetailKlinik";
// import TablePage from "./pages/Example/TablePage";
// import CustomerListPage from "./pages/CustomerList/CustomerListPage";
// import BookingDoctorPage from "./pages/BookingDoctor/BookingDoctorPage";
import BookingPetHospitalPage from "./pages/BookingPetHospital/BookingPetHospitalPage";
import store from "./store/store";
import { Provider } from "react-redux";

const App = () => {
  // const {width} = useWindowDimensions()

  return (
    <Provider store={store}>
      <ThemeProvider theme={defaultTheme}>
        {/* <GlobalCss />
      <Auth />
      <HomePage width={dimension.width} />
      <Artikel />
      <DetailArtikel />
      <DetailKlinik />
      <CustomerListPage />
      <TablePage /> */}
        {/* <BookingDoctorPage /> */}
        <BookingPetHospitalPage />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
