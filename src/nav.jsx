import { NavLink } from "react-router";

export function MyAppNav() {
  return (
    <nav>
      <NavLink to="/" end>
        Home
      </NavLink>
      <br></br>
      <NavLink to="/home">auth</NavLink>
      <br></br>
      <NavLink to="/about">Account</NavLink>
      <br></br>
      <NavLink to="/admin/dashboard">dashboard</NavLink>
    </nav>
  );
}
