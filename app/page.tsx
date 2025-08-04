import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Events from "./components/Events";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="max-w-[2000px] mx-auto overflow-x-hidden">
        <Navbar/>
        <Hero/>
        <Events/>
        <Footer/>
    </div>
  );
}
