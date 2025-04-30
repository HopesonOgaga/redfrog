import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Header from "./components/navagation/nav";


function App() {
  return (
    <BrowserRouter>
      <Routes >
         <Route path ="/" element = {<Home></Home>}></Route>
         <Route path="nav" element={<Header></Header>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
