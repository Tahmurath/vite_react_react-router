import { Outlet } from "react-router";
import { MainNav } from "./MainNav";
import './Main.css'
import styled from "styled-components";


const StyledButton = styled.div`
  background-color: azure;
  font-size: 32px;
  // color: white;
`;

// Layout Components
const MainLayout = () => (
    <StyledButton>
      <h3>the main layout</h3>
      <hr></hr>
      <MainNav/>
      <Outlet />
    </StyledButton>
  );

export default MainLayout