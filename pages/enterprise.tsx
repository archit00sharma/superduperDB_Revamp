import axios from 'axios';
import { FC } from 'react';
import { useEffect, useState, } from 'react';

import { metaData } from 'shared/constants';
import { MainLayout } from 'widgets/MainLayout';

import "../src/features/USPSection/ui/USPSection"


const HomePage: FC = () => {

  const [starCount, setStarCount] = useState(null);
  const [forksCount, setForksCount] = useState(null);
  useEffect(() => {
    const fetchStarCount = async () => {
      try {
        const response = await axios.get(`https://api.github.com/repos/SuperDuperDB/superduperdb`);
        const starCount = response.data.stargazers_count;
        const forksCount = response.data.forks_count;
        setStarCount(starCount);
        setForksCount(forksCount);
      } catch (error) {
        console.error('Error fetching star count:', error);
      }
    };

    fetchStarCount();
  }, []);

  return (
    <MainLayout {...metaData.main}>
      <div data-page="enterprise">
        <section className="grid-parent">
          {/* <img class="grid-icon" alt="" src="../../../../images/bg-2 1.svg" /> */}
          <img
            className="vector-icon"
            loading="lazy"
            alt=""
            src="../../../../images/Vector.svg"
          />
        </section>
        <img
          className="bg-2-1-icon3"
          loading="lazy"
          alt=""
          src="../../../../images/bg.svg"
        />
        <section className="hero-content-wrapper">
          <div className="hero-content1">
            <div className="frame15">
              <h1 className="build-ai-apps">Build AI apps for your company</h1>
              <i className="lorem-ipsum-dolor5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat.&nbsp;
              </i>
            </div>
            <div className="call-to-action1">
              <button className="button33" id="button1">
                <div className="button34">Contact</div>
              </button>
              <button className="button35">
                <div className="button36">Demo</div>
                <img
                  className="fiarrow-right-icon8"
                  alt=""
                  src="../../../../images/fi_arrow-right.svg"
                />
              </button>
            </div>
          </div>
        </section>
        <div className="rectangle" />
        <div className="feature-grid-wrapper">
          <div className="feature-grid">
            <div className="feature-headers">
              <div className="feature-labels">
                <div className="div5">{starCount !== null ? starCount : 'Loading...'} ★</div>
                <div className="github-open-source1">GitHub Open Source</div>
              </div>
              <div className="feature-labels1">
                <div className="div6">{forksCount !== null ? forksCount : 'Loading...'}+</div>
                <div className="forks1">Forks</div>
              </div>
              <div className="feature-labels2">
                <div className="div7">10+</div>
                <div className="ready-use-cases1">Ready Use Cases</div>
              </div>
            </div>
          </div>
        </div>
        <section className="new-grants-parent">
          <div className="new-grants">
            <img
              className="overview-1-icon"
              loading="lazy"
              alt=""
              src="../../../../images/NewGrants.svg"
            />
          </div>
          <div className="grants-content">
            <div className="want-to-see-what-you-can-do-parent">
              <div className="want-to-see">Want to see what you can do?</div>
              <div className="grants-highlight">
                <div className="outstanding-projects-built-wit-parent">
                  <h1 className="outstanding-projects-built">
                    Outstanding projects built with SuperDuperDB
                  </h1>
                  <img
                    className="underline-icon"
                    loading="lazy"
                    alt=""
                    src="../../../../images/Underline.svg"
                  />
                </div>
                <div className="view-more">
                  <i className="view-all">View all</i>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="frame-wrapper4">
          <div className="frame16">
            <img className="grid-icon1" alt="" src="../../../../images/Grid.svg" />
            <div className="project-cards">
              <div className="card6">
                <div className="image-card6">
                  <div className="main-card6">
                    <textarea
                      className="image-block"
                      rows={13}
                      cols={20}
                      defaultValue={"                  "}
                    />
                    <div className="content8">
                      <b className="card-title">Card title</b>
                      <i className="description">
                        Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis
                        cillum dolor.
                      </i>
                      <div className="card-footer">
                        <img
                          className="footer-left-icon"
                          loading="lazy"
                          alt=""
                          src="../../../../images/Rectangle.svg"
                        />
                        <div className="footer-right">
                          <div className="chaos-labs">Chaos Labs</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card7">
                <div className="image-card7">
                  <div className="main-card7">
                    <div className="image-block1">
                      <div className="content9">
                        <div className="image" />
                      </div>
                      <div className="sectionsdivider" />
                    </div>
                    <div className="content10">
                      <b className="card-title1">Card title</b>
                      <i className="description1">
                        Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis
                        cillum dolor.
                      </i>
                      <div className="frame17">
                        <img
                          className="frame-icon"
                          alt=""
                          src="../../../../images/Rectangle.svg"
                        />
                        <div className="chaos-labs-wrapper">
                          <div className="chaos-labs1">Chaos Labs</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card8">
                <div className="image-card8">
                  <div className="main-card8">
                    <div className="image-block2">
                      <div className="content11">
                        <div className="image1" />
                      </div>
                      <div className="sectionsdivider1" />
                    </div>
                    <div className="content12">
                      <b className="card-title2">Card title</b>
                      <i className="description2">
                        Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis
                        cillum dolor.
                      </i>
                      <div className="frame18">
                        <img
                          className="frame-icon1"
                          alt=""
                          src="../../../../images/Rectangle.svg"
                        />
                        <div className="chaos-labs-container">
                          <div className="chaos-labs2">Chaos Labs</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card9">
                <div className="image-card9">
                  <div className="main-card9">
                    <div className="image-block3">
                      <div className="content13">
                        <div className="image2" />
                      </div>
                      <div className="sectionsdivider2" />
                    </div>
                    <div className="content14">
                      <b className="card-title3">Card title</b>
                      <i className="description3">
                        Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis
                        cillum dolor.
                      </i>
                      <div className="frame19">
                        <img
                          className="frame-icon2"
                          alt=""
                          src="../../../../images/Rectangle.svg"
                        />
                        <div className="chaos-labs3">Chaos Labs</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div class="wrapper-control">
         <img class="control-icon1" loading="lazy" alt="" src="../../../../images/control.svg" />
      </div>
      <img class="control-icon2" alt="" src="../../../../images/control.svg" /> */}
          </div>
        </section>
        <img className="underline-1-icon" alt="" src="../../../../images/underline.svg" />
        <section className="f-a-q-content-wrapper">
          <div className="f-a-q-content">
            <div className="f-a-q-background" />
            <div className="question-block">
              <div className="question-header">
                <div className="question-title">
                  <div className="title-container">
                    <h1 className="your-questions-answered">
                      Your questions answered
                    </h1>
                    <img
                      className="underline-2-icon"
                      loading="lazy"
                      alt=""
                      src="../../../../images/Underline2.svg"
                    />
                  </div>
                  <div className="answer-block">
                    <div className="answer-content">
                      <div className="didnt-find-an-answer-your-que-parent">
                        <i className="didnt-find-an-container">
                          <p className="didnt-find-an">
                            Didn’t find an answer your question?
                          </p>
                          <p className="drop-us-a">Drop us a line.</p>
                        </i>
                        <img
                          className="arrow-icon"
                          loading="lazy"
                          alt=""
                          src="../../../../images/Arrow.svg"
                        />
                      </div>
                      <img
                        className="sparkle-icon"
                        loading="lazy"
                        alt=""
                        src="../../../../images/Sparkle.svg"
                      />
                    </div>
                    <button className="button37" id="button3">
                      <div className="button38">Ask a question</div>
                      <img
                        className="fiarrow-right-icon9"
                        alt=""
                        src="../../../../images/fi_arrow-question.svg"
                      />
                    </button>
                  </div>
                </div>
                <div className="info-list-wrapper">
                  <div className="info-list">
                    <div className="frame20">
                      <div className="info-details">
                        <i className="lorem-ipsum-dolor6">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit?
                        </i>
                        <div className="info-icon">
                          <img
                            className="fichevron-down-icon"
                            loading="lazy"
                            alt=""
                            src="../../../../images/fichevrondown.svg"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="info-items" />
                    <div className="frame21">
                      <div className="frame22">
                        <i className="lorem-ipsum-dolor7">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit?
                        </i>
                        <div className="fichevron-down-wrapper">
                          <img
                            className="fichevron-down-icon1"
                            alt=""
                            src="../../../../images/fichevrondown.svg"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="info-items1" />
                    <div className="frame23">
                      <div className="frame24">
                        <i className="lorem-ipsum-dolor8">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit?
                        </i>
                        <div className="fichevron-down-container">
                          <img
                            className="fichevron-down-icon2"
                            alt=""
                            src="../../../../images/fichevrondown.svg"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="info-items2" />
                    <i className="show-more">Show more</i>
                  </div>
                </div>
              </div>
              <div className="bottom-background" />
              <div className="why-superduperdb">Why SuperDuperDB?</div>
            </div>
            <div className="testimonial-content-parent">
              <div className="testimonial-content">
                <div className="testimonial-background" />
              </div>
              <img
                className="shining-stars-icon"
                loading="lazy"
                alt=""
                src="../../../../images/Shiningstars.svg"
              />
              <div className="testimonial-block">
                <div className="quote-container">
                  <div className="quote-content-parent">
                    <div className="quote-content">
                      <img
                        className="quote-mark-left"
                        alt=""
                        src="../../../../images/Frame.svg"
                      />
                      <div className="quote-details">
                        <div className="quote-description">
                          <b className="if-you-are">
                            If you are a large company or team looking to build with
                            SuperDuperDB. Send us a message.
                          </b>
                        </div>
                        <h1 className="superduperdb-enterprise">
                          SuperDuperDB Enterprise
                        </h1>
                      </div>
                    </div>
                    <img
                      className="vector-icon1"
                      alt=""
                      src="../../../../images/Vector(1).svg"
                    />
                  </div>
                  <div className="contact-button">
                    <button className="button39">
                      <div className="button40">Contact</div>
                      <img
                        className="fiarrow-right-icon10"
                        alt=""
                        src="../../../../images/fi_arrow-right.svg"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

    </MainLayout>
  );
};

export default HomePage;
