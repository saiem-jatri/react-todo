import { Outlet } from "react-router-dom";
import AppNav from "../components/AppNav";


const Rootlayout = () => {
  return (
    <div>
       <AppNav />
       <Outlet/>
    </div>
  );
};

export default Rootlayout;