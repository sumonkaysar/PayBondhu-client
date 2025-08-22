import Footer from "@/layouts/MainLayout/Footer";
import Navbar from "@/layouts/MainLayout/Navbar";
import { Outlet } from "react-router";

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
