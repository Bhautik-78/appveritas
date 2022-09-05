import "./App.css";
import Navbar from "./Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home/Home";
import Soultions from "./Soultions/Soultions";

import Mobile from "./Soultions/Mobile/Mobile";

import UserGrowth from "./Soultions/UserGrowth/UserGrowth";

import Revenuces from "./Soultions/Revenuces/Revenuces";
import Manged from "./Soultions/Manged/Manged";
import Blog from "./Resources/Blog/Blog";
import Adx from "./Resources/Blog/Adx/Adx";
import Admob from "./Resources/Blog/Adx/Admob";
import AppG from "./Resources/Blog/Appgrowth/AppG";
import Gudies from "./Resources/Gudies/Gudies";
import Footer from "./Footer/Footer";
import Success from "./Resources/Success/Success";
import About from "./Company/About/About";
import Contact from "./Company/Contect/Contact";
import Join from "./Company/Join Us/Join";
import Setup from "./Setuodemo/Setup";
import AppGrowth from "./Resources/Blog/Adx/AppGrowth";
import AppM from "./Resources/Blog/Adx/AppM";
import AdR from "./Resources/Blog/Adx/AdR";
import Ad from "./Resources/Success/Ad";
import User from "./Resources/Success/User";



function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/solutions" element={<Soultions />}></Route>
          <Route exact path="/Mobile" element={<Mobile />}></Route>
          <Route exact path="/User" element={<UserGrowth />}></Route>
          <Route exact path="/Revenuces" element={<Revenuces />}></Route>
          <Route exact path="/Manged" element={<Manged />}></Route>
          <Route exact path="/Blog" element={<Blog />}></Route>
          <Route exact path="/Adx" element={<Adx />}></Route>
          <Route exact path="/AppGrowth" element={<AppGrowth />}></Route>
          <Route exact path="/AppM" element={<AppM />}></Route>
          <Route exact path="/AdR" element={<AdR />}></Route>
          <Route exact path="/Admob" element={<Admob />}></Route>
          <Route exact path="/AppG" element={<AppG />}></Route>
          <Route exact path="/Gudies" element={<Gudies />}></Route>
          <Route exact path="/Success" element={<Success />}></Route>
          <Route exact path="/About" element={<About />}></Route>
          <Route exact path="/Contact" element={<Contact />}></Route>
          <Route exact path="/Join" element={<Join />}></Route>
          <Route exact path="/Setup" element={<Setup />}></Route>
          <Route exact path="/Success" element={<Success />}></Route>
          <Route exact path="/Ad" element={<Ad />}></Route>
          <Route exact path="/Users" element={<User />}></Route>



        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
