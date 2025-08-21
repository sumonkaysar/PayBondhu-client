import { Outlet } from "react-router";
import Footer from "./Footer";
import Navbar from "./Navbar";

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="grow-1">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
