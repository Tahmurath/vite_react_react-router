import { NavLink } from "react-router";

export function AdminNav() {
  return (
    <nav>
      <NavLink to="/" end>Home</NavLink> | <NavLink to="/admin" end>Admin</NavLink>
      <br></br>
      <NavLink to="/admin/dashboard">Dashboard</NavLink> | <NavLink to="/admin/panel">Panel</NavLink>
    </nav>
  );
}
