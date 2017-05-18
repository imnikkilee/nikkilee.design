import React, {Component} from 'react';
import {IndexLink, Link} from 'react-router';

// Components
import Container from './Container';

// Styles
import './NavigationHeader.scss';

class NavigationHeader extends Component {
  render() {
    return (
      <Container size={'fullWidth'} className='NavigationHeader'>
        <Container size={'maxWidth'}>
          <header>
            <nav>
              <h1>
                <Link
                  className='link-one'
                  to='/about'>
                  nikki lee
                </Link>
                &nbsp;is a&nbsp;
                <span className='strike-one'>
                  designer
                </span>
                &nbsp;
                <span className='strike-two'>
                  artist
                </span>
                <br/>
                human who likes to&nbsp;
                <IndexLink
                  className='link-two'
                  to='/'>
                  make stuff
                </IndexLink>
              </h1>
            </nav>
          </header>
        </Container>
      </Container>
    )
  }
}

export default NavigationHeader;
