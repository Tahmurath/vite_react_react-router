import { NavLink } from "react-router";

export function MainNav() {
  return (
    <nav>
      <NavLink to="/" end>Home</NavLink>
      <br></br>
      <NavLink to="/about">About</NavLink>
      <br></br>
      <NavLink to="/admin/dashboard">Admin</NavLink>
      <br></br>
    </nav>
  );
}
