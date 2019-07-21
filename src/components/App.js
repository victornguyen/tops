import React, { useState } from 'react'
import styled from 'styled-components'
import sizes from '../styles/sizes'
import useProducts from '../hooks/useProducts'

import Header from './Header'
import Listing from './Listing'
import Loading from './Loading'

const Container = styled.div`
  width: 100%;
  max-width: 1300px;
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

  return (
    <Container>
      <Header
        title="Women&rsquo;s tops"
        size={selectedSize}
        onSizeChange={handleSizeFilter}
      />
      {isLoading ? <Loading /> : <Listing products={filteredProducts} />}
    </Container>
  )
}

export default App
