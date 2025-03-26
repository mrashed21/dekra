import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import { HelmetProvider } from "react-helmet-async";

const MainLayOut = () => {
  return (
    <>
    <HelmetProvider>
    <div className="font-nato">
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
      </div>
      </HelmetProvider>
    </>
  );
};

export default MainLayOut;
