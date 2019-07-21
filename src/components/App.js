import React, { useState } from 'react'
import styled from 'styled-components'
import useProducts from '../hooks/useProducts'

import Header from './Header'
import Product from './Product'

import sizes from '../styles/sizes'

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  @media (min-width: ${sizes.viewport4}) {
    width: 90%;
    margin: 20px auto;
  }
`

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
    <Container>
      <Header
        title="Women's tops"
        size={selectedSize}
        onSizeChange={handleSizeFilter}
      />
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
    </Container>
  )
}

export default App
