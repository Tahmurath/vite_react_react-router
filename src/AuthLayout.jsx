import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { NavLink } from "react-router";

function AuthLayout() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>AuthLayout</h1>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <NavLink to="/" end>
        Home
      </NavLink>
      </div>
    </>
  )
}

export default AuthLayout
