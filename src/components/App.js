import React, { useState } from 'react'
import styled from 'styled-components'
import useProducts from '../hooks/useProducts'
import sizes from '../styles/sizes'

import Header from './Header'
import Product from './Product'

const Container = styled.div`
  width: 100%;
  max-width: 1300px;
  @media (min-width: ${sizes.viewport4}) {
    width: 90%;
    margin: 20px auto;
  }
`

const ProductList = styled.main`
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
  border-top: 1px solid #e1e1e1;
  border-left: 1px solid #e1e1e1;
`

const ProductItem = styled(Product)`
  width: 100%;
  @media (min-width: ${sizes.viewport4}) {
    width: 50%;
  }
  @media (min-width: ${sizes.viewport9}) {
    width: calc(100% / 3);
  }
  @media (min-width: ${sizes.viewport12}) {
    width: 25%;
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
        title="Women&rsquo;s tops"
        size={selectedSize}
        onSizeChange={handleSizeFilter}
      />
      <ProductList>
        {filteredProducts.map(product => (
          <ProductItem
            key={product.index}
            name={product.productName}
            price={product.price}
            image={product.productImage}
            isSale={product.isSale}
            isExclusive={product.isExclusive}
          />
        ))}
      </ProductList>
    </Container>
  )
}

export default App
