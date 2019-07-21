import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import sizes from '../styles/sizes'

import Title from './Title'
import SizeFilter from './SizeFilter'

const Container = styled.header`
  background: #def2f3;
  padding: 10px 15px;
  margin-bottom: 10px;
  text-align: center;
  @media (min-width: ${sizes.viewport4}) {
    display: flex;
    justify-content: space-between;
    text-align: left;
  }
`

const Filter = styled(SizeFilter)`
  margin-top: 10px;
  @media (min-width: ${sizes.viewport4}) {
    margin-top: 0;
  }
`

const Header = ({ title, size, onSizeChange }) => (
  <Container>
    <Title>{title}</Title>
    <Filter size={size} onChange={onSizeChange} />
  </Container>
)

Header.propTypes = {
  size: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onSizeChange: PropTypes.func.isRequired,
}

export default Header
