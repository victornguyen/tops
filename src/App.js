import React, { useState } from 'react'
import useProducts from './hooks/useProducts'
import SizeFilter from './SizeFilter'

import logo from './logo.svg'
import './App.css'

function App() {
  const [products, isLoading] = useProducts()
  const [selectedSize, setSize] = useState('')

  // Size filter change handler
  const handleSizeFilter = event => {
    setSize(event.target.value)
  }

  // Filter products by size if one is selected
  const filteredProducts = selectedSize
    ? products.filter(({ size }) => size.includes(selectedSize))
    : products

  return isLoading ? (
    <div>
      <img src={logo} className="App-logo" alt="logo" />
      LOADERING...
    </div>
  ) : (
    <div>
      <header>
        Women&rsquo;s tops
        <SizeFilter size={selectedSize} onChange={handleSizeFilter} />
      </header>
      <main>
        {filteredProducts.map(({ index, productName, price }) => (
          <div key={index}>
            {productName} {price}
          </div>
        ))}
      </main>
    </div>
  )
}

export default App
