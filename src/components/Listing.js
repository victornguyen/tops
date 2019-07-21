import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import sizes from '../styles/sizes'

import Product from './Product'

const List = styled.main`
  display: flex;
  flex-wrap: wrap;
  border-top: 1px solid #e1e1e1;
  border-left: 1px solid #e1e1e1;
`

const Item = styled(Product)`
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

const Listing = ({ products }) => (
  <List>
    {products.map(product => (
      <Item
        key={product.index}
        name={product.productName}
        price={product.price}
        image={product.productImage}
        isSale={product.isSale}
        isExclusive={product.isExclusive}
      />
    ))}
  </List>
)

Listing.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      index: PropTypes.number,
      isExclusive: PropTypes.bool,
      isSale: PropTypes.bool,
      price: PropTypes.string,
      productImage: PropTypes.string,
      productName: PropTypes.string,
    })
  ),
}

export default Listing
