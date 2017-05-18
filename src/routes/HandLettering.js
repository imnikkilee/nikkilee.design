import React, {Component} from 'react';

// Components
import Container from '../components/Container';
import NavigationSimple from '../components/NavigationSimple';

// Images
import Katie from '../images/portfolio/handlettering/katie.png';
import PWL from '../images/portfolio/handlettering/pwl.png';
import Lovely from '../images/portfolio/handlettering/lovely.png';
import Best from '../images/portfolio/handlettering/best.png';
import Sweet from '../images/portfolio/handlettering/sweet.png';


// Styles
import './WorkPage.scss';

class Illustrations extends Component {
  render() {
    return (
      <div className='WorkPage'>
        <NavigationSimple/>
        <Container size={'fullWidth'} className='headerContainerAlt'>
          <Container size={'maxWidth'}>
            <header>
              <h1>
                Hand Lettering
              </h1>
            </header>
          </Container>
        </Container>
        <Container size={'fullWidth'}>
          <Container size={'maxWidth'}>
            <div className='Grid'>
              <div className='row alignBottom halfMargin'>
                <div className="col_1-2">
                  <h6>valentines messages</h6>
                  <img src={Sweet} className='outline padding'/>
                </div>
                <div className="col_1-2">
                  <img src={Best} className='outline padding'/>
                </div>
              </div>
              <div className='row'>
                <div className="col_1-2">
                  <img src={Lovely} className='outline padding'/>
                </div>
                <div className="col_12-12">
                  <small>a series of hand-lettered greetings for a Valentine's Day themed project</small>
                </div>
              </div>
              <div className='row'>
                <div className="col_8-12">
                  <h6>Made by Katie L. Cole</h6>
                  <img src={Katie} className='outline padding'/>
                </div>
                <div className="col_8-12">
                  <small>a hand-lettered logo for a line of children's clothes</small>
                </div>
              </div>
              <div className='row'>
                <div className="col_8-12">
                  <h6>Papers We Love Conf.</h6>
                  <img src={PWL} className='outline padding'/>
                </div>
                <div className="col_8-12">
                  <small>hand-lettering for the Papers We Love Conference 2017 website</small>
                </div>
              </div>
            </div>
          </Container>
        </Container>
      </div>
    )
  }
}

export default Illustrations
