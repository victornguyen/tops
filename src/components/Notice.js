import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Container = styled.div`
  padding: 1em;
  color: #856404;
  background: #fff3cd;
  border: 1px solid #e1e1e1;
  border-bottom: 0;
`

const Notice = ({ children, ...rest }) => (
  <Container {...rest}>
    <span role="img" aria-label="Scream">
      😱
    </span>{' '}
    {children}
  </Container>
)

Notice.propTypes = {
  children: PropTypes.node,
}

export default Notice
