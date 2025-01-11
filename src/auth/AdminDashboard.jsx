import { useState } from 'react'
import './AuthLayout.css'
import { NavLink } from "react-router";
import { MyAppNav } from '../nav';

function About() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>admin dashboard page</h1>
      </div>
    </>
  )
}

export default About
