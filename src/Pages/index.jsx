import { Route } from "react-router";
import { Routes } from "react-router-dom";
import Footer from "../Components/User/Footer";
import Navbar from "../Components/User/Navbar";
import About from "./About";
import Blog from "./Blog";
import BlogDetails from "./BlogDetails";
import Contact from "./Contact";
import Home from "./Home";
import Services from "./Services";

export default function Index() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route Index element={<Home />}></Route>
        <Route path={"/about"} element={<About />}></Route>
        <Route path={"/blog"} element={<Blog />}></Route>
        <Route path={"/blog-details"} element={<BlogDetails />}></Route>
        <Route path={"/services"} element={<Services />}></Route>
        <Route path={"/contact"} element={<Contact />}></Route>
      </Routes>
      <Home />
      <Footer />
    </>
  );
}
