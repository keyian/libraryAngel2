import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import {Helmet} from 'react-helmet'
import favicon from '../../static/favicon.ico'

class Layout extends React.Component {
  render() {
    const { title, children } = this.props
    let header

      header = (
        <h1
          style={{
            marginTop: 0,
          }}
        >
        <Helmet>
          <link rel="icon" href={favicon} />
        </Helmet>
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h1>
      )

    return (
      <Wrapper>
        <div
          style={{
            marginLeft: `auto`,
            marginRight: `auto`,
          }}
        >
          <header>{header}</header>
          <main>{children}</main>
        </div>
        <Footer>
          © {new Date().getFullYear()}, Library Angel, Inc.
        </Footer>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  min-height: 100vh;
`

const Footer = styled.footer`
  text-align: center;
  margin: 24px;
`

export default Layout
