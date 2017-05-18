import React, {Component} from 'react';

// Components
import Container from '../components/Container';
import NavigationSimple from '../components/NavigationSimple';

// Images
import ImageShowcase from '../images/portfolio/gw/showcase.png';
import AdminCreateOrgDuo from '../images/portfolio/gw/admin-create-org-duo.png';
import AdminOnboardingAdvice from '../images/portfolio/gw/admin-onboarding-advice.png';
import AdminReportOverviewDesktop from '../images/portfolio/gw/admin-report-overview-desktop.png';
import AdminReportOverviewMobile from '../images/portfolio/gw/admin-report-overview-mobile.png';
import AdminReportOverviewTablet from '../images/portfolio/gw/admin-report-overview-tablet.png';
import AdminReportPaymentsDesktop from '../images/portfolio/gw/admin-report-payments-desktop.png';
import AdminReportSupportersDesktop from '../images/portfolio/gw/admin-report-supporters-desktop.png';
import AdminReportSupportersDetailDesktop from '../images/portfolio/gw/admin-report-supporters-detail-desktop.png';
import AdminReportZeroStates from '../images/portfolio/gw/admin-report-zero-states.png';
import AdminSignUpDuo from '../images/portfolio/gw/admin-sign-up-duo.png';
import AdminWelcome from '../images/portfolio/gw/admin-welcome.png';
import AdminZeroApiKey from '../images/portfolio/gw/admin-zero-api-key.png';
import GWFeature1 from '../images/portfolio/gw/gw-feature1.png';
import GWFeature2 from '../images/portfolio/gw/gw-feature2.png';
import GWHomeDesk from '../images/portfolio/gw/gw-home-desk.png';
import GWHomepageDeviceDetailMobile from '../images/portfolio/gw/gw-homepage-device-detail-mobile.png';
import GWHomepageDeviceDetailTablet from '../images/portfolio/gw/gw-homepage-device-detail-tablet.png';
import GWPricing from '../images/portfolio/gw/gw-pricing.png';
import GWSignUpFlowStart from '../images/portfolio/gw/gw-sign-up-flow-start.png';
import GWSketch1 from '../images/portfolio/gw/gw-sketch-1.png';
import GWSketch2 from '../images/portfolio/gw/gw-sketch-2.png';
import GWSupporterFormDetail from '../images/portfolio/gw/gw-supporter-form-detail.gif';

// Styles
import './WorkPage.scss';

class TheGroundwork extends Component {
  render() {
    return (
      <div className='WorkPage TheGroundwork'>
        <NavigationSimple/>
        <Container size={'fullWidth'} className='headerContainer'>
          <Container size={'maxWidth'}>
            <header>
              <h4>
                april 2016 &ndash; present
              </h4>
              <h1>
                The Groundwork
              </h1>
              <h4>
                responsive web app &amp; marketing site
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
                  <p><strong><a href="http://thegroundwork.com/" target="_blank">The Groundwork</a> is a technology platform built to help nonprofits collect supporter data, raise funds, host events, measure progress, and more.</strong> Besides being a powerful API, The Groundwork is also a suite of tools that make interacting with the API as seamless as possible. One such tool was Admin, a frontend application users could log into to visualize and manage their data.</p>
                  <p>Admin is where I put most of my time while working on The Groundwork, creating report dashboards, onboarding views, and more. In addition to Admin, I also got to design and build the primary marketing site for The Groundwork and the corresponding signup flow.</p>
                </div>
              </div>
              <div className="row">
                <div className="col_8-12">
                  <h6>gathering thoughts for thegroundwork.com</h6>
                  <img src={GWSketch1} className='outline'/>
                  <small>My "sketching" usually starts with just gathering thoughts. Here, I was thinking about the goals of the marketing site, what the story should be, what The Groundwork is, why it's appealing to potential customers, etc.</small>
                </div>
              </div>
              <div className="row">
                <div className="col_12-12">
                  <h6>sketches for thegroundwork.com</h6>
                  <img src={GWSketch2} className='outline'/>
                  <small>Next I switched to brainstorming imagery. Coming up with imagery to advertise software is definitely a challenge, so I just threw a bunch of ideas (good and bad) on paper.</small>
                </div>
              </div>
              <div className="row">
                <div className="col_10-12">
                  <h6>thegroundwork.com homepage</h6>
                  <img src={GWHomeDesk} className='outline'/>
                  <small>Though I was the primary designer and developer for this project, it was still a hugely collaborative effort&mdash;the marketing team that wrote the majority of the final content, my fellow designers that provided priceless feedback, and my fellow developers who set up the build and deploy process and lended a hand with the JS. Yay team!</small>
                </div>
              </div>
              <div className="row halfMargin">
                <div className="col_1-3">
                  <h6>mobile screenshot on a mobile device</h6>
                  <img src={GWHomepageDeviceDetailMobile}/>
                </div>
                <div className="col_2-3">
                  <h6>tablet screenshot on a tablet device</h6>
                  <img src={GWHomepageDeviceDetailTablet}/>
                </div>
                <div className="col_10-12">
                  <small>One of my team members suggested the screenshots on the page be responsive, corresponding to the device the site was being viewed on. I loved the idea and implemented it!</small>
                </div>
              </div>
              <div className="row">
                <div className="col_12-12">
                  <h6>interactive imagery on thegroundwork.com</h6>
                  <img src={GWSupporterFormDetail}/>
                  <small>Static images alone weren't enough to do The Groundwork justice, so I decided to bring some interactivity into the mix. I solicited the help of another JS developer on the team, and together we created some fun, simple, interactive illustrations.</small>
                </div>
              </div>
              <div className="row">
                <div className="col_1-2">
                  <h6>donations feature marketing page snippet</h6>
                  <img src={GWFeature2} className='outline'/>
                </div>
                <div className="col_1-2">
                  <h6>hosted pages feature marketing page snippet</h6>
                  <img src={GWFeature1} className='outline'/>
                </div>
                <div className="col_12-12">
                  <small>To specific features of The Groundwork, we created individual feature pages to highlight each one. I created custom illustrations for each of these pages.</small>
                </div>
              </div>
              <div className="row">
                <div className="col_8-12">
                  <h6>pricing page snippet</h6>
                  <img src={GWPricing} className='outline'/>
                </div>
                <div className="col_8-12">
                  <small>Our pricing model is a little confusing to grasp at first, so I spent a good deal of time on the pricing page trying to make it as clear as possible. I included graphic breakdowns of the various costs as well as a monthly cost estimator.</small>
                </div>
              </div>
              <div className="row">
                <div className="col_8-12">
                  <h6>the start of the sign up flow</h6>
                  <img src={GWSignUpFlowStart}/>
                  <small>I started the signup flow with an email input instead of just a "sign up" button because it made our sign up process seem super short. <em>Can I really get started for free with just an email?!?</em> That, and if the user dropped off anytime during the signup flow, at least an email would be captured so that we could reach out to them in the future.</small>
                </div>
              </div>
              <div className="row">
                <div className="col_12-12">
                  <h6>create an account</h6>
                  <img src={AdminSignUpDuo}/>
                  <small>A little more info was needed to create the new user's account. But since we already collected their email, this form became 3 fields instead of 4&mdash;shorter and more approachable.</small>
                </div>
              </div>
              <div className="row">
                <div className="col_12-12">
                  <h6>create an organization</h6>
                  <img src={AdminCreateOrgDuo}/>
                  <small>In addition to a user account, a user also needs to create an organization (which they can invite other users to later). I broke organization creation out into its own step, again, to avoid having one long, overwhelming sign up form. At this point, the user's account has already been created and they can focus on creating their organization.</small>
                </div>
              </div>
              <div className="row">
                <div className="col_10-12">
                  <h6>admin welcome screen</h6>
                  <img src={AdminWelcome}/>
                  <small>Once the user has created their account and organization, they are welcomed to The Groundwork. I used this opportunity to explain the live and test modes in Admin, ensuring the user that they could explore safely in test mode.</small>
                </div>
              </div>
              <div className="row">
                <div className="col_12-12">
                  <h6>admin onboarding advice</h6>
                  <img src={AdminOnboardingAdvice}/>
                  <small>Originally, I explored the idea of having numbered setup steps to introduce a user to Admin. However, myself and some other folks on the team shared a common distaste for step-by-step onboarding. We prefer to explore a product on our own and tend to rush through (or skip entirely) onboarding steps.</small>
                  <small>That being said, Admin is full of features that could be hard for a new user to grasp. I came up with these onboarding advice modules, and placed them at the top of Admin screens that needed explaining. Users were free to explore the tool on their own, but we offered them tips along the way.</small>
                </div>
              </div>
              <div className="row">
                <div className="col_12-12">
                  <h6>all-time zero states</h6>
                  <img src={AdminReportZeroStates}/>
                  <small>To make the onboarding process even better, I added these helpful all-time zero states. If a user has not collected any supporters or raised any money yet, for example, we suggest actions they can take to get their organization going.</small>
                </div>
              </div>
              <div className="row">
                <div className="col_1-2">
                  <h6>api key modal</h6>
                  <img src={AdminZeroApiKey}/>
                  <small>To make those zero states even <em>more</em> helpful, I surfaced the organization's API key when necessary. For example, to set up the Supporter Block a user will need an API key. Here you go!</small>
                </div>
              </div>
              <div classname="row">
                <div className="col_10-2">
                  <h6>report overview</h6>
                  <img src={AdminReportOverviewDesktop}/>
                  <small>Other than signup and onboarding, I also put a lot of time into report dashboards in Admin. I worked closely with a product manager and another JS developer to bring these dashboards to life. I loved collaborating with these guys.</small>
                  <small>The PM started the process by creating wireframes which I then translated into static designs. The PM, the JS developer, and myself would then go over designs together to make sure we were providing the most informative data, that everything was buildable, etc. Then I would start building. I'd create new React components, write markup, style the Victory charts, etc. The other JS developer would then come in and wire everything up to real data. Finally, the three of us would test, find problems, fix bugs, and finally, ship! In the end, we were able to produce three informative and beautiful report dashboards.</small>
                </div>
              </div>
              <div className="row">
                <div className="col_1-3">
                  <h6>mobile report overview</h6>
                  <img src={AdminReportOverviewMobile}/>
                </div>
                <div className="col_2-3">
                  <h6>tablet report overview</h6>
                  <img src={AdminReportOverviewTablet}/>
                </div>
                <div className="col_10-12">
                  <small>Did I mention that all the report dashboards are totally responsive? Because they are :)</small>
                </div>
              </div>
              <div className="row">
                <div className="col_1-2">
                  <h6>supporters report</h6>
                  <img src={AdminReportSupportersDesktop}/>
                </div>
                <div className="col_1-2">
                  <h6>supporters report with sources revealed</h6>
                  <img src={AdminReportSupportersDetailDesktop}/>
                </div>
                <div className="col_10-12">
                  <small>This report view shows supporters collected broken up by initiatives. Furthermore, you can expand an initiative to see a finer breakdown by sourcce. Initiatives and sources both feature sparklines, so users can get a sense of when initaitives and sources were most active compared to one another.</small>
                </div>
              </div>
              <div className="row">
                <div className="col_10-12">
                  <h6>payments report</h6>
                  <img src={AdminReportPaymentsDesktop}/>
                  <small>The payments report page is my favorite report dashbaord we built. The line chart and pie chart compare one-time donations and subscriptions, and the pie chart even shows you a comparison to last period. There's also a payment size histogram, showing the frequency of various payment sizes.</small>
                </div>
              </div>
            </div>
          </Container>
        </Container>
      </div>
    )
  }
}

export default TheGroundwork;
