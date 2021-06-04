import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'

import AppContext from '../context/AppContext'
import breakpoints from '../templates/breakpoints'
import Navigation from './Navigation'

import 'genero-design-system/dist/gds/gds.css'
import './variables.css'
import './base.css'

// Load Web Components with GDS
import { defineCustomElements } from 'genero-design-system/loader'
defineCustomElements()


const Page = ({ children, title, location }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          # menuLinks {
          #   name
          #   link
          # }
        }
      }
    }
  `)

  console.log(data)
  return (
    <AppContext.Provider value={{
      location,
    }}>
      <PageContainer>
        <Helmet title={title ? `${title} | ${data.site.siteMetadata.title}` : data.site.siteMetadata.title} />
        <Navigation />
        { children }
      </PageContainer>
    </AppContext.Provider>
  )
}

export default Page

const PageContainer = styled.div`
  @media ${breakpoints.device.mobileAndTablet} {
    .gds-navigation-hamburger {
      display: flex;
      align-items: center;
    }
  }
`
