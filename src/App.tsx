import React from 'react'
import HomePage from "./pages/HomePage";
import Artikel from "./pages/PageArtikel/PageArtikel";
import DetailArtikel from "./pages/DetailArtikel/DetailArtikel";
import GlobalCss from "./styles/Global";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/Theme";
import Auth from './pages/Auth/Auth';
import DetailDokter from './pages/DetailDokter/DetailDokter';
import DetailLayananKlinik from './pages/DetailLayananKlinik/DetailLayananKlinik';
import TanyaDokter from './pages/TanyaDokter/TanyaDokter';
import SlivaProteksi from './pages/SlivaProteksi/SlivaProteksi';

const App = () => {
  const [dimension, setDimension] = React.useState({
    width: window.innerWidth,
    height: window.innerHeight
  })

  const resize = () => {
    setDimension({
      width: window.innerWidth,
      height: window.innerHeight
    })
  }

  React.useEffect(() => {
    window.addEventListener('resize', resize)

    return () => {
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalCss />
      {/* <Auth /> */}
      <HomePage width={dimension.width} />
      <Artikel />
      <DetailArtikel />
      <DetailDokter/>
      <DetailLayananKlinik/>
      <TanyaDokter/>
      <SlivaProteksi/>
    </ThemeProvider>
  );
};

export default App;
