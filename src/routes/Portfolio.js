import React, {Component} from 'react';

// Components
import {Link} from 'react-router';
import Container from '../components/Container';
import NavigationHeader from '../components/NavigationHeader';

// Images
import ThumbGW from '../images/portfolio/thumb-gw.png';
import ThumbJukely from '../images/portfolio/thumb-jukely.png';
import ThumbBP from '../images/portfolio/thumb-bp.png';
import ThumbBionic from '../images/portfolio/thumb-bionic.png';

// Styles
import './Portfolio.scss';

class Portfolio extends Component {
  render() {
    return (
      <div className='Portfolio'>
        <NavigationHeader/>
        <Container size={'fullWidth'} className='webStuffContainer'>
          <Container size={'maxWidth'}>
            <h2>
              web stuff
            </h2>
            <div className='webStuffThumbs'>
              <Link to='/portfolio/thegroundwork' className='webStuffThumb gw'>
                <img src={ThumbGW} />
                <h3>The Groundwork</h3>
              </Link>
              <Link to='/portfolio/jukely' className='webStuffThumb jukely'>
                <img src={ThumbJukely} />
                <h3>Jukely</h3>
              </Link>
              <Link to='/portfolio/beatport' className='webStuffThumb bp'>
                <img src={ThumbBP} />
                <h3>Beatport Pro</h3>
              </Link>
              <Link to='/portfolio/bionic' className='webStuffThumb bionic'>
                <img src={ThumbBionic} />
                <h3>Bionic</h3>
              </Link>
            </div>
          </Container>
        </Container>
        <Container size={'fullWidth'} className='otherStuffContainer'>
          <Container size={'maxWidth'}>
            <h2>
              other stuff
            </h2>
            <div className='otherStuffThumbs'>
              <div className='otherStuffThumb'>
                <h3>paper goods</h3>
              </div>
              <div className='otherStuffThumb'>
                <h3>illustrations</h3>
              </div>
              <div className='otherStuffThumb'>
                <h3>hand-lettering</h3>
              </div>
              <div className='otherStuffThumb'>
                <h3>misc.</h3>
              </div>
            </div>
          </Container>
        </Container>
      </div>
    )
  }
}

export default Portfolio;
