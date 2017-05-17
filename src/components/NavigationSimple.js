import React, {Component} from 'react';
import {IndexLink, Link} from 'react-router';

// Components
import Container from './Container';

// Styles
import './NavigationSimple.scss';

class NavigationSimple extends Component {
  render() {
    return (
      <Container size={'fullWidth'} className='NavigationSimple'>
        <Container size={'maxWidth'}>
          <nav>
            <IndexLink
              to='/'
              className='logoLink'>
              nikki lee
            </IndexLink>
            <div className='otherLinks'>
              <IndexLink
                to='/'>
                portfolio
              </IndexLink>
              <Link
                to='/about'>
                about
              </Link>
            </div>
          </nav>
        </Container>
      </Container>
    )
  }
}

export default NavigationSimple;
