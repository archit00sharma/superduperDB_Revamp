import { FC } from 'react';

import { Team } from 'features/Team';
import { Testimonials } from 'features/Testimonials';
import { LetsCreate } from 'shared/components/LetsCreate';
import { metaData } from 'shared/constants';
import { MainLayout } from 'widgets/MainLayout';

import "../src/features/USPSection/ui/USPSection"




interface ValuePairProps {
  number: string;
  title: string;
  description: string;
}

const ValuePair: React.FC<ValuePairProps> = ({ number, title, description }) => (
  <div className="value-pair">
    <div className="value-pair1">
      <div className="icon-pair"></div>
      <b className="separator">{number}</b>
    </div>
    <div className="value-pair-description">
      <div className="value-pair2">
        <h1 className="make-it-exist">{title}</h1>
        <div className="lorem-ipsum-dolor4">{description}</div>
      </div>
    </div>
  </div>
);

const HomePage: FC = () => {

  const valuePairsData = [
    { number: "01", title: "Make it exist", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit," },
    { number: "02", title: "Make it simple", description: "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostru" },
    { number: "03", title: "Make it useful", description: "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam," },
    { number: "04", title: "Make it worth", description: "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam," }
  ];


  return (
    <MainLayout {...metaData.main}>
      <div data-page="about">
        <section className="content">
          <img className='people-image' src="../../../../images/people.svg" alt="" />
          <div className="hero-parent">
            <div className="hero">
              <div className="hero-content">
                <div className="hero-details">
                  <div className='about-text'>About <br /> SuperDuperDB <img className="line-1" loading="lazy" alt="" src="../../../../images/line-1.svg" />
                    <br />
                    <span className='about-subtext'>  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
                  </div>

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
            <h1 className="our-value">Our value</h1>
            <div className="value-list">
              {valuePairsData.map((pair, index) => (
                <ValuePair key={index} {...pair} />
              ))}
            </div>
          </div>
        </section>
        <Team />
        <Testimonials/>
        <LetsCreate />
      </div>
    </MainLayout>
  );
};

export default HomePage;
