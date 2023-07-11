import React from 'react'
import HomePage from "./pages/HomePage";
import Artikel from "./pages/PageArtikel/PageArtikel";
import DetailArtikel from "./pages/DetailArtikel/DetailArtikel";
import GlobalCss from "./styles/Global";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/Theme";
import { useWindowDimensions } from './hooks/useWindowDimensions';
import Auth from './pages/Auth/Auth';
import TablePage from './pages/Example/TablePage';
import Invoice from './pages/InvoiceList/Invoice';

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
      <Invoice />
    </ThemeProvider>
  );
};

export default App;
