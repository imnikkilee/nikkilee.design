import React, {Component} from 'react';
import {IndexLink, Link} from 'react-router';

// Components
import Container from './Container';

class NavigationSimple extends Component {
  render() {
    return (
      <Container size={'fullWidth'}>
        <Container size={'maxWidth'}>
          <nav>
            <IndexLink
              to='/'>
              portfolio
            </IndexLink>
            <Link
              to='/about'>
              about
            </Link>
          </nav>
        </Container>
      </Container>
    )
  }
}

export default NavigationSimple;
