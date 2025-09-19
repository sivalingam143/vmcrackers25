import "./App.css";
import "./pages/design.css";
import "es6-promise/auto";
import "intersection-observer";
import "./pages/Pages.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from "./pages/Products";
import ContactUs from "./pages/ContactUs";
import { SafetyTipsTwo } from "./pages/SafetyTips";
import OrderPreview from "./pages/OrderPreview";
import Billpreview from "./pdf/Billpreview";
import SiteOff from "./pages/SiteOff";
import Home from "./pages/Home";
import About from "./pages/About";
import ScrollToTop from "./pages/components/scrollTotop";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop/>
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/safetytips" element={<SafetyTipsTwo />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/orderpreview" element={<OrderPreview />} />
          <Route path="/nopage" element={<Billpreview />} />
          <Route path="/siteoff" element={<SiteOff />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
