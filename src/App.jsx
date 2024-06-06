import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/layout/Footer/Footer";
import Navbar from "./components/layout/Navbar/Navbar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};
export default App;
