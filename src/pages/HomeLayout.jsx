import { Outlet } from "react-router-dom";
import { Navbar } from "../Components";

const HomeLayout = () => {
  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <Outlet />
    </>
  );
};
export default HomeLayout;
