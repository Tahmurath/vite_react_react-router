import { NavLink } from "react-router";

export function MainNav() {
  return (
    <nav>
      <NavLink to="/" end>Home</NavLink> | <NavLink to="/admin">Admin</NavLink>
      <br></br>
      <NavLink to="/about">About</NavLink> | <NavLink to="/contact">Contact</NavLink>
      
    </nav>
  );
}
