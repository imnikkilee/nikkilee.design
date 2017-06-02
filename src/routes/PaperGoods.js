import React, {Component} from 'react';

// Components
import Container from '../components/Container';
import NavigationSimple from '../components/NavigationSimple';
import PortfolioNavigator from '../components/PortfolioNavigator';

// Images
import Wedding from '../images/portfolio/papergoods/wedding-invites.jpg';
import Shower from '../images/portfolio/papergoods/shower-invites.jpg';
import Lovely from '../images/portfolio/papergoods/lovely-cards.jpg';
import Spring from '../images/portfolio/papergoods/spring-card.jpg';
import Summer from '../images/portfolio/papergoods/summer-card.jpg';

// Styles
import './WorkPage.scss';

class PaperGoods extends Component {
  render() {
    return (
      <div className='WorkPage Bionic'>
        <NavigationSimple/>
        <Container size={'fullWidth'} className='headerContainerAlt'>
          <Container size={'maxWidth'}>
            <header>
              <h1>
                Paper Goods
              </h1>
            </header>
          </Container>
        </Container>
        <Container size={'fullWidth'}>
          <Container size={'maxWidth'}>
            <div className='Grid'>
              <div className='row'>
                <div className="col_10-12">
                  <h6>valentines</h6>
                  <img src={Lovely} />
                </div>
              </div>
              <div className='row alignBottom'>
                <div className="col_5-12">
                  <h6>spring & summer cards</h6>
                  <img src={Spring} />
                </div>
                <div className="col_5-12">
                  <img src={Summer} />
                </div>
                <div className="col_10-12">
                </div>
              </div>
              <div className='row'>
                <div className="col_10-12">
                  <h6>wedding invitation suite</h6>
                  <img src={Wedding} />
                </div>
              </div>
              <div className='row'>
                <div className="col_10-12">
                  <h6>shower invitation suite</h6>
                  <img src={Shower} />
                </div>
              </div>
            </div>
          </Container>
        </Container>
        <PortfolioNavigator prevLink="illustrations" nextLink="handlettering"/>
      </div>
    )
  }
}

export default PaperGoods
