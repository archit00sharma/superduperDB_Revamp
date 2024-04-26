import { FC } from 'react';


import { metaData } from 'shared/constants';
import { MainLayout } from 'widgets/MainLayout';

import "../src/features/USPSection/ui/USPSection"


const HomePage: FC = () => {


  return (
    <MainLayout {...metaData.main}>
      <div data-page="home">
        <section>
          <div className="home-desktop">
            <section className="main-content">
              <img
                className="grid-top-zero-height"
                loading="lazy"
                alt=""
                src="../../../../images/enterpriseGrid.svg"
              />
            </section>

            <img
              className="bg-2-1-icon"
              loading="lazy"
              alt=""
              src="../../../../images/bg.svg"
            />
            <section className="frame-parent">
              <div className="frame-container">
                <div className="frame-group">
                  <div className="frame-div">
                    <div className="frame-parent1">
                      <div className="frame-wrapper1">
                        <div className="frame-parent2">
                          <div className="v02-launch-date-1504-wrapper">
                            <div className="v02-launch-date">
                              V0.2 Launch date: 15/04
                            </div>
                          </div>
                          <button className="badge">
                            <div className="content">
                              <i className="label">Check it out</i>
                            </div>
                          </button>
                        </div>
                      </div>
                      <div className="frame-parent3">
                        <div className="the-ultimate-ai-tool-to-work-w-parent">
                          <h1 className="the-ultimate-ai">
                            Build, deploy and manage any AI on your existing <span className='position-relative'>data <img
                              className="line-1"
                              loading="lazy"
                              alt=""
                              src="../../../../images/homeunderline.svg"
                            /></span> infrastructure
                          </h1>
                        </div>
                        <div className="supporting-text">
                          <div className="superduperdb-is-a-tool-that-le">
                            <p className="you-work-with-python-and-a-few">
                              <i className="you-work-with">
                                SuperDuperDB is unifying platform for faster, more secure and more scalable AI development and deployment, <i className="superduperdb-is-a">
                                  eliminating fragile data pipelines, glue code and repetitive infrastructure work by integrating AI with your existing database into a single environment.
                                </i>
                              </i>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="button-grid-wrapper">
                      <div className="button-grid">
                        <button className="button2">
                          <div className="button3">Enterprise</div>
                        </button>
                        <button className="button4">
                          <div className="button5">Open-Source on Github</div>
                          <div className="fiarrow-right-wrapper">
                            <img
                              className="fiarrow-right-icon"
                              alt=""
                              src="../../../../images/fi_arrow-rig_white.svg"
                            />
                          </div>
                        </button>
                      </div>
                    </div>
                    <div className="frame5">
                      <div className="features-grid">
                        <div className="features-column">
                          <div className="div">4300 ★</div>
                          <div className="github-open-source">GitHub Open Source</div>
                        </div>
                        <div className="features-column1">
                          <div className="div1">500+</div>
                          <div className="forks">Forks</div>
                        </div>
                        <div className="features-column2">
                          <div className="div2">10+</div>
                          <div className="ready-use-cases">Ready Use Cases</div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
              <div className="wrapper-grid-header-parent">
                {/* <h1 className="heading">What you can do with SuperDuperDB?</h1>
                <i className="supporting-text1">
                  Start right now from simple use-cases:
                </i> */}
                <img
                  className="down-arrow-icon"
                  loading="lazy"
                  alt=""
                  src="../../../../images/Down arrow.svg"
                />
              </div>
            </section>
            <div className="integrations" />
            {/* <section className="functionality-grid-parent">
                     <div className="functionality-grid">
                        <div className="functionality-column-pair">
                           <div className="div-w-node-05e3ca4f-c46f-f45">
                              <div className="search-functionality">
                                 <div className="vector-search">Vector Search</div>
                                 <div className="find-similar-data">
                                    Find similar data and documents from a specific query: text,
                                    image, video, etc...
                                 </div>
                              </div>
                              <div className="div-you-cursor">
                                 <img
                                    className="div-cursor-arrow-icon"
                                    alt=""
                                    src="../../../../images/div-cursorarrow@2x.png"
                                 />
                                 <div className="div-cursor-nametag">
                                    <b className="you">You</b>
                                 </div>
                              </div>
                              <div className="development-functionality">
                                 <div className="machine-learning-block">
                                    <div className="div-figma-design">
                                       <div className="development-subtitle">
                                          <div className="development-icons">
                                             <div className="icon-one" />
                                             <div className="icon-two" />
                                             <div className="icon-three" />
                                          </div>
                                          <div className="development-code">
                                             <div className="from-superduperdb-import-container">
                                                <span>
                                                   <p className="from-superduperdb-import">
                                                      from superduperdb import superduper
                                                   </p>
                                                   <p className="from-superduperdbmongodb-impo">
                                                      from superduperdb.mongodb import Collection
                                                   </p>
                                                   <p className="import-pymongo">import pymongo</p>
                                                   <p className="p" />
                                                   <p className="my-db-superduperpymongomon">
                                                      my_db = superduper(pymongo.MongoClient().my_db)
                                                   </p>
                                                   <p className="r-my-dbexecute">r = my_db.execute(</p>
                                                   <p className="collectiondocs">Collection('docs')</p>
                                                   <p className="liketxt-similar-to">
                                                      .like({"{"}'txt': 'similar to this'{"}"})
                                                   </p>
                                                   <p className="find-one">.find_one()</p>
                                                   <p className="p1">)</p>
                                                </span>
                                             </div>
                                          </div>
                                       </div>
                                       <div className="deployment-functionality">
                                          <div className="deployment-block">
                                             <div className="div-lofi-subhead" />
                                             <div className="deployment-steps">
                                                <div className="div-lofi-block-lg" />
                                                <div className="div-lofi-block-lg1" />
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                    <div className="database-functionality">
                                       <div className="database-block">
                                          <img
                                             className="div-iterate-orbit-4-icon"
                                             alt=""
                                             src="../../../../images/div-iterateorbit4@2x.png"
                                          />
                                          <div className="button-link">
                                             <img
                                                className="div-iterate-orbit-1-icon"
                                                alt=""
                                                src="../../../../images/div-iterateorbit1@2x.png"
                                             />
                                             <img
                                                className="div-iterate-orbit-2-icon"
                                                alt=""
                                                src="../../../../images/div-iterateorbit2@2x.png"
                                             />
                                             <img
                                                className="div-iterate-orbit-3-icon"
                                                alt=""
                                                src="../../../../images/div-iterateorbit3@2x.png"
                                             />
                                             <img
                                                className="div-iterate-orbit-5-icon"
                                                alt=""
                                                src="../../../../images/div-iterateorbit5@2x.png"
                                             />
                                             <div className="div-figma-design1">
                                                <textarea
                                                   className="similarity-icons"
                                                   placeholder="Find Similarity"
                                                   rows={8}
                                                   cols={16}
                                                   defaultValue={"                          "}
                                                />
                                                <div className="similarity-subtitle">
                                                   <div className="similarity-steps">
                                                      <div className="div-lofi-subhead1" />
                                                      <div className="similarity-step-details">
                                                         <div className="div-lofi-block-lg2" />
                                                         <div className="div-lofi-block-lg3" />
                                                      </div>
                                                   </div>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="raw-data-prompt">
                              <div className="div-w-node-05e3ca4f-c46f-f451">
                                 <div className="llms">LLM’s</div>
                                 <div className="structured-data-icon">
                                    <img
                                       className="div-ui-ai-genius-absolute-icon"
                                       loading="lazy"
                                       alt=""
                                       src="../../../../images/div-uiaigeniusabsolute.svg"
                                    />
                                    <div className="use-any-llm-container">
                                       <p className="use-any-llm">Use any LLM Model with</p>
                                       <p className="superduperdb">SuperDuperDB</p>
                                    </div>
                                 </div>
                              </div>
                              <div className="div-w-node-05e3ca4f-c46f-f452">
                                 <div className="feature-row">
                                    <div className="feature-item">
                                       <div className="automated-data-processing">
                                          Automated Data Processing
                                       </div>
                                       <div className="automate-the-pre-processing">
                                          Automate the pre-processing and cleaning of data for AI
                                          and ML operations
                                       </div>
                                    </div>
                                 </div>
                                 <div className="div-smart-element-frame">
                                    <div className="div-space-heading-category">
                                       <div className="div-space-gear-heading">
                                          <img className="image-space-gear-icon" alt="" />
                                          <img className="image-space-gear-icon1" alt="" />
                                          <b className="space-gear">Space Gear</b>
                                       </div>
                                       <div className="div-space-category-block">
                                          <div className="div-space-active-line" />
                                          <div className="gloves">Gloves</div>
                                          <div className="boots">Boots</div>
                                          <div className="helmet">Helmet</div>
                                          <div className="all">All</div>
                                       </div>
                                    </div>
                                    <div className="div-space-product-grid">
                                       <div className="div-space-product-row">
                                          <div className="div-space-block">
                                             <img
                                                className="image-space-product-image-icon"
                                                alt=""
                                                src="../../../../images/image-spaceproductimage@2x.png"
                                             />
                                          </div>
                                          <div className="div-space-block1">
                                             <img
                                                className="image-space-product-image-icon1"
                                                alt=""
                                                src="../../../../images/image-spaceproductimage@2x.png"
                                             />
                                          </div>
                                       </div>
                                       <div className="div-space-product-row1">
                                          <div className="div-space-block-details-inner">
                                             <b className="helmet1">Helmet</b>
                                             <div className="div3">$599.99</div>
                                          </div>
                                          <div className="div-space-block-details-inner1">
                                             <b className="gloves1">Gloves</b>
                                             <div className="div4">$199.99</div>
                                          </div>
                                       </div>
                                    </div>
                                    <div className="div-smart-element-0">
                                       <img
                                          className="fifile-text-icon"
                                          alt=""
                                          src="../../../../images/fifiletext.svg"
                                       />
                                       <input
                                          className="genius-tag"
                                          placeholder="RAW Data"
                                          type="text"
                                       />
                                       <div className="data-icon">
                                          <img
                                             className="image-smart-element-icon"
                                             alt=""
                                             src="../../../../images/image-smartelementicon.svg"
                                          />
                                       </div>
                                    </div>
                                    <div className="separator">
                                       <img
                                          className="fiarrow-down-icon"
                                          alt=""
                                          src="../../../../images/fiarrowdown.svg"
                                       />
                                    </div>
                                    <button className="div-smart-element-2">
                                       <div className="structured-data-icon1">
                                          <img
                                             className="shape-icon"
                                             alt=""
                                             src="../../../../images/shape.svg"
                                          />
                                       </div>
                                       <div className="div-smart-prompt-relative">
                                          <div className="structured-data">Structured Data</div>
                                       </div>
                                       <div className="data-icon1">
                                          <img
                                             className="image-smart-element-icon1"
                                             alt=""
                                             src="../../../../images/image-smartelementicon.svg"
                                          />
                                       </div>
                                    </button>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="functionality-column-pair1">
                           <div className="div-w-node-05e3ca4f-c46f-f453">
                              <div className="machine-learning">Machine Learning</div>
                              <div className="frame-parent4">
                                 <div className="frame-parent5">
                                    <div className="develop-train-and-deploy-mac-wrapper">
                                       <div className="develop-train-and">
                                          Develop, train, and deploy machine learning models
                                          directly with your database
                                       </div>
                                    </div>
                                    <div className="div-ds-modal-div-parent">
                                       <div className="div-ds-modal-div">
                                          <div className="database-details-wrapper">
                                             <div className="database-details">
                                                <div className="deployed-create-a-container">
                                                   <p className="deployed">Deployed</p>
                                                   <p className="create-a-superduperdb-model-ba">
                                                      <span>
                                                         <span className="create-a-superduperdb">
                                                            create a SuperDuperDB
                                                         </span>
                                                         <span className="model-based-on">
                                                            model based on Sentence Transformers
                                                         </span>
                                                      </span>
                                                   </p>
                                                </div>
                                                <img
                                                   className="image-ds-modal-icon"
                                                   alt=""
                                                   src="../../../../images/image-dsmodalicon.svg"
                                                />
                                             </div>
                                          </div>
                                          <div className="div-ds-modal-subhead" />
                                          <button className="link-ds-button">
                                             <div className="continue">Continue</div>
                                          </button>
                                       </div>
                                       <div className="interaction-content-wrapper">
                                          <div className="interaction-content">
                                             <div className="interaction-elements">
                                                <div className="interaction-toggle">
                                                   <div className="input-type-selector">
                                                      <div className="checkbox-input">
                                                         <div className="toggle-input">
                                                            <div className="div-ds-radio" />
                                                         </div>
                                                         <input className="checkbox" type="checkbox" />
                                                         <div className="div-ds-toggle">
                                                            <div className="div-ds-toggle-bg" />
                                                            <div className="div-ds-toggle-dot-2" />
                                                         </div>
                                                      </div>
                                                      <button className="link-ds-button1">
                                                         <div className="load">Load</div>
                                                      </button>
                                                      <button className="link-ds-button2">
                                                         <div className="status">Status</div>
                                                      </button>
                                                   </div>
                                                </div>
                                                <div className="div-ds-launchpad-1">
                                                   <img
                                                      className="div-ds-card-bg-icon"
                                                      loading="lazy"
                                                      alt=""
                                                      src="../../../../images/div-dscardbg@2x.png"
                                                   />
                                                   <div className="deployment-type">
                                                      <div className="dropdown-chevron">
                                                         <b className="scikit-learn">Scikit-Learn</b>
                                                         <div className="list-item">
                                                            <div className="train-and-apply">
                                                               Train and apply a
                                                            </div>
                                                            <div className="downstream-model">
                                                               downstream model
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </div>
                                                </div>
                                             </div>
                                             <div className="div-ds-dropdown-div">
                                                <div className="div-ds-dropdown">
                                                   <img
                                                      className="image-dropdown-planet-icon"
                                                      alt=""
                                                      src="../../../../images/image-dropdownplanet@2x.png"
                                                   />
                                                   <div className="aws-10-deploymentyaml">
                                                      aws-1.0-deployment.yaml
                                                   </div>
                                                   <img
                                                      className="image-ds-dropdown-chevron-icon"
                                                      alt=""
                                                      src="../../../../images/image-dsdropdownchevron.svg"
                                                   />
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                                 <div className="escape-item">
                                    <div className="div-ds-list">
                                       <div className="div-ds-list-item">
                                          <img
                                             className="image-ds-list-icon"
                                             loading="lazy"
                                             alt=""
                                             src="../../../../images/image-dslisticon.svg"
                                          />
                                          <div className="div-ds-list-div">
                                             <div className="transfer-learning">
                                                Transfer Learning
                                             </div>
                                             <div className="div-ds-list-subhead">
                                                <div className="sentence">Sentence</div>
                                                <div className="and-scikit-learn">
                                                   and Scikit-Learn
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                       <div className="div-ds-list-item1">
                                          <img
                                             className="image-ds-list-icon1"
                                             alt=""
                                             src="../../../../images/image-dslisticon-1.svg"
                                          />
                                          <div className="div-ds-list-div1">
                                             <div className="image-feature-database">
                                                Image Feature Database
                                             </div>
                                             <div className="div-ds-list-subhead1">
                                                <div className="the-power">The power</div>
                                                <div className="torchvision">torchvision</div>
                                             </div>
                                          </div>
                                       </div>
                                       <div className="div-ds-list-item2">
                                          <img
                                             className="image-ds-list-icon2"
                                             alt=""
                                             src="../../../../images/image-dslisticon-2.svg"
                                          />
                                          <div className="div-ds-list-div2">
                                             <div className="sentiment">Sentiment</div>
                                             <div className="div-ds-list-subhead2">
                                                <div className="analysis">Analysis</div>
                                                <div className="hugging-face">Hugging Face</div>
                                             </div>
                                          </div>
                                       </div>
                                       <div className="div-ds-list-item3">
                                          <img
                                             className="image-ds-list-icon3"
                                             alt=""
                                             src="../../../../images/image-dslisticon-3.svg"
                                          />
                                          <div className="div-ds-list-div3">
                                             <div className="mnist-predictions">
                                                MNIST Predictions
                                             </div>
                                             <div className="div-ds-list-subhead3">
                                                <div className="handwritten-digit-recognition">
                                                   Handwritten digit recognition
                                                </div>
                                                <div className="about-their-culture">
                                                   about their culture.
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                       <div className="div-ds-list-item4">
                                          <img
                                             className="image-ds-list-icon4"
                                             alt=""
                                             src="../../../../images/image-dslisticon-3.svg"
                                          />
                                          <div className="div-ds-list-div4">
                                             <div className="meet">Meet</div>
                                             <div className="div-ds-list-subhead4">
                                                <div className="get-a-better">
                                                   Get a better understanding of where your
                                                </div>
                                                <div className="traffic-is-coming">
                                                   traffic is coming from.
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                       <div className="div-ds-list-item5">
                                          <img
                                             className="image-ds-list-icon5"
                                             alt=""
                                             src="../../../../images/image-dslisticon-5.svg"
                                          />
                                          <div className="div-ds-list-div5">
                                             <div className="escape">Escape</div>
                                             <div className="div-ds-list-subhead5">
                                                <div className="get-a-better1">
                                                   Get a better understanding of where your
                                                </div>
                                                <div className="traffic-is-coming1">
                                                   traffic is coming from.
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div className="send-message-icon">
                                 <img
                                    className="image-ds-genius-cursor-arrow-icon"
                                    alt=""
                                    src="../../../../images/image-dsgeniuscursorarrow@2x.png"
                                 />
                                 <div className="div-ds-cursor-nametag-genius">
                                    <b className="genius">Genius</b>
                                    <img
                                       className="div-genius-cursor-icon"
                                       alt=""
                                       src="../../../../images/div-geniuscursoricon.svg"
                                    />
                                 </div>
                              </div>
                           </div>
                           <div className="div-w-node-05e3ca4f-c46f-f45-parent">
                              <div className="div-w-node-05e3ca4f-c46f-f454">
                                 <div className="quick-product-parent">
                                    <div className="quick-product">
                                       <p className="quick">Quick</p>
                                       <p className="product">Product</p>
                                    </div>
                                    <div className="quickly-setup-models">
                                       Quickly setup models in scripts and notebooks and deploy
                                       persistent services
                                    </div>
                                 </div>
                                 <div className="div-figma-corner-wrapper">
                                    <div className="div-figma-corner">
                                       <img
                                          className="div-genius-figma-grain-2-icon"
                                          alt=""
                                          src="../../../../images/div-geniusfigmagrain2@2x.png"
                                       />
                                       <div className="div-figma-tab-wrapper-parent">
                                          <div className="div-figma-tab-wrapper" />
                                          <div className="div-figma-toolbar-parent">
                                             <div className="div-figma-toolbar">
                                                <div className="div-figma-user-ring">
                                                   <div className="div-figma-user-leia">
                                                      <b className="l">L</b>
                                                   </div>
                                                </div>
                                                <div className="div-figma-user-ring1">
                                                   <div className="div-figma-user-neo">
                                                      <b className="n">N</b>
                                                   </div>
                                                </div>
                                                <div className="div-figma-user-ring2">
                                                   <div className="div-figma-user">
                                                      <b className="you1">You</b>
                                                   </div>
                                                </div>
                                                <div className="link-share-button-relative-wrapper">
                                                   <button className="link-share-button-relative">
                                                      <div className="div-share-button">
                                                         <div className="genius-image">
                                                            <img
                                                               className="div-share-button-stars-div-icon"
                                                               alt=""
                                                               src="../../../../images/div-sharebuttonstarsdiv@2x.png"
                                                            />
                                                            <img
                                                               className="div-share-particles-icon"
                                                               alt=""
                                                               src="../../../../images/div-shareparticles@2x.png"
                                                            />
                                                         </div>
                                                         <div className="div-share-glow-absolute">
                                                            <div className="div-generate-glow-line" />
                                                            <div className="div-generate-glow-line-blur" />
                                                         </div>
                                                         <div className="div-share-button-outline">
                                                            <div className="deploy">Deploy</div>
                                                         </div>
                                                      </div>
                                                   </button>
                                                </div>
                                             </div>
                                             <div className="right-panel">
                                                <div className="div-figma-right-panel">
                                                   <div className="div-cursor-nametag1">
                                                      <b className="you2">You</b>
                                                   </div>
                                                </div>
                                                <img
                                                   className="div-cursor-arrow-icon1"
                                                   alt=""
                                                   src="../../../../images/div-cursorarrow-1@2x.png"
                                                />
                                             </div>
                                          </div>
                                       </div>
                                       <div className="div-share-sheet">
                                          <div className="div-share-header">
                                             <div className="share">Share</div>
                                             <div className="placeholder">
                                                <div className="div-share-placeholder-text" />
                                             </div>
                                             <div className="div-share-placeholder-text1" />
                                          </div>
                                          <div className="share-options">
                                             <div className="option-row">
                                                <div className="option">
                                                   <div className="genius-option">
                                                      <img
                                                         className="div-figma-user-genius-lg-icon"
                                                         alt=""
                                                         src="../../../../images/div-figmausergeniuslg@2x.png"
                                                      />
                                                      <div className="genius-label">
                                                         <div className="genius1">Genius</div>
                                                      </div>
                                                   </div>
                                                </div>
                                                <div className="link-invite-button-relative">
                                                   <div className="div-invite-button">
                                                      <div className="invite-stars">
                                                         <img
                                                            className="div-gen-button-stars-div-icon"
                                                            alt=""
                                                            src="../../../../images/div-genbuttonstarsdiv@2x.png"
                                                         />
                                                         <button className="invite-particles">
                                                            <img
                                                               className="div-invite-particles-icon"
                                                               alt=""
                                                               src="../../../../images/div-inviteparticles@2x.png"
                                                            />
                                                            <div className="div-generate-button-outline">
                                                               <div className="invite">Invite</div>
                                                            </div>
                                                         </button>
                                                      </div>
                                                      <div className="div-invite-glow-absolute">
                                                         <div className="div-generate-glow-line1" />
                                                         <div className="div-generate-glow-line-blur1" />
                                                      </div>
                                                   </div>
                                                </div>
                                             </div>
                                          </div>
                                          <div className="collaborators">
                                             <div className="collaborator-row">
                                                <div className="collaborator">
                                                   <div className="div-figma-user1">
                                                      <b className="you3">You</b>
                                                   </div>
                                                   <div className="you-name">
                                                      <div className="you4">You</div>
                                                   </div>
                                                </div>
                                                <div className="collaborator1">
                                                   <div className="div-figma-user2">
                                                      <div className="l1">L</div>
                                                   </div>
                                                   <div className="leia-name">
                                                      <div className="leia">Leia</div>
                                                   </div>
                                                </div>
                                                <div className="collaborator2">
                                                   <div className="div-figma-user3">
                                                      <div className="n1">N</div>
                                                   </div>
                                                   <div className="neo-name">
                                                      <div className="neo">Neo</div>
                                                   </div>
                                                </div>
                                             </div>
                                             <div className="permissions">
                                                <div className="permission-row">
                                                   <div className="permission-item">
                                                      <div className="owner">owner</div>
                                                   </div>
                                                   <div className="can-edit">can edit</div>
                                                   <div className="can-edit1">can edit</div>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div className="div-w-node-05e3ca4f-c46f-f455">
                                 <div className="div-chat-flex-parent-internal">
                                    <div className="link-designchat-genius-6">
                                       <img className="image-chat-chevron-icon" alt="" />
                                       <b className="yes-design-an">
                                          Yes, design an iOS&nbsp;button
                                       </b>
                                    </div>
                                    <div className="chat-with-your-documents-wrapper">
                                       <div className="chat-with-your">
                                          Chat with your documents
                                       </div>
                                    </div>
                                    <div className="chat-feature">
                                       <div className="wrapper-div-chat-orbit-contai">
                                          <img
                                             className="div-chat-orbit-container-icon"
                                             alt=""
                                             src="../../../../images/div-chatorbitcontainer.svg"
                                          />
                                       </div>
                                       <div className="chat-description">
                                          <div className="talk-with-any">
                                             Talk with any document of your database
                                          </div>
                                       </div>
                                       <div className="chat-example">
                                          <div className="chat">
                                             <div className="chat-row">
                                                <div className="div-designchat-genius">
                                                   <div className="how-was-the">
                                                      How was the meeting yesterday?
                                                   </div>
                                                </div>
                                                <div className="user-name">
                                                   <div className="user-name-child" />
                                                   <i className="ana">Ana</i>
                                                </div>
                                             </div>
                                             <img
                                                className="div-designchat-genius-icon"
                                                loading="lazy"
                                                alt=""
                                                src="../../../../images/div-designchatgenius@2x.png"
                                             />
                                          </div>
                                          <div className="reply-row">
                                             <div className="reply-row-child" />
                                             <i className="ai">AI</i>
                                          </div>
                                       </div>
                                       <div className="div-chat-ui">
                                          <div className="div-chat-input-border" />
                                          <div className="div-chat-ui-inner">
                                             <div className="div-chat-ui-flex">
                                                <div className="div-chat-text-wrapper">
                                                   <div className="div-chat-text">
                                                      <div className="send-message">Send Message</div>
                                                   </div>
                                                </div>
                                                <div className="link-send-button-relative">
                                                   <div className="div-send-button">
                                                      <img
                                                         className="image-chat-send-icon"
                                                         alt=""
                                                         src="../../../../images/image-chatsendicon.svg"
                                                      />
                                                      <div className="div-send-glow-absolute">
                                                         <div className="div-chat-glow-line" />
                                                         <div className="div-chat-glow-line-blur" />
                                                      </div>
                                                      <div className="send-effects">
                                                         <img
                                                            className="div-send-button-stars-div-icon"
                                                            alt=""
                                                            src="../../../../images/div-sendbuttonstarsdiv@2x.png"
                                                         />
                                                         <img
                                                            className="div-chat-particles-icon"
                                                            alt=""
                                                            src="../../../../images/div-chatparticles@2x.png"
                                                         />
                                                         <div className="div-send-button-outline" />
                                                      </div>
                                                   </div>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                                 <div className="div-w-node-05e3ca4f-c46f-f45-inner">
                                    <div className="image-genius-cursor-arrow-inv-parent">
                                       <img
                                          className="image-genius-cursor-arrow-inv-icon"
                                          alt=""
                                          src="../../../../images/image-geniuscursorarrowinvite@2x.png"
                                       />
                                       <div className="div-cursor-nametag-genius-cha">
                                          <b className="genius2">Genius</b>
                                          <img
                                             className="div-genius-cursor-icon1"
                                             alt=""
                                             src="../../../../images/div-geniuscursoricon.svg"
                                          />
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="grid-header-footer-wrapper">
                        <div className="grid-header-footer">
                           <div className="footer-heading">
                              <h1 className="heading1">Databases compatibility</h1>
                              <img
                                 className="sparkle-1"
                                 alt=""
                                 src="../../../../images/sparkle.svg"
                              />
                           </div>
                           <div className="footer-docs">
                              <div className="docs-link">
                                 <i className="check-it-out">
                                    Check it out how to integrate in our docs
                                 </i>
                                 <img
                                    className="fiarrow-right-icon1"
                                    alt=""
                                    src="../../../../images/accent-arrow.svg"
                                 />
                              </div>
                           </div>
                        </div>
                     </div>
                  </section> */}
            <section className="logos-parent">
              <div className="logos"></div>
              <div className="logos1" />
              <div className="logos2"></div>
              <div className="logos3" />
              <div className="logos4" />
              <div className="logos5" />
              <div className="logos6" />
              <div className="logos7" />
              <img
                className="xoracle-icon"
                loading="lazy"
                alt=""
                src="../../../../images/2Xoracle.svg"
              />
              <img
                className="xsnowflake-icon"
                loading="lazy"
                alt=""
                src="../../../../images/2Xsnowflake.svg"
              />
              <img
                className="xmongodb-icon"
                loading="lazy"
                alt=""
                src="../../../../images/2Xmongodb.svg"
              />
              <img
                className="xmysql-icon"
                loading="lazy"
                alt=""
                src="../../../../images/2Xmysql.svg"
              />
              <img
                className="xpostgresql-icon"
                loading="lazy"
                alt=""
                src="../../../../images/2Xpostgresql.svg"
              />
              <img
                className="xsqlite-icon"
                loading="lazy"
                alt=""
                src="../../../../images/2Xsqlite.svg"
              />
              <img
                className="xaws-s3-icon"
                loading="lazy"
                alt=""
                src="../../../../images/2Xaws-s3.svg"
              />
              <img
                className="xduckdb-icon"
                loading="lazy"
                alt=""
                src="../../../../images/2Xduckdb.svg"
              />
            </section>
            <section className="benefits">
              <div className="benefits-header">
                <div className="benefits-title">
                  <h1 className="benefits-of-superduperdb">
                    Benefits of SuperDuperDB
                  </h1>
                  <div className="benefits-icon-wrapper">
                    <div className="benefits-icon">
                      <div className="benefit">
                        <i className="deploy-train-integrate">
                          Deploy, Train, Integrate, and Search with Ease
                        </i>
                      </div>
                      <img
                        className="ionarrow-forward-outline-icon"
                        alt=""
                        src="../../../../images/accent-arrow.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="benefit-cards">
                <div className="card">
                  <div className="image-card">
                    <div className="main-card">
                      <div className="content1">
                        <b className="python-native">Python-Native</b>
                        <div className="no-mlops-experience-container">
                          <p className="no-mlops-experience">
                            No MLOps experience needed.
                          </p>
                          <p className="apply-ai-with">
                            Apply AI with a few commands.
                          </p>
                        </div>
                        <div className="dividers" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card1">
                  <div className="image-card1">
                    <div className="main-card1">
                      <div className="content2">
                        <b className="framework-friendly">Framework-Friendly</b>
                        <div className="supports-pytorch-sklearn">
                          Supports PyTorch, Sklearn, HuggingFace, and more for easy
                          integration.
                        </div>
                        <div className="frame6" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card2">
                  <div className="image-card2">
                    <div className="main-card2">
                      <div className="content3">
                        <b className="extensible-ecosystem">Extensible Ecosystem</b>
                        <div className="flexible-and-customizable">
                          Flexible and customizable to fit diverse data and model
                          needs.
                        </div>
                        <div className="frame7" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card3">
                  <div className="image-card3">
                    <div className="main-card3">
                      <div className="content4">
                        <b className="simple-deployment">Simple Deployment</b>
                        <div className="deploy-ai-models">
                          Deploy AI models and compute outputs with Python commands in
                          one environment.
                        </div>
                        <div className="frame8" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card4">
                  <div className="image-card4">
                    <div className="main-card4">
                      <div className="content5">
                        <b className="effortless-training">Effortless Training</b>
                        <div className="directly-train-models">
                          Directly train models on your data without extra steps for
                          ingestion and pre-processing.
                        </div>
                        <div className="frame9" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card5">
                  <div className="image-card5">
                    <div className="main-card5">
                      <div className="content6">
                        <b className="seamless-integration">Seamless Integration</b>
                        <div className="easily-integrate-ai">
                          Easily integrate AI APIs, including OpenAI, enhancing model
                          cooperation.
                        </div>
                        <div className="frame10" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <img className="control-icon" alt="" src="../../../../images/control.svg" />
            <section className="integrations1">
              <div className="integrations-header">
                <div className="integrations-heading">
                  <h1 className="heading2">AI Integrations</h1>
                  <img className="sparkle-11" alt="" src="../../../../images/sparkle.svg" />
                </div>
                <div className="integrations-docs">
                  <div className="docs-link1">
                    <i className="check-it-out1">
                      Check it out how to integrate in our docs
                    </i>
                    <img
                      className="fiarrow-right-icon2"
                      alt=""
                      src="../../../../images/accent-arrow.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="integration-logos">
                {/* <div style="display: flex;flex-wrap: wrap;"> */}
                <div className="logo-row1">
                  <img
                    className="xpytorch-icon"
                    loading="lazy"
                    alt=""
                    src="../../../../images/2Xjina.svg"
                  />
                </div>
                <div className="logo-row1">
                  <img
                    className="xpytorch-icon"
                    loading="lazy"
                    alt=""
                    src="../../../../images/2Xpytorch.svg"
                  />
                </div>
                <div className="logo-row1">
                  <img
                    className="xpytorch-icon"
                    loading="lazy"
                    alt=""
                    src="../../../../images/2Xscikit-learn.svg"
                  />
                </div>
                <div className="logo-row1">
                  <img
                    className="xpytorch-icon"
                    loading="lazy"
                    alt=""
                    src="../../../../images/1681142315open-ai-logo 1.svg"
                  />
                </div>
                <div className="logo-row1">
                  <img
                    className="xpytorch-icon"
                    loading="lazy"
                    alt=""
                    src="../../../../images/2Xanthropic.jpg"
                  />
                </div>
                <div className="logo-row1">
                  <img
                    className="xpytorch-icon"
                    loading="lazy"
                    alt=""
                    src="../../../../images/2Xcohere.svg"
                  />
                </div>
                <div className="logo-row1">
                  <img
                    className="xpytorch-icon"
                    loading="lazy"
                    alt=""
                    src="../../../../images/2Xhuggingface-transformers.svg"
                  />
                </div>
                {/* </div> */}
              </div>
            </section>
          </div>
        </section>
        <section className="application-process">

          <div className="d-flex" >
            <div className="rectangle-parent">
              <div className="frame-child" />
              <div className="deployment-image">
                <div className="deployment-icon">
                  <div className="circle" />
                  <img
                    className="figit-pull-request-icon"
                    alt=""
                    src="../../../../images/fi_git-pull-request.svg"
                  />
                </div>
                <h2 className="an-end-to-end-ai">An end-to-end AI deployment</h2>
              </div>
              <div className="which-includes-a">
                Which includes a model repository &amp; registry as well as computation
                of outputs
              </div>
            </div>
            <div className="rectangle-parent">
              <div className="frame-child" />
              <div className="deployment-image">
                <div className="deployment-icon">
                  <div className="circle" />
                  <img
                    className="figit-pull-request-icon"
                    alt=""
                    src="../../../../images/fi_grid.svg"
                  />
                </div>
                <h2 className="an-end-to-end-ai">A model <br /> trainer</h2>
              </div>
              <div className="which-includes-a">
                Allowing you to easily train and fine-tune your models simply by
                querying your data(store)
              </div>
            </div>
            <div className="rectangle-parent">
              <div className="frame-child" />
              <div className="deployment-image">
                <div className="deployment-icon">
                  <div className="circle" />
                  <img
                    className="figit-pull-request-icon"
                    alt=""
                    src="../../../../images/fi_package.svg"
                  />
                </div>
                <h2 className="an-end-to-end-ai">A feature <br /> store</h2>
              </div>
              <div className="which-includes-a">
                In which the model outputs are stored in desired formats and types,
                instantly available in the datastore
              </div>
            </div>
            <div className="rectangle-parent">
              <div className="frame-child" />
              <div className="deployment-image">
                <div className="deployment-icon">
                  <div className="circle" />
                  <img
                    className="figit-pull-request-icon"
                    alt=""
                    src="../../../../images/fi_database.svg"
                  />
                </div>
                <h2 className="an-end-to-end-ai"> A vector <br /> database</h2>
              </div>
              <div className="which-includes-a">
                Enabling straightforward generation of vector embeddings on your data
                with your choice of models
              </div>
            </div>
            {/* <div className="rectangle-parent">
              <div className="trainer-header">
                <div className="trainer-title">
                  <div className="trainer-heading">
                    <h1 className="heading3">
                      <p className="superduperdb-transforms-your">
                        SuperDuperDB transforms your database into:
                      </p>
                    </h1>
                    <img
                      className="group-8-traced"
                      loading="lazy"
                      alt=""
                      src="../../../../images/into_underline.svg"
                    />
                  </div>
                </div>
                <div className="trainer-image">
                  <div className="trainer-image-child" />
                  <button className="trainer-icon">
                    <div className="circle1" />
                    <img className="figrid-icon" alt="" src="../../../../images/fi_grid.svg" />
                  </button>
                  <h2 className="a-model-trainer-container">
                    <p className="a-model">A model</p>
                    <p className="trainer">trainer</p>
                  </h2>
                  <div className="allowing-you-to">
                    Allowing you to easily train and fine-tune your models simply by
                    querying your data(store)
                  </div>
                </div>
              </div>
            </div>
            <div className="rectangle-parent">
              <div className="feature-image">
                <div className="feature-image-child" />
                <div className="feature-icon">
                  <button className="circle2">
                    <div className="icon" />
                    <img
                      className="fipackage-icon"
                      alt=""
                      src="../../../../images/fi_package.svg"
                    />
                  </button>
                </div>
                <h2 className="a-feature-store-container">
                  <p className="a-feature">A feature</p>
                  <p className="store">store</p>
                </h2>
                <div className="in-which-the-model-outputs-are-wrapper">
                  <div className="in-which-the">
                    In which the model outputs are stored in desired formats and types,
                    instantly available in the datastore
                  </div>
                </div>
              </div>
            </div>
            <div className="rectangle-parent">
              <div className="database-image">
                <div className="database-image-child" />
                <button className="database-icon">
                  <div className="circle3" />
                  <img
                    className="fidatabase-icon"
                    alt=""
                    src="../../../../images/fi_database.svg"
                  />
                </button>
                <div className="a-vector-database-wrapper">
                  <h2 className="a-vector-database">
                    A vector <br /> database
                  </h2>
                </div>
                <div className="enabling-straightforward-gener">
                  Enabling straightforward generation of vector embeddings on your data
                  with your choice of models
                </div>
              </div>
            </div> */}
          </div>
        </section>
        <section className="cta">
          <div className="c-t-a-container">
            <div className="c-t-a-content">
              <div className="frame11">
                <i className="have-a-project"> </i>
                <h1 className="lets-create-something">
                  Let’s create something awesome.
                </h1>
              </div>
              <button className="button6">
                <div className="button7">Get Started</div>
                <img
                  className="fiarrow-right-icon3"
                  alt=""
                  src="../../../../images/fi_arrow-right.svg"
                />
              </button>
            </div>
          </div>
        </section>
        <div className="footer-background">
          <img className="bg-2-1-icon1" alt="" src="../../../../images/bg-bottom.svg" />
        </div>
      </div>

    </MainLayout>
  );
};

export default HomePage;
