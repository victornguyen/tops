import React from 'react'
import PropTypes from 'prop-types'

const SizeFilter = ({ size, onChange, ...rest }) => (
  <select value={size} onChange={onChange} {...rest}>
    <option value="">Filter by size</option>
    <option value="XS">XS</option>
    <option value="S">S</option>
    <option value="M">M</option>
    <option value="L">L</option>
    <option value="XL">XL</option>
  </select>
)

SizeFilter.propTypes = {
  size: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default SizeFilter
