import React from 'react'
import { Link } from 'react-router-dom'
import { Col, Row } from 'antd';

import 'antd/dist/antd.css';
const styles = {
  header: {
    backgroundColor: 'white',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'darkgrey',
    borderBottomStyle: 'solid',
    fontSize: 16
  },
  logo: {
    color: '#57BC90',
    fontWeight: 'bold',
    fontSize: 20
  },
  logoSubPart: {
    color: '#015249'
  }
}

// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
  <header>
    <Row type="flex" align="middle" justify="space-between" style={styles.header}>
      <Col style={styles.logo}>
        BOO<span style={styles.logoSubPart}>jhg</span>        
      </Col>
      <Row type="flex" gutter={32}>
        <Col><Link to='/'>Home</Link></Col>
        <Col><Link to='/roster'>Roster</Link></Col>
        <Link to='/schedule'>Schedule</Link>
      </Row>
    </Row>      
  </header>
)

export default Header
