import { Outlet } from "react-router";
import { AdminNav } from "./AdminNav";
import './Admin.css'
import styled from "styled-components";

const StyledButton = styled.div`
  background-color: beige;
  font-size: 32px;
  // color: white;
`;

const AdminLayout = () => (
    <StyledButton>
        <h3>the admin layout</h3>
        <hr></hr>
        <AdminNav/>
        <Outlet />
    </StyledButton>
  );


export default AdminLayout