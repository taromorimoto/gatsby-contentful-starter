import React from 'react'
import styled from 'styled-components'

class Layout extends React.Component {
  render() {
    const { children } = this.props

    return (
      <Component>
        {children}
      </Component>
    )
  }
}

const Component = styled.main`
  max-width: 768px;
  margin: 0 auto;
  padding: var(--gds-spacing-l) var(--gds-spacing-s);
`

export default Layout
