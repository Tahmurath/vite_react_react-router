import { useState } from 'react'


function Home() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h3>Home page</h3>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
        </div>
      </div>
    </>
  )
}

export default Home
