import { NavLink } from "react-router";

export function AdminNav() {
  return (
    <nav>
      <NavLink to="/" end>Home</NavLink>
      <br></br>
      <NavLink to="/admin/dashboard">Dashboard</NavLink>
      <br></br>
      <NavLink to="/admin/panel">Panel</NavLink>
      <br></br>
    </nav>
  );
}
