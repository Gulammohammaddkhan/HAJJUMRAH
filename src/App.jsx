import React from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Home from "./Components/Home";
import Header from "./Components/Header";
import HajjPackages from "./Components/HajjPackages";
import UmrahPackages from "./Components/UmrahPackages";
import Ramadan from "./Components/Ramadan";
import Baghdad from "./Components/Baghdad";
import Contact from "./Components/Contact";
import Hero from "./Components/Hero";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Component from "./Components/CustomCard";
import Partners from "./Components/Partners";
import { partnersData } from "../data/Data";
import Footer from "./Components/Footer";
import { footerData } from "../data/Data";
import Help from "./Components/Help";

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hajjpackages" element={<HajjPackages />} />
        <Route path="/umrahpackages" element={<UmrahPackages />} />
        <Route path="/ramadan" element={<Ramadan />} />
        <Route path="/baghdad" element={<Baghdad />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Help />
      <Partners partnersData={partnersData} />
      <Footer footerData={footerData} />
    </Router>
  );
}

export default App;
