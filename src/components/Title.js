import styled from 'styled-components'
import sizes from '../styles/sizes'

export default styled.h1`
  font-size: calc(16px + 2vw);
  color: #333;
  margin: 0;
  @media (min-width: ${sizes.viewport9}) {
    font-size: 36px;
  }
`
