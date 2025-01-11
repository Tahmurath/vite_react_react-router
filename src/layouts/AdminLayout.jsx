import { NavLink } from "react-router";
import { MyAppNav } from "../nav";
import { Outlet } from "react-router";

const AdminLayout = ({ children }) => (
    <div>
        <h1>the admin layout</h1>
        <MyAppNav/>
        
      {/* <nav>
        <NavLink to="/admin/dashboard">Dashboard</NavLink>
        <NavLink to="/admin/settings">Settings</NavLink>
      </nav> */}
      <Outlet />
    </div>
  );


export default AdminLayout