import "./App.css";
import HomePage from "./pages/HomePage";
import Artikel from "./pages/PageArtikel/PageArtikel";
import DetailArtikel from "./pages/DetailArtikel/DetailArtikel";
import GlobalCss from "./styles/Global";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/Theme";

const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalCss />
      <HomePage />
      <Artikel />
      <DetailArtikel />
    </ThemeProvider>
  );
};

export default App;
