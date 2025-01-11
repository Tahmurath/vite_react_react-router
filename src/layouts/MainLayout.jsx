import { NavLink } from "react-router";
import { MyAppNav } from "../nav";
import { Outlet } from "react-router";

// Layout Components
const MainLayout = ({ children }) => (
    <div>
      <h1>the main layout</h1>
      <MyAppNav/>
      {/* <nav>
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav> */}
      <Outlet />
      {/* <main>{children}</main> */}
    </div>
  );

export default MainLayout