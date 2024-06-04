import { Outlet } from "react-router-dom";
import NavBar from "../Utils/NavBar";

const RootLayout = () => {
  return (
    <div className="root-layout">
      <NavBar />
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
