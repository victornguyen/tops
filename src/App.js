import React, { useState } from 'react'
import useProducts from './hooks/useProducts'
import SizeFilter from './SizeFilter'
import Product from './Product'

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
    <div>LOADERING...</div>
  ) : (
    <div>
      <header>
        Women&rsquo;s tops
        <SizeFilter size={selectedSize} onChange={handleSizeFilter} />
      </header>
      <main>
        {filteredProducts.map(product => (
          <Product
            key={product.index}
            name={product.productName}
            price={product.price}
            image={product.productImage}
            isSale={product.isSale}
            isExclusive={product.isExclusive}
          />
        ))}
      </main>
    </div>
  )
}

export default App
