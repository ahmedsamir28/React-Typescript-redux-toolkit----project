import { Outlet } from "react-router-dom";
import NavBar from "../Utils/NavBar";
import Footer from "../Utils/Footer";

const RootLayout = () => {
  return (
    <div className="root-layout">
      <NavBar />
      <div className="container">
        <Outlet />
      </div>
      <Footer/>
    </div>
  );
};

export default RootLayout;
