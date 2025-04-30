import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Header from "./components/navagation/nav";
import Lore from "./pages/lore";


function App() {
  return (
    <BrowserRouter>
      <Routes >
         <Route path ="/" element = {<Home></Home>}></Route>
         <Route path="nav" element={<Header></Header>}></Route>
         <Route path="lore" element={<Lore></Lore>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
