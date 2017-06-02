import React, {Component} from 'react';

// Components
import Container from '../components/Container';
import NavigationSimple from '../components/NavigationSimple';
import PortfolioNavigator from '../components/PortfolioNavigator';

// Images
import Embroidery from '../images/portfolio/misc/embroidery.jpg';

// Styles
import './WorkPage.scss';

class Illustrations extends Component {
  render() {
    return (
      <div className='WorkPage Bionic'>
        <NavigationSimple/>
        <Container size={'fullWidth'} className='headerContainerAlt'>
          <Container size={'maxWidth'}>
            <header>
              <h1>
                Misc.
              </h1>
            </header>
          </Container>
        </Container>
        <Container size={'fullWidth'}>
          <Container size={'maxWidth'}>
            <div className='Grid'>
              <div className='row'>
                <div className="col_10-12">
                  <h6>Embroidery</h6>
                  <img src={Embroidery} />
                  <small>Lately I've been exploring embroidery as a medium. I enjoy transforming my hand-lettering into embroidered pieces as well as creating new, unique drawings specifically for this medium.</small>
                </div>
              </div>
            </div>
          </Container>
        </Container>
        <PortfolioNavigator prevLink="handlettering" nextLink="thegroundwork"/>
      </div>
    )
  }
}

export default Illustrations
