import React from 'react'
import "./home.css";

export default function Home() {
  return (
    <div>
      <h1>My Page</h1>
      <div>
        <button>Setting</button>
        <button>Buy</button>
        <button style={{ backgroundColor: 'blue' }}>Seller</button>
      </div>
    </div>
  )
}

