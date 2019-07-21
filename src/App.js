import React from 'react'
import useProducts from './hooks/useProducts'

import logo from './logo.svg'
import './App.css'

function App() {
  const [products, isLoading] = useProducts()

  return isLoading ? (
    <div>
      <img src={logo} className="App-logo" alt="logo" />
      LOADERING...
    </div>
  ) : (
    <section>
      {products.map(({ index, productName, price }) => (
        <div key={index}>
          {productName} {price}
        </div>
      ))}
    </section>
  )
}

export default App
