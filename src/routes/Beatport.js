import React, {Component} from 'react';

// Components
import Container from '../components/Container';
import NavigationSimple from '../components/NavigationSimple';
import PortfolioNavigator from '../components/PortfolioNavigator';

// Images
import ImageShowcase from '../images/portfolio/bp/showcase.png';
import CartDesk from '../images/portfolio/bp/cart-desk.jpg';
import CartTablet from '../images/portfolio/bp/cart-tablet.jpg';
import HomeDesk from '../images/portfolio/bp/home-desk.jpg';
import MulticartAdd from '../images/portfolio/bp/multicart-add.jpg';
import MyBeatportDesk from '../images/portfolio/bp/mybeatport-desk.jpg';
import PlayerDesk from '../images/portfolio/bp/player-desk.jpg';
import PlayerPhoneClosed from '../images/portfolio/bp/player-phone-closed.jpg';
import PlayerPhoneOpened from '../images/portfolio/bp/player-phone-opened.jpg';
import ReleaseDesk from '../images/portfolio/bp/release-desk.jpg';
import ReleasePhone from '../images/portfolio/bp/release-phone.jpg';
import ResponsiveElements from '../images/portfolio/bp/responsive-elements.jpg';
import SketchCartflow from '../images/portfolio/bp/sketch-cartflow.jpg';
import SketchesHome from '../images/portfolio/bp/sketches-home.jpg';
import SketchesMulticart from '../images/portfolio/bp/sketches-multicart.jpg';
import TrackDesk from '../images/portfolio/bp/track-desk.jpg';

// Styles
import './WorkPage.scss';

class Beatport extends Component {
  render() {
    return (
      <div className='WorkPage BP'>
        <NavigationSimple/>
        <Container size={'fullWidth'} className='headerContainer'>
          <Container size={'maxWidth'}>
            <header>
              <h4>
                nov 2013 &ndash; april 2015
              </h4>
              <h1>
                Beatport Pro
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
                  <p><strong><a href="http://pro.beatport.com" target="_blank">Beatport Pro</a> is an online music store specializing in electronic dance music.</strong> Last year, I was lead designer of an effort to redesign the 10 year old music store. Because there is no mobile app available for the store, there was a huge need to create a mobile friendly version of the site so that DJs could browse and purchase music on the go.</p>
                  <p>Also, since the site was approaching its 10 year anniversary, it was beginning to show its age. I wanted to make it feel as modern and cool as the DJs who relied on it.</p>
                  <p>I was lucky enough to work closely with a wonderful team of product managers and engineers on this project, and together we built something that we're all very proud of.</p>
                </div>
              </div>
              <div className='row'>
                <div className="col_12-12">
                  <h6>homepage sketches</h6>
                  <img src={SketchesHome} className='outline'/>
                  <small>The first thing I tackled was figuring out a layout for the homepage. The old homepage had so much information crammed into it. I wanted to give the content more room to breathe so it would be easier on the eyes. That being said, I also wanted the DJs visiting the site to be able to easily find what they were looking for. One thing I had to pay careful attention to was the "Beatport Top Ten" which is super important to DJs. I had to make sure the first few tracks were always visible immediately upon entering the site.</small>
                </div>
              </div>
              <div className='row'>
                <div className="col_10-12">
                  <h6>desktop homepage</h6>
                  <img src={HomeDesk} />
                  <small>My team and I decided that a dark color scheme was best for the site because it echoed the feeling of being in a night club. Black also feels more "pro" which we liked since the store was aimed at professional DJs. The color scheme I chose was neon green, blue and pink. Neon because, again, I wanted the site to relate to being at a DJ set, which are always filled with bright, colored lights. Green because it was Beatport's existing brand color, blue was also borrowing from Beatport's existing color scheme, and pink because I wanted to give the site some edge. I had to defend my choice of pink because some were afraid it was too feminine. But in all honesty, I find pink to be an exciting, energetic color. Brands like T-Mobile and Dribbble use it well without feeling "girly," so why couldn't we?</small>
                </div>
              </div>
              <div className='row'>
                <div className="col_12-12">
                  <h6>desktop player</h6>
                  <img src={PlayerDesk}/>
                  <small>We decided to move the player to the bottom of the screen. Putting the player on the bottom felt more in line with what people are used to (think Spotify or Rdio). We also wanted to make the player feel less crammed with information, so we added an "info" pop up which holds extra meta information.</small>
                </div>
              </div>
              <div className="row">
                <div className="col_5-12">
                  <h6>phone player closed</h6>
                  <img src={PlayerPhoneClosed}/>
                </div>
                <div className="col_5-12">
                  <h6>phone player opened</h6>
                  <img src={PlayerPhoneOpened}/>
                </div>
                <div className="col_10-12">
                  <small>Fitting everything into a mobile player was a challenge, but not impossible. The mobile player takes up the full screen when opened, and displays everything the user could ever want! Player queue, meta information, wave form scrubber ...it's all there! Did I mention that wave forms are SUPER important to DJs? They want to be able to see where the drops are in a track.</small>
                </div>
              </div>
              <div className="row">
                <div className="col_10-12 pb2">
                  <h6>desktop release page</h6>
                  <img src={ReleaseDesk}/>
                  <small>Adding the large, blurred background images was a simple way to transform the site into an immersive experience for the piece of content you are currently looking at. This page is a beautiful showcase for Zedd's newest release, but it doesn't feel so transformed that you forget you're on Beatport Pro.</small>
                </div>
              </div>
              <div className="row">
                <div className="col_8-12">
                  <h6>responsive elements</h6>
                  <img src={ResponsiveElements}/>
                  <small>When adding hover functionality, it's always a challenege to provide that same functionality on mobile. On desktop, we added hover functionality to items like releases and tracks to make room for more meta information and undisturbed artwork. On mobile, we were able to retain this functionality by added these "drawers." When a user taps the ellipsis, all functionality for the item is revealed. Hiding all the functionality also makes the mobile view feel more streamlined, because we don't have to show 4 different icons on every single item&mdash;which would look super repetetive and overwhelming.</small>
                </div>
              </div>
              <div className="row halfMargin">
                <div className="col_10-12">
                  <h6>desktop track page</h6>
                  <img src={TrackDesk} />
                </div>
              </div>
              <div className="row">
                <div className="col_10-12">
                  <h6>desktop my beatport page</h6>
                  <img src={MyBeatportDesk}/>
                  <small>An example of the filtering and pagination we implemented on various pages, such as My Beatport and search results.</small>
                </div>
              </div>
              <div className="row">
                <div className="col_12-12">
                  <h6>multiple cart sketches</h6>
                  <img src={SketchesMulticart} className="outline" />
                  <small>One of the major features we added to the site post launch was multiple cart. Think of multiple cart sort of like Amazon's wishlists. You can create multiple lists, give them names, set your default, add items to them, etc. But we decided to create multiple carts instead of wishlists so that DJs can check out with any one at any time. Often, DJs will shop for specific upcoming gigs they have, and so having the ability to organize their purchases is a super helpful feature. Here's a few sketches for the multiple cart settings page and new icons needed for the checkout process.</small>
                </div>
              </div>
              <div className="row">
                <div className="col_8-12">
                  <h6>add to cart</h6>
                  <img src={MulticartAdd} />
                  <small>We had to create a way for users to easily add an item to their default cart, or specify a different cart. We split the buy buttons in two&mdash;clicking the larger portion quickly added the item to your default cart. Clicking the arrow launched a dropdown that allowed you to choose a cart to add it to.</small>
                </div>
              </div>
              <div className="row">
                <div className="col_10-12">
                  <h6>desktop cart page</h6>
                  <img src={CartDesk} />
                  <small>We added some funcationlity to the cart page, such as being able to move one or more tracks at a time to different carts.</small>
                </div>
              </div>
              <div className="row">
                <div className="col_8-12">
                  <h6>tablet cart page</h6>
                  <img src={CartTablet} />
                  <small>Even on mobile, all the functionality for the cart page is still there. Opening a drawer on any item allows you to move items, delete them, and more.</small>
                </div>
              </div>
            </div>
          </Container>
        </Container>
        <PortfolioNavigator prevLink="jukely" nextLink="bionic"/>
      </div>
    )
  }
}

export default Beatport;
