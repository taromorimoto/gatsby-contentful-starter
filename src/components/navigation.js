import React from 'react'
import { Link } from "gatsby"
import styled from 'styled-components'
import { GdsNavigation, GdsMenu } from 'genero-design-system/react'

import breakpoints from '../templates/breakpoints'
import { useLocation } from '../context/AppContext'

const Navigation = () => {
  const location = useLocation()
  console.log('location', location)

  return (
    <NavigationContainer role="navigation">
      <GdsNavigation>
        <a slot="logo" href="/" aria-label="Genero frontpage" rel="home">
          <Logo src="/images/logo.svg" alt="Genero Logo" width="159" height="48" />
        </a>
        <div slot="menu">
          <GdsMenu key="123">
            <gds-menu-item-nested slot="item" submenu-icon="❯">
              <a slot="link" href="#first">
                <gds-menu-item>Services</gds-menu-item>
              </a>
              <gds-submenu slot="submenu">
                <a slot="submenu-item" href="#first-submenu">
                  <gds-menu-item>Growth</gds-menu-item>
                </a>
                <a slot="submenu-item" href="#second-submenu">
                  <gds-menu-item>Design</gds-menu-item>
                </a>
                <a slot="submenu-item" href="#second-submenu">
                  <gds-menu-item>Tech</gds-menu-item>
                </a>
              </gds-submenu>
            </gds-menu-item-nested>
            <Link slot="item" to="/articles/">
              <gds-menu-item active={location.pathname === '/articles/' ? 'true' : undefined}>Articles</gds-menu-item>
            </Link>
            <Link slot="item" to="/article/hello-world">
              <gds-menu-item>Hello World</gds-menu-item>
            </Link>
            <a slot="item" href="#4">
              <gds-menu-item>Contact</gds-menu-item>
            </a>
          </GdsMenu>
        </div>
        <div slot="search">
          <gds-search-form collapsed action="https://www.google.com" query="q"></gds-search-form>
        </div>
        <div slot="desktop-extensions">
          <div aria-label="Language menu">
            <GdsMenu key="321">
              <a slot="item" href="#fi" aria-label="Finnish">
                <gds-menu-item>FI</gds-menu-item>
              </a>
              <a slot="item" href="#se" aria-label="Swedish">
                <gds-menu-item>SE</gds-menu-item>
              </a>
              <a slot="item" href="#en" aria-label="English">
                <gds-menu-item>EN</gds-menu-item>
              </a>
            </GdsMenu>
          </div>
        </div>
        <div slot="mobile-extensions">
          <div aria-label="Language menu">
            <GdsMenu key="321">
              <a slot="item" href="#fi">
                <gds-menu-item>Finnish</gds-menu-item>
              </a>
              <a slot="item" href="#se">
                <gds-menu-item>Sverge</gds-menu-item>
              </a>
              <a slot="item" href="#en">
                <gds-menu-item>English</gds-menu-item>
              </a>
            </GdsMenu>
          </div>
        </div>
      </GdsNavigation>
    </NavigationContainer>
  )
}

export default Navigation

const NavigationContainer = styled.nav`
  position: relative;
  z-index: 100;
  min-height: 100px;
  @media ${breakpoints.device.mobileAndTablet} {
    min-height: 70px;
  }
`

const Logo = styled.img`
  @media ${breakpoints.device.mobileAndTablet} {
    height: 32px;
  }
`