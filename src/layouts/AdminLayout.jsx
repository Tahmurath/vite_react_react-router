import { Outlet } from "react-router";
import { AdminNav } from "./AdminNav";

const AdminLayout = () => (
    <div>
        <h3>the admin layout</h3>
        <hr></hr>
        <AdminNav/>
        <Outlet />
    </div>
  );


export default AdminLayout