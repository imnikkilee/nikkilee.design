import React, {Component} from 'react';

// Components
import Container from '../components/Container';
import NavigationSimple from '../components/NavigationSimple';

// Images
import ImageShowcase from '../images/portfolio/jukely/showcase.png';
import BrowseDesktopGo1 from '../images/portfolio/jukely/browse-desktop-go-1.jpg';
import BrowseDesktopGo2 from '../images/portfolio/jukely/browse-desktop-go-2.jpg';
import BrowseDesktopGo3 from '../images/portfolio/jukely/browse-desktop-go-3.jpg';
import BrowseDesktopLast from '../images/portfolio/jukely/browse-desktop-last.jpg';
import BrowseDesktopSketchNav from '../images/portfolio/jukely/browse-desktop-sketch-nav.jpg';
import BrowseDesktopSketchText from '../images/portfolio/jukely/browse-desktop-sketch-text.jpg';
import BrowseDesktop from '../images/portfolio/jukely/browse-desktop.jpg';
import BrowseFlow from '../images/portfolio/jukely/browse-flow.png';
import BrowseIterations1 from '../images/portfolio/jukely/browse-iterations-1.jpg';
import BrowseIterations2 from '../images/portfolio/jukely/browse-iterations-2.jpg';
import BrowseMobileClosed from '../images/portfolio/jukely/browse-mobile-closed.png';
import BrowseMobileFlow1 from '../images/portfolio/jukely/browse-mobile-flow-1.jpg';
import BrowseMobileFlow2 from '../images/portfolio/jukely/browse-mobile-flow-2.jpg';
import BrowseMobileFlow3 from '../images/portfolio/jukely/browse-mobile-flow-3.jpg';
import BrowseMobileFlow4 from '../images/portfolio/jukely/browse-mobile-flow-4.jpg';
import BrowseMobileFlow5 from '../images/portfolio/jukely/browse-mobile-flow-5.jpg';
import BrowseMobileFlow6 from '../images/portfolio/jukely/browse-mobile-flow-6.jpg';
import BrowseMobileLast from '../images/portfolio/jukely/browse-mobile-last.jpg';
import BrowseMobileOpened from '../images/portfolio/jukely/browse-mobile-opened.png';
import BrowseMobileWireframes from '../images/portfolio/jukely/browse-mobile-wireframes.png';
import Gifts1 from '../images/portfolio/jukely/gifts-1.jpg';
import Gifts2 from '../images/portfolio/jukely/gifts-2.jpg';
import Settings from '../images/portfolio/jukely/settings.jpg';
import Styleguide from '../images/portfolio/jukely/styleguide-1.jpg';

// Styles
import './WorkPage.scss';

class Jukely extends Component {
  render() {
    return (
      <div className='WorkPage Jukely'>
        <NavigationSimple/>
        <Container size={'fullWidth'} className='headerContainer'>
          <Container size={'maxWidth'}>
            <header>
              <h4>
                april 2015 &ndash; april 2016
              </h4>
              <h1>
                Jukely
              </h1>
              <h4>
                responsive web app design &amp; development
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
                  <p><strong><a href="http://www.jukely.com/" target="_blank">Jukely</a> is a startup that offers a concert subscription service, helping music lovers see more shows and discover new music.</strong> While at Jukely, I got to work on lots of different aspects of the web app. The biggest project, however, was been the redesign of the show-browsing and spot-claiming experience, or what is called "Browse." Other favorite projects of mine include the gifts page, the settings page, and the internal styleguide.</p>
                </div>
              </div>
              <div className='row'>
                <div className="col_10-12">
                  <h6>desktop browse experience</h6>
                  <img src={BrowseDesktop} className='outline'/>
                  <small>With the recent launch of a brand new iOS app, and the upcoming launch of our first Android app, the creative team at Jukely decided it was time for a web refresh as well, to keep all our products visually aligned cross-platform. I was the primary designer on this project and produced most of the mocks. However, I worked very closely with the other designers, devs, and creative director. We went over designs daily, discussed ideas, and made decisions together. It was an extremely collaborative process.</small>
                  <small>We wanted to provide users with all the information they would need to decide whether or not each show was worth checking out. Obviously, there's day, time, location, etc. But part of Jukely's goals is to enable music discovery. We love getting people to go see new artists. And so we include similar artists, spotify and youtube embeds, and our own custom artist "blurbs": short, one sentence descriptions of each artist to give you a quick summary of what they sound like (and hopefully peak your interest).
                  </small>
                </div>
              </div>
              <div className='row'>
                <div className="col_10-12">
                  <h6>desktop browse headliner length considerations</h6>
                  <img src={BrowseDesktopSketchText} />
                  <small>You wouldn't believe the length of the band names we get on Jukely sometimes. Or how many supporting bands a headliner could have with them. Other times, there's no supporting bands at all. I made sure that our layout would work
                  no matter how long or short the event's title might be.</small>
                </div>
              </div>
              <div className='row'>
                <div className="col_10-12">
                  <h6>desktop browse navigation iterations</h6>
                  <img src={BrowseDesktopSketchNav}/>
                  <small>We promise our promoters that the browse experience we give our users will only showcase one show at a time. That way, users can explore each artist before deciding which show they should go to. Thus, we decided to go with a slideshow type experience. Here's a few iterations of what I thought that navigation could look like. I liked the idea of playing with a blurred "unseen" state. If a user hasn't looked at the next show yet, it will appear blurred. A very subtle form of gamification.</small>
                </div>
              </div>
              <div className='row alignBottom'>
                <div className="col_1-3">
                  <h6>mobile browse</h6>
                  <img src={BrowseMobileClosed}/>
                </div>
                <div className="col_1-3">
                  <img src={BrowseMobileOpened} />
                </div>
                <div className="col_8-12">
                  <small>On mobile, I wanted to make sure that you could see one event didn't take up more than the viewport. However, I wanted to make sure we were including all the content we wanted to. After multiple iterations, we decided to go with collapsed and expanded cards. All the most vital information was present at first glance of the card, but further artist exploration could be achieved by expanding the card.</small>
                </div>
              </div>
              <div className='row'>
                <div className="col_10-12">
                  <h6>mobile browse wireframes</h6>
                  <img src={BrowseMobileWireframes}/>
                  <small>Before settling on the expandable cards, I explored a few other options for the mobile view. This included scrolling through information horizontally and tabbed content. We decided against horizontal scrolling because we didn't want to effect the native behavior of most mobile browsers (scroll horizontally to switch tabs). And we didn't want to do tabs either, because it's not as easy to build upon in the future if we decide to include more content. Expanable cards were the best solution for us.</small>
                </div>
              </div>
              <div className='row halfMargin'>
                <div className="col_10-12">
                  <h6>desktop browse: claiming a spot</h6>
                  <img src={BrowseDesktopGo1} className='outline'/>
                </div>
              </div>
              <div className='row halfMargin'>
                <div className="col_10-12">
                  <h6>desktop browse: success</h6>
                  <img src={BrowseDesktopGo2} className='outline'/>
                </div>
              </div>
              <div className='row'>
                <div className="col_10-12">
                  <h6>desktop browse: holding a spot</h6>
                  <img src={BrowseDesktopGo3} className='outline'/>
                  <small>Above is the simplest flow for grabbing a pass. A user decides to go to a show, chooses how many spots they want, and then experience the success state with show instructions. When a user has a spot to a show, a small "ticket" type of element appears on the show, with further details about their status.</small>
                  <small>Notice in the top nav a small representation of the show they're going to has also appeared. That's a shortcut to let the user quickly jump to the shows they are attending.</small>
                </div>
              </div>
              <div className='row halfMargin'>
                <div className="col_1-3">
                  <h6>mobile browse: claiming a spot</h6>
                  <img src={BrowseMobileFlow1} />
                </div>
                <div className="col_1-3">
                  <h6>mobile browse: success</h6>
                  <img src={BrowseMobileFlow2} />
                </div>
                <div className="col_1-3">
                  <h6>mobile browse: holding a spot</h6>
                  <img src={BrowseMobileFlow3} />
                </div>
              </div>
              <div className='row'>
                <div className="col_1-3 mobileBottomMargin">
                  <h6>mobile browse: editing a spot</h6>
                  <img src={BrowseMobileFlow4} />
                </div>
                <div className="col_1-3 mobileBottomMargin">
                  <h6>mobile nav: no spots :(</h6>
                    <img src={BrowseMobileFlow5} />
                </div>
                <div className="col_1-3 mobileBottomMargin">
                  <h6>mobile nav: holding spots</h6>
                  <img src={BrowseMobileFlow6} />
                </div>
                <div className='col_12-12'>
                  <small>I love what we're doing for the mobile nav and hope to bring it to desktop soon. All the spots wouldn't always be able to fit in the top navigation like on desktop, so I decided to bring them under an expanded profile menu instead. With the extra room in here, I was able to add the headerliner, day, and time, as well. All useful information on the fly.</small>
                </div>
              </div>
              <div className='row'>
                <div className="col_2-3">
                  <h6>desktop browse: last card</h6>
                  <img src={BrowseDesktopLast} className='outline' />
                </div>
                <div className="col_1-3">
                  <h6>mobile browse: last card</h6>
                  <img src={BrowseMobileLast} />
                </div>
                <div className="col_12-12">
                  <small>We didn't want the user to get to the end of shows and wonder when they can have more! We added a card at the end of the list with a simple countdown to when tomorrow's shows will be released. Plus, included a call to action to upgrade to a plan with a longer view, if the user wants more shows now ;)</small>
                </div>
              </div>
              <div className='row'>
                <div className="col_10-12">
                  <h6>browse iterations</h6>
                  <img src={BrowseIterations1} />
                  <small>Iterate, iterate, iterate! I love to explore design options. I build and build upon my ideas, then go back and reassess my favorite options. My Sketch files usually end up looking like stair steps.</small>
                </div>
              </div>
              <div className='row'>
                <div className="col_10-12">
                  <h6>more browse iterations</h6>
                  <img src={BrowseIterations2} />
                  <small>...but not always. You can't always harness a creative mind :D Here I was trying to perfect the layout and design of the meta information on the mobile view.</small>
                </div>
              </div>
              <div className='row'>
                <div className="col_10-12">
                  <h6>gifts</h6>
                  <img src={Gifts1} />
                  <small>Before the last holiday season, we worked to put out a brand new gifting page. This was so much fun. Because it was simple, fast-paced, and full of UI elements. I love working on forms. Just look at this one. It's so clean and empty and just begging to be filled in!</small>
                </div>
              </div>
              <div className='row'>
                <div className="col_10-12">
                  <h6>gifts: various states</h6>
                  <img src={Gifts2} />
                  <small>Jukely has various monthly plan options, depending on things like whether or not you want to bring a +1 to shows. One of the challenges with the gifts page was allowing users to pick a custom amount to give, but educating them on how the person getting the gift will achieve the most bang for their buck. We decided to recommend certain set values, but provide a custom field that automatically launches a "cheat sheet" tooltip.</small>
                  <small>On the right is the second step, the credit card form. Splitting the process into two smaller forms made the whole experience less daunting on the user. Designing this form was just too fun. The focus states! The success states! The errors! Oh, joy!</small>
                </div>
              </div>
              <div className='row'>
                <div className="col_10-12">
                  <h6>settings</h6>
                  <img src={Settings} />
                  <small>Our new settings page was a collaborative effort between myself and another designer. He jumped ahead and got the designs about 75% there, and handed them off to me to finish up and build. While building, I fine tuned his UI designs and solved for some cases that he hadn't considered. We worked together through both stages, and we're both really happy with how this turned out :) </small>
                </div>
              </div>
              <div className='row'>
                <div className="col_10-12">
                  <h6>styleguide snippet</h6>
                  <img src={Styleguide} className='outline'/>
                  <small>One of my ongoing projects at Jukely has been an internal, living styleguide. My ultimate goal is for this styleguide to be used by devs, designers... everyone! Devs can reference it to make sure what they're building will appease the design gods. Designers can look at it to make sure they reuse any predetermined patterns (or decide if any patterns need updating). Anyone who is willing and able can use it to get their hands dirty with code using the easy-to-use, prebuilt React components.</small>
                  <small>Though our internal styleguide is far from finished, it's one of my favorite projects. I've been adding slowly to it, and hope that it becomes ever more helpful as it grows.</small>
                </div>
              </div>
            </div>
          </Container>
        </Container>
      </div>
    )
  }
}

export default Jukely;
