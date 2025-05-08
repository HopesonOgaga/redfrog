import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Header from "./components/navagation/nav";
import Lore from "./pages/lore";
import Croak from "./pages/croak";
import Fwog from "./pages/fwogroll";
import Main from "./pages/main";
import i18next from "i18next";
import LanguagesSelector from "./components/languageSelector";
import { I18nextProvider, useTranslation } from "react-i18next";

function App() {
  const { t } = useTranslation();
  // const { line1, line2 } = t("description");
  // console.log(description)
  return (
    <I18nextProvider i18n={i18next}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="nav" element={<Header></Header>}></Route>
          <Route path="lore" element={<Lore></Lore>}></Route>
          <Route path="croak" element={<Croak></Croak>}></Route>
          <Route path="/fwog" element={<Fwog></Fwog>}></Route>
          <Route path="main" element={<Main></Main>}></Route>
          <Route
            path="/lan"
            element={<LanguagesSelector></LanguagesSelector>}
          ></Route>
        </Routes>
      </BrowserRouter>
    </I18nextProvider>
  );
}

export default App;
