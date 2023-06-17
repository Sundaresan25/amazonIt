import { Route } from "react-router";
import { Routes } from "react-router-dom";
import Footer from "../Components/User/Footer";
import Navbar from "../Components/User/Navbar";
import About from "./About";
import { Career } from "./Career";
import Contact from "./Contact";
import Home from "./Home";
import Services from "./Services";

export default function Index() {
  return (
    <>
      <Navbar />
      {/* routes implementation */}
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path={"/about"} element={<About />}></Route>
        {/* <Route path={"/blog"} element={<Blog />}></Route>
        <Route path={"/blog-details"} element={<BlogDetails />}></Route> */}
        <Route path={"/services"} element={<Services />}></Route>
        <Route path={"/careers"} element={<Career />}></Route>
        <Route path={"/contact"} element={<Contact />}></Route>
      </Routes>
      <Footer />
    </>
  );
}
