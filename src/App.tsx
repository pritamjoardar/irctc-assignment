import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Error from "./components/Error";
import Login from './components/Login'
import BookingDetails from "./components/BookingDetails";

const App = () => {
  return (
    <BrowserRouter>
          <Navbar/>
      <Routes>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/booking-details" element={<BookingDetails/>} />
          <Route path="*" element={<Error/>} />
      </Routes>
<Footer/>
    </BrowserRouter>
  );
};

export default App;
