import React from 'react'
import PropTypes from 'prop-types'

function Product({ name, price, image, isSale, isExclusive }) {
  return (
    <div>
      <img src={`/images/${image}`} alt={name} />
      {name}
      {price}
      {isSale && 'ON SALE!'}
      {isExclusive && 'EXCLUSSSIIIVVEE'}
    </div>
  )
}

Product.propTypes = {
  image: PropTypes.string,
  isExclusive: PropTypes.bool,
  isSale: PropTypes.bool,
  name: PropTypes.string,
  price: PropTypes.string,
}

export default Product
