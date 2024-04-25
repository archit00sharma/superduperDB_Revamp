/* eslint-disable prettier/prettier */
import React from 'react';
import { TypeAnimation } from 'react-type-animation';

import { Button } from 'shared/components/Button';
import { links } from 'shared/constants';
import ApacheIcon from 'shared/icons/apache.svg';
import PythonIcon from 'shared/icons/python-icon.svg';
import { handleExternalNavigation } from 'shared/utils';
import './usp-section.scss';
import { animationSequence, uspParagraph } from '../model/sectionData'



interface USPSectionProps {
  section: string;
}

const USPSection: React.FC<USPSectionProps> = ({ section }) => {
  return (
    <>


      

      


     

      

      <section data-page="slack" className="community-content-wrapper">
        <div className="community-content">
          <div className="community-information">
            <div className="community-information-child"></div>
            <div className="community-header">
              <h1 className="join-our-community">Join our community</h1>
              <div className="learn-from-others-share-your-wrapper">
                <div className="learn-from-others">
                  Learn from others, share your work, and extend your knowledge.
                </div>
              </div>
            </div>
            <button className="button8">
              <div className="button9">Join us</div>
              <div className="button-icon">
                <img className="fiarrow-right-icon" alt="" src="../../../../images/fi_arrow-right.svg" />
              </div>
            </button>
            <img className="slack-logo-icon-2" loading="lazy" alt="" src="../../../../images/slack-logo-icon.svg" />
          </div>
          <div className="updates-image-parent">
            <div className="updates-content">
              <div className="updates-content-child"></div>
              <div className="updates-header">
                <div className="updates-title">
                  <h1 className="changelog">Changelog</h1>
                  <div className="keep-track-of">
                    Keep track of changes and upgrades of SuperDuperDB
                  </div>
                </div>
              </div>
              <button className="button10">
                <div className="button11">Check it out</div>
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* <section className="usp__container">
        <div className="usp__text">
          <div className="usp__badges">
            <div className="usp__badge">
              <PythonIcon /> <span>PYTHON</span>
            </div>
            <div className="usp__badge">
              <ApacheIcon /> <span>Apache 2.0</span>
            </div>
          </div>
          <h1 id="usp-title" className="usp__title">
            <TypeAnimation
              sequence={animationSequence[section]}
              wrapper="span"
              speed={50}
              cursor={false}
              // style={{ fontSize: '2em', display: 'inline-block' }}
              repeat={Infinity}
            />
          </h1>

          <p className="usp__paragraph">
            {uspParagraph[section]}
          </p>

        </div>
        <div className="usp__buttons">
          <Button
            label={
              <div>
                <svg
                  viewBox="0 0 16 16"
                  width="16"
                  fill='white'
                  height="16"
                  aria-hidden="true"
                  style={{ scale: "1.7" }}
                >

                  <path
                    d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.20.36-1.02-.08-2.12 0 0-.67-.22-2.20.82-.64-.18-1.32-.27-2.00-.27-.68 0-1.36.09-2.00.27-1.53-1.03-2.20-.82-2.20-.82-.44 1.10-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.20-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.60-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.90.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.30.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"
                  ></path>
                </svg>&nbsp; <span style={{ verticalAlign: "text-bottom" }}>GitHub</span>
              </div>
            }
            variant="primary"
            fullWidth
            onClick={() => handleExternalNavigation(links.github)}
          />
          <Button
            className="bolder-label"
            label="Install via Pip / Docker"
            variant="secondary"
            fullWidth
            onClick={() => handleExternalNavigation(links.demoLink)}
          />
        </div>
      </section> */}
    </>
  );
};

export default USPSection;
