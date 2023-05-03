import './stylesheets/homepage/menu.css'
import './stylesheets/homepage/features.css'
import './stylesheets/homepage/getStarted.css'
import './stylesheets/homepage/pricing.css'
import './stylesheets/homepage/contact.css'
import './stylesheets/homepage/footer.css'
import IMAGES from './img'

import React from "react";

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Image/>
      <Features/>
      <GetStarted/>
      <Pricing />
      <Contact />
      <Footer />

    </div>

  );
}

function Header() {
  return (
    <header>
      <nav>
        <div className="logo">
          <img src={IMAGES.logo} alt="Logo" />
        </div>
        <div className="menu">
          <ul>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Sign up</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="hero">
      <h1>Social Media Templates<br />Designed by You</h1>
      <p>Create stunning media kits with ease using our AI-powered platform</p>
      <button>Create a Template</button>
    </section>
  );
}

function Image() {
  return (
    <section id="image">
      <img src={IMAGES.templateDashboard} alt="template" />
    </section>
  );
}


function Features() {
  return (
    <section id="features">
    <h2>Features</h2>
    <div class="top-row">
      <div class="rectangle">
        <div class="feature-box">
          <h3>Customizable Templates</h3>
          <p>Create your own media kit templates from scratch or customize our pre-designed templates</p>
        </div>
      </div>
      <div class="rectangle">
        <div class="feature-box">
          <h3>AI-generated Templates</h3>
          <p>Use our AI to generate a media kit template tailored to your needs</p>
        </div>
      </div>
      <div class="rectangle">
        <div class="feature-box">
          <h3>Cross platform</h3>
          <p>The ability to link different social media stats together</p>
        </div>
      </div>
    </div>
    <div class="bottom-row">
      <div class="rectangle">
        <div class="feature-box">
          <h3>Easy Editing</h3>
          <p>Edit your media kit templates with our intuitive drag-and-drop editor</p>
        </div>
      </div>
      <div class="rectangle">
        <div class="feature-box">
          <h3>Attach Audio or Videos</h3>
          <p>Give your metric stats a voice and create better engagement with potential brands</p>
        </div>
      </div>
      <div class="rectangle">
        <div class="feature-box">
          <h3>Customizable URL </h3>
          <p>Create your unique URL user name and attach it to you Email, Social media or portfolio</p>
        </div>
      </div>
    </div>
  </section>
  );
}

function GetStarted() {
  return (
    <div className="container">
      <div className="left-section">
        <section id="getStartedImage">
          <img src={IMAGES.startedLogo} alt="startedLogo" />
        </section>
      </div>
      <div className="right-section">
        <section id="get-started">
          <h2>Start creating your Social Media Kit</h2>
          <p>
            A good design is not only aesthetically pleasing but also functional.
            It should be able to solve the problem.
          </p>
          <form>
            <button>Get Started</button>
          </form>
        </section>
      </div>
    </div>
  );
}
function Pricing() {
  return (
    <section id="pricing">
      <h2>Pricing</h2>
      <div className="images-container">
        <img src={IMAGES.silverMonthly} alt="silverMonthly" height="530" width="350" />
        <img src={IMAGES.goldMonthly} alt="goldMonthly" height="530" width="350" />
      </div>
    </section>
  );
}

function Contact() {
  return (
    <div className="contactContainer">
      <div className="left-Contactsection">
        <section id="contactImage">
          <img src={IMAGES.contactLogo} alt="contactLogo" />
        </section>
      </div>
      <div className="right-Contactsection">
        <section id="contactSection">
          <h2>Get In Touch</h2>
          <p>
            If you have any questions or comments, please don't hesitate to get in touch with us. We would love to hear
            from you!
          </p>
          <form>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="Information" />
            <button type="submit">Submit</button>
          </form>
        </section>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <p>&copy; 2023 SocialKit. All Rights Reserved.</p>
          </div>
          <div className="col-md-6">
            <nav className="footer-nav">
              <ul>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Terms of Service</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default App;
