import { useState } from 'react'
import './AuthLayout.css'
import { NavLink } from "react-router";
import { MyAppNav } from '../nav';

function About() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>about page</h1>
        <div>
        <button>sdfsfsd</button>
      </div>
      </div>
    </>
  )
}

export default About
