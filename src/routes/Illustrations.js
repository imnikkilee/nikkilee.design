import React, {Component} from 'react';

// Components
import Container from '../components/Container';
import NavigationSimple from '../components/NavigationSimple';
import PortfolioNavigator from '../components/PortfolioNavigator';

// Images
import PWL from '../images/portfolio/illustrations/pwl.jpg';
import GWIllustrations from '../images/portfolio/illustrations/gwillustrations.png';
import GWbg1 from '../images/portfolio/illustrations/gwillustrations-1.png';
import GWbg2 from '../images/portfolio/illustrations/gwillustrations-2.png';
import GWbg3 from '../images/portfolio/illustrations/gwillustrations-3.png';
import GWbg4 from '../images/portfolio/illustrations/gwillustrations-4.png';

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
                Illustrations
              </h1>
            </header>
          </Container>
        </Container>
        <Container size={'fullWidth'}>
          <Container size={'maxWidth'}>
            <div className='Grid'>
              <div className='row'>
                <div className="col_12-12">
                  <h6>Papers We Love Conf.</h6>
                  <img src={PWL} />
                  <small><a href='http://pwlconf.org/' target='_blank'>Papers We Love Conf.</a> is a conference about academic computer science papers and those who love to read them. I know the folks who run the conference and lended a hand at last year's by handing out t-shirts. So when they asked me if I'd create a custom illustration for this year's conference website, I was able to use my first-hand experience as inspiration.</small>
                  <small>The illstration had to convey the location of the conference, St. Louis. And what better way to do that than with the arch. But rather than throwing in other random St. Louis skyline pieces, I decided to focus on the Union Station hotel&mdash;the unforgetable and iconic building where the conference is held. In addition, I wanted to allude to what the conference is about: computer science papers. I included a gust of papers sweeping through the city so it looks as if Papers We Love is taking over St. Louis!</small>
                </div>
              </div>
              <div className='row'>
                <div className="col_12-12">
                  <h6>The Groundwork</h6>
                  <img src={GWIllustrations} />
                  <small><a href="http://thegroundwork.com">The Groundwork</a> is a technology platform built specifically for nonprofits. I created a series of illustrations to advertise the product in a way that was fun without being too childish. The illustrations highlight different features of the platform, such as donations, subscriptions, supporter signups, emails, hosted web pages, and more.</small>
                </div>
              </div>
              <div className='row hafMargin'>
                <div className="col_1-2">
                  <img src={GWbg1} />
                </div>
                <div className="col_1-2">
                  <img src={GWbg4} />
                </div>
                <div className="col_12-12">
                  <small>I also created a series of larger illustrations based off of the original, smaller ones to use within page headers on the marketing site.</small>
                </div>

              </div>
              <div className='row'>
                <div className="col_1-2">
                  <img src={GWbg2} />
                </div>
                <div className="col_1-2">
                  <img src={GWbg3} />
                </div>
              </div>
            </div>
          </Container>
        </Container>
        <PortfolioNavigator prevLink="bionic" nextLink="papergoods"/>
      </div>
    )
  }
}

export default Illustrations
