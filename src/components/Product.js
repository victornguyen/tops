import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import sizes from '../styles/sizes'

const Container = styled.div`
  color: #333;
  border-right: 1px solid #e1e1e1;
  border-bottom: 1px solid #e1e1e1;
  padding: 10px;
`

const Image = styled.img`
  display: block;
  margin: 0 auto;
  width: calc(80% + 4vw);
  max-width: 280px;
`

const Details = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  font-weight: bold;
`

const Name = styled.div`
  font-size: calc(12px + 1vw);
  @media (min-width: ${sizes.viewport12}) {
    font-size: 24px;
  }
`

const Price = styled.div`
  font-size: calc(24px + 1vw);
  margin-left: 10px;
  @media (min-width: ${sizes.viewport12}) {
    font-size: 36px;
  }
`

const FlagContainer = styled.div`
  height: 3.2em;
  font-size: 12px;
  @media (min-width: ${sizes.viewport9}) {
    font-size: 14px;
  }
  @media (min-width: ${sizes.viewport12}) {
    font-size: 16px;
  }
`

const Flag = styled.div`
  display: inline-block;
  color: #fff;
  padding: 0.8em 1.5em;
  margin-right: 10px;
  ${props => props.isSale && `background: #ca3538;`}
  ${props => props.isExclusive && `background: #149718;`}
`

const Product = ({ name, price, image, isSale, isExclusive, ...rest }) => (
  <Container {...rest}>
    <Image src={`/images/${image}`} alt={name} />
    <FlagContainer>
      {isSale && <Flag isSale>Sale</Flag>}
      {isExclusive && <Flag isExclusive>Exclusive</Flag>}
    </FlagContainer>
    <Details>
      <Name>{name}</Name>
      <Price>{price}</Price>
    </Details>
  </Container>
)

Product.propTypes = {
  image: PropTypes.string,
  isExclusive: PropTypes.bool,
  isSale: PropTypes.bool,
  name: PropTypes.string,
  price: PropTypes.string,
}

export default Product
