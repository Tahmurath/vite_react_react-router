import { useState } from 'react'

function About() {
  const [count, setCount] = useState(0)

  return (
    <>
    
      <div>
        <h3>about page</h3>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
        </div>
      
      </div>
    </>
  )
}

export default About
