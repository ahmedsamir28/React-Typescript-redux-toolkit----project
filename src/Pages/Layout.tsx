import { Outlet } from "react-router-dom";
import NavBar from "../Layouts/NavBar";
import Footer from "../Layouts/Footer";

const RootLayout = () => {
  return (
    <div className="root-layout">
      <NavBar />
      <div className="container">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default RootLayout;
