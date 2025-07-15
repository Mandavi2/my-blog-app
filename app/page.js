
'use client'
import BlogList from "./Components/BlogList/BlogList";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";

export default function Home() {
  return (
    <>
    <Header/>
    <div className="main">
      <BlogList/>
    </div>
    <Footer/>
    </>
  );
}
