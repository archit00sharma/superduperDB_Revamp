import { FC } from 'react';


import { metaData } from 'shared/constants';
import { MainLayout } from 'widgets/MainLayout';

import "../src/features/USPSection/ui/USPSection"


const HomePage: FC = () => {


  return (
    <MainLayout {...metaData.main}>
      <div data-page="about">
        <section className="content">
          <div className="hero-parent">
            <div className="hero">
              <div className="hero-content">
                <div className="hero-details">
                  <img className="line-1" loading="lazy" alt="" src="../../../../images/line-1.svg" />
                  <div className="call-to-action">
                    <button className="button2">
                      <div className="button3">Contact us</div>
                      <div className="button-icon">
                        <img className="fiarrow-right-icon" alt="" src="../../../../images/fi_arrow-rig_white.svg" />
                      </div>
                    </button>
                  </div>
                </div>
                <div className="hero-description">
                  <div className="description-container">
                    <h1 className="our-mission-is">
                      Our mission is to help developers to bring AI to life
                    </h1>
                    <div className="lorem-ipsum-dolor-lorem-ipsum-wrapper">
                      <div className="lorem-ipsum-dolor-container">
                        <p className="lorem-ipsum-dolor">Lorem Ipsum Dolor</p>
                        <p className="lorem-ipsum-dolor1">Lorem Ipsum Dolor</p>
                        <p className="lorem-ipsum-dolor2">Lorem Ipsum Dolor</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="features">
              <img className="bg-2-1-icon" loading="lazy" alt="" src="../../../../images/bg-about.svg" />

              <div className="feature-list">
                <div className="feature-row">
                  <div className="feature-row-child"></div>
                  <button className="feature-item">
                    <div className="icon-background"></div>
                    <img className="filayers-icon" alt="" src="../../../../images/fi_layers.svg" />
                  </button>
                  <div className="feature-title-parent">
                    <div className="feature-title">100</div>
                    <div className="lorem">lorem</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="benefit-list-wrapper">
            <div className="benefit-list">
              <div className="benefit-row">
                <div className="benefit-item-first">
                  <div className="benefit-item-first-child"></div>
                  <button className="icon-container">
                    <div className="icon-background1"></div>
                    <img className="filayers-icon1" alt="" src="../../../../images/fi_layers.svg" />
                  </button>
                  <div className="benefit-title-parent">
                    <div className="benefit-title">100</div>
                    <div className="lorem1">lorem</div>
                  </div>
                </div>
              </div>
              <div className="benefit-item-second">
                <div className="benefit-item-container">
                  <div className="icon-container1">
                    <div className="icon-container-child"></div>
                    <button className="icon-background2">
                      <div className="icon-background3"></div>
                      <img className="filayers-icon2" alt="" src="../../../../images/fi_layers.svg" />
                    </button>
                    <div className="benefit-title-group">
                      <div className="benefit-title1">100</div>
                      <div className="lorem2">lorem</div>
                    </div>
                  </div>
                </div>
                <div className="benefit-item-third">
                  <div className="benefit-item-container1">
                    <div className="benefit-item-container-child"></div>
                    <button className="icon-container2">
                      <div className="icon-background4"></div>
                      <img className="filayers-icon3" alt="" src="../../../../images/fi_layers.svg" />
                    </button>
                    <div className="benefit-title-container">
                      <div className="benefit-title2">100</div>
                      <div className="lorem3">lorem</div>
                    </div>
                  </div>
                  <div className="story-content-wrapper">
                    <div className="story-content">
                      <h1 className="our-story">Our story</h1>
                      <div className="lorem-ipsum-dolor3">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit
                        esse cillum dolore eu fugiat nulla pariatur. Excepteur
                        sint occaecat cupidatat non proident, sunt in culpa qui
                        officia deserunt mollit anim id est laborum.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="value-content-wrapper">
          <div className="value-content">
            <div className="value-content-child"></div>
            <h1 className="our-value">Our value</h1>
            <div className="value-list">
              <div className="value-row">
                <div className="value-item-set">
                  <div className="value-item-pair">
                    <div className="value-pair">
                      <div className="value-pair1">
                        <div className="icon-pair"></div>
                        <b className="separator">01</b>
                      </div>
                      <div className="value-pair-description">
                        <div className="value-pair2">
                          <h1 className="make-it-exist">Make it exist</h1>
                          <div className="lorem-ipsum-dolor4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit,
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="value-item">
                      <div className="icon"></div>
                      <b className="separator1">02</b>
                    </div>
                  </div>
                  <div className="value-item-pair1">
                    <div className="frame-parent">
                      <div className="ellipse-parent">
                        <div className="frame-child"></div>
                        <b className="b">03</b>
                      </div>
                      <div className="frame-wrapper">
                        <div className="make-it-useful-parent">
                          <h1 className="make-it-useful">Make it useful</h1>
                          <div className="sed-do-eiusmod">
                            sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua. Ut enim ad minim veniam,
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ellipse-group">
                      <div className="frame-item"></div>
                      <b className="b1">04</b>
                    </div>
                  </div>
                </div>
                <div className="value-item-set1">
                  <div className="value-item-pair2">
                    <h1 className="make-it-simple">Make it simple</h1>
                    <div className="sed-do-eiusmod1">
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostru
                    </div>
                  </div>
                  <div className="value-item-pair3">
                    <h1 className="make-it-worth">Make it worth</h1>
                    <div className="sed-do-eiusmod2">
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam,
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="team-content-wrapper">
          <div className="team-content">
            <div className="team-title-container">
              <h1 className="get-to-know">Get to know us</h1>
            </div>
            <div className="team-description">
              <div className="superduperdb-is-a">
                SuperDuperDB is a 100% remote team. We believe that creative
                collaboration can happen anywhere and want our team to work where
                they feel most comfortable and inspired.
              </div>
            </div>
            <div className="team-member-list">
              <img className="team-member-set" loading="lazy" alt="" src="../../../../images/user.svg" />

              <img className="team-member-set1" loading="lazy" alt="" src="../../../../images/user.svg" />

              <img className="team-member-set2" loading="lazy" alt="" src="../../../../images/user.svg" />

              <img className="team-member-set3" loading="lazy" alt="" src="../../../../images/user.svg" />

              <img className="team-member-set4" loading="lazy" alt="" src="../../../../images/user.svg" />

              <img className="team-member-set5" alt="" src="../../../../images/user.svg" />
            </div>
            <div className="staff-grid-container">
              <div className="staff-grid">
                <img className="staff-icons" loading="lazy" alt="" src="../../../../images/user.svg" />

                <img className="staff-icons1" loading="lazy" alt="" src="../../../../images/user.svg" />

                <img className="staff-icons2" loading="lazy" alt="" src="../../../../images/user.svg" />

                <img className="staff-icons3" loading="lazy" alt="" src="../../../../images/user.svg" />

                <img className="staff-icons4" loading="lazy" alt="" src="../../../../images/user.svg" />
              </div>
            </div>
          </div>
        </section>
        <section className="testimonial-container-wrapper">
          <div className="testimonial-container">
            <div className="testimonial-header">
              <h1 className="testimonials">Testimonials</h1>
            </div>
            <div className="testimonial-cards">
              <div className="quote-cards">
                <div className="quote-cards-child"></div>
                <div className="ut-enim-ad-minim-veniam-quis-wrapper">
                  <div className="ut-enim-ad">
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                    irure dolor in reprehenderit in voluptate velit esse cillum
                    dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt
                    mollit anim id est laborum.
                  </div>
                </div>
                <div className="author-info">
                  <div className="author-details">
                    <img className="author-photos-icon" loading="lazy" alt="" src="../../../../images/testuser1.svg" />

                    <div className="author-data">
                      <div className="author-names">
                        <h3 className="rodrigo-duarte">Rodrigo Duarte</h3>
                        <div className="product-owner">Product Owner</div>
                      </div>
                    </div>
                  </div>
                  <div className="company-logo">
                    <img className="company-logo-child" loading="lazy" alt="" src="../../../../images/rating.svg" />
                  </div>
                </div>
              </div>
              <div className="quote-cards1">
                <div className="quote-cards-item"></div>
                <div className="ut-enim-ad-minim-veniam-quis-container">
                  <div className="ut-enim-ad1">
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                    irure dolor in reprehenderit in voluptate velit esse cillum
                    dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt
                    mollit anim id est laborum.
                  </div>
                </div>
                <div className="frame-group">
                  <div className="ellipse-container">
                    <img className="frame-inner" loading="lazy" alt="" src="../../../../images/testuser2.svg" />

                    <div className="frame-container">
                      <div className="ivone-josan-parent">
                        <h3 className="ivone-josan">Ivone Josan</h3>
                        <div className="senior-engineer">Senior Engineer</div>
                      </div>
                    </div>
                  </div>
                  <div className="frame-div">
                    <img className="group-icon" loading="lazy" alt="" src="../../../../images/rating.svg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="cta-wrapper">
          <div className="cta">
            <div className="c-t-a-wrapper">
              <div className="frame">
                <div className="frame1">
                  <i className="have-a-project"> </i>
                  <h1 className="lets-create-something">
                    Let’s create something awesome.
                  </h1>
                </div>
                <button className="button4">
                  <div className="button5">Get Started</div>
                  <img className="fiarrow-right-icon1" alt="" src="../../../../images/getstartedarrow-right.svg" />
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default HomePage;
