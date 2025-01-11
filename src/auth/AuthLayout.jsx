import { useState } from 'react'
import './AuthLayout.css'
import { NavLink } from "react-router";
import { MyAppNav } from '../nav';

function AuthLayout() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>auth page</h1>
        <button>sdfsfsd</button>
      </div>
    </>
  )
}

export default AuthLayout
