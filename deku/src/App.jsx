import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import DonationForm from "./components/DonationForm";
import Landing from "./components/Landing";
import AboutUs from "./components/Home/AboutUs";
import Services from "./components/Home/Services";
import Action from "./components/Home/Action";
import ThankYou from "./components/Home/ThankYou";
import Footer from "./components/Home/Footer";
import Navbar from "./components/Home/Navbar";
import Products from "./components/Products";



export default function App() {
  const newLocal = "/getproducts";
  return (
    <>
    <Navbar/>
      <Routes>

        <Route path="/" element={<Landing />} />
        <Route path="/aboutus" element={ <AboutUs/>} />
        <Route path="/services" element={ <Services/>} />
        <Route path="" element={ <Action/>} />
        <Route path="" element={ <ThankYou/>} />
        <Route path="" element={ <Footer/>} />
        {/* <Hero />
          <AboutUs />
          <Services />
          <Action />
          <ThankYou />
          <Footer /> */}

        <Route path="/DonationForm" element={<DonationForm />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/getproducts" element={<Products/>} />
      </Routes>

    </>
  );
}
