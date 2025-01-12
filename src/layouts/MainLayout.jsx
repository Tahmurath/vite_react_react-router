import { Outlet } from "react-router";
import { MainNav } from "./MainNav";

// Layout Components
const MainLayout = () => (
    <div>
      <h3>the main layout</h3>
      <hr></hr>
      <MainNav/>
      <Outlet />
    </div>
  );

export default MainLayout