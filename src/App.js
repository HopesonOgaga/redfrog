import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Header from "./components/navagation/nav";
import Lore from "./pages/lore";
import Croak from "./pages/croak";
import Fwog from "./pages/fwogroll";
import Main from "./pages/main";


function App() {
  return (
    <BrowserRouter>
      <Routes >
         <Route path ="/" element = {<Home></Home>}></Route>
         <Route path="nav" element={<Header></Header>}></Route>
         <Route path="lore" element={<Lore></Lore>}></Route>
         <Route path="croak" element={<Croak></Croak>}></Route>
         <Route path="/fwog" element={<Fwog></Fwog>}></Route>
         <Route path="main" element={<Main></Main>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
