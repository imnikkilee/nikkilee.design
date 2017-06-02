import React, {Component} from 'react';
import {IndexLink, Link} from 'react-router';
import ScrollToTop from 'react-scroll-up';

// Components
import Container from './Container';

// Styles
import './PortfolioNavigator.scss';

class PortfolioNavigator extends Component {

  render() {

    const {
      prevLink,
      nextLink
    } = this.props;

    return (
      <Container size={'fullWidth'} className='PortfolioNavigator'>
        <Container size={'maxWidth'} className="innerContainer">
          <div className="nextPrevContainer">
            <a href={`/portfolio/${prevLink}`} className="prevLink">
              <svg className="arrowIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                <polygon points="23.58 0.11 29.27 5.74 13.01 22.17 49.42 22.17 49.42 30.17 13.83 30.17 29.1 43.95 23.74 49.89 0.74 29.14 0.58 23.36 23.58 0.11"/>
              </svg>
            </a>
            <a href={`/portfolio/${nextLink}`} className="nextLink">
              <svg className="arrowIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                <polygon points="26.42 0.11 20.73 5.74 36.99 22.17 0.58 22.17 0.58 30.17 36.17 30.17 20.9 43.95 26.26 49.89 49.26 29.14 49.42 23.36 26.42 0.11"/>
              </svg>
            </a>
          </div>
          <ScrollToTop
            showUnder={200}
            style={{
              transitionDuration: '0.25s',
              transitionTimingFunction: 'ease-in-out',
              transitionDelay: '0s'
            }}>
            <a className="topLink">
              <svg className="arrowIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                <polygon points="49.89 23.58 44.27 29.27 27.83 13.01 27.83 49.42 19.83 49.42 19.83 13.83 6.05 29.1 0.11 23.74 20.86 0.74 26.64 0.58 49.89 23.58"/>
              </svg>
            </a>
          </ScrollToTop>
        </Container>
      </Container>
    )
  }
}

export default PortfolioNavigator;
