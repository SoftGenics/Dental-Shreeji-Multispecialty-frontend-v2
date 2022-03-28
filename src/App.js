import React from "react";
import Header from "./Components/Header/Header";
import NavbarMenu from "./Components/NavbarMenu/NavbarMenu";
import Home from "./Components/Pages/Home";
import ScrollToTop from "./Components/ScrollToTop"
import FloatingWhatsApp from "./Components/FloatingWhatsappButton/FloatingWhatsappButton";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
    <div>
      <BrowserRouter>
      <Header />
      <NavbarMenu />
      <ScrollToTop />
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </BrowserRouter>,
  <FloatingWhatsApp />
    </div>
  );
}

export default App;
