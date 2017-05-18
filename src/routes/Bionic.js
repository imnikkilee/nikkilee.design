import React, {Component} from 'react';

// Components
import Container from '../components/Container';
import NavigationSimple from '../components/NavigationSimple';

// Images
import ImageShowcase from '../images/portfolio/bionic/showcase.png';
import Image1 from '../images/portfolio/bionic/bionic-1.jpg';
import Image2 from '../images/portfolio/bionic/bionic-2.jpg';
import Image3 from '../images/portfolio/bionic/bionic-3.jpg';
import Image4 from '../images/portfolio/bionic/bionic-4.jpg';

// Styles
import './WorkPage.scss';

class Bionic extends Component {
  render() {
    return (
      <div className='WorkPage Bionic'>
        <NavigationSimple/>
        <Container size={'fullWidth'} className='headerContainer'>
          <Container size={'maxWidth'}>
            <header>
              <h4>
                july 2013 &ndash; dec 2013
              </h4>
              <h1>
                Bionic
              </h1>
              <h4>
                web app design &amp; development
              </h4>
            </header>
          </Container>
        </Container>
        <Container size={'fullWidth'} className='contentContainer'>
          <Container size={'maxWidth'}>
            <div className='Grid'>
              <div className='row showcase'>
                <div className="col_12-12">
                  <img src={ImageShowcase}/>
                </div>
              </div>
              <div className='row intro'>
                <div className="col_8-12">
                  <p><strong><a href="http://www.bionic-ads.com/" target="_blank">Bionic</a> is a web application created for media planners and ad sales reps to help organize and expedite their work.</strong> Though I didn't design this product from the ground up, I was responsible for redesigning multiple pages, as well as designing new features. All screenshots shown for this project are primarily my designs, aside from some existing headers, etc.</p>
                  <p>In addition to design, I was responsible for the markup and CSS for anything I created.</p>
                </div>
              </div>
              <div className='row'>
                <div className="col_10-12">
                  <h6>seller home screen</h6>
                  <img src={Image1} className='outline'/>
                  <small>The main features I added to the seller homescreen was the ability to tab between your active campaigns and campaigns you may be interested in, plus the ability to filter your active campaigns with lots of different filtering options.</small>
                </div>
              </div>
              <div className='row'>
                <div className="col_10-12">
                  <h6>seller campaign screen</h6>
                  <img src={Image2} className='outline'/>
                  <small>There's a lot of information that our users needed to see at once about a campaign. My goal here was to display all the necessary information in a clean, easily-digestable way.</small>
                </div>
              </div>
              <div className='row'>
                <div className="col_10-12">
                  <h6>seller new proposal screen</h6>
                  <img src={Image3} className='outline'/>
                  <small>This is the view for adding a new proposal to a campaign. Again, we wanted a clear way to display a lot of information, as well as useful functionality such as being able to copy rows and reorder them.</small>
                </div>
                <div className="col_10-12">
                  <h6>media planner home screen</h6>
                  <img src={Image4} className='outline'/>
                  <small>Again, there is a lot of information to display on this page, so I added a scrolling table so I wouldn't have to squeeze everything in. The more important columns are fixed when scrolling, so users can always see titles and will never lose functionality. There's a lot a user can do such as add rows, delete rows, clone rows, etc. We put a lot of this functionality under one dropdown for each row, to try and reduce some clutter without reducing functionality.</small>
                </div>
              </div>
            </div>
          </Container>
        </Container>
      </div>
    )
  }
}

export default Bionic;
