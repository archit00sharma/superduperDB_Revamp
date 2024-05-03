import axios from 'axios';
import Link from 'next/link';
import { FC } from 'react';
import { useEffect, useState, } from 'react';

import { LetsCreate } from 'shared/components/LetsCreate';
import Slack from 'shared/components/Slack/ui/Slack';
import { metaData } from 'shared/constants';
import useGitHubRepoStats from 'shared/utils/useGitHubRepoStats';
import { MainLayout } from 'widgets/MainLayout';

import "../src/features/USPSection/ui/USPSection"

import { Button } from 'shared/components/Button';





const HomePage: FC = () => {
  const { starCount, forksCount } = useGitHubRepoStats();
  const databases = [
    { src: '../../../../images/2Xpostgresql.svg' },
    { src: '../../../../images/2Xsqlite.svg' },
    { src: '../../../../images/2Xsnowflake.svg' },
    { src: '../../../../images/2Xmysql.svg' },
    { src: '../../../../images/2Xaws-s3.svg' },
    { src: '../../../../images/2Xmongodb.svg' },
    { src: '../../../../images/2Xoracle.svg' },
    { src: '../../../../images/2Xduckdb.svg' }
  ];
  const integrations = [
    { src: '../../../../images/2Xjina.svg' },
    { src: '../../../../images/2Xpytorch.svg' },
    { src: '../../../../images/2Xscikit-learn.svg' },
    { src: '../../../../images/1681142315open-ai-logo 1.svg' },
    { src: '../../../../images/2Xanthropic.jpg' },
    { src: '../../../../images/2Xcohere.svg' },
    { src: '../../../../images/2Xhuggingface-transformers.svg' },
    { src: '../../../../images/2Xhuggingface-transformers.svg' }
  ];

  const transforms = [
    {
      imagePath: '../../../../images/fi_git-pull-request.svg',
      title: 'An end-to-end AI deployment',
      description: 'Which includes a model repository & registry as well as computation of outputs'
    },
    {
      imagePath: '../../../../images/fi_grid.svg',
      title: 'A model <br> trainer',
      description: 'Allowing you to easily train and fine-tune your models simply by querying your data(store)'
    },
    {
      imagePath: '../../../../images/fi_package.svg',
      title: 'A feature <br> store',
      description: 'In which the model outputs are stored in desired formats and types, instantly available in the datastore'
    },
    {
      imagePath: '../../../../images/fi_database.svg',
      title: 'A vector database',
      description: 'Enabling straightforward generation of vector embeddings on your data with your choice of models'
    }
  ];

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
                        <div className="header-wrapper">
                          <h1 className="main-heading">
                            Build, deploy and manage any AI on your existing <span className='position-relative'>data
                              <img
                                className="line-1"
                                loading="lazy"
                                alt=""
                                src="../../../../images/homeunderline.svg"
                              />
                            </span> infrastructure
                          </h1>
                        </div>
                        <div className="sub-header-wrapper">
                          <div className="sub-header">
                            <p className="sub-para">
                              <i className="sub-text">
                                SuperDuperDB is unifying platform for faster, more secure and more scalable AI development and deployment, <i className="text-light">
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
                          <Link href="/enterprise" style={{ textDecoration: 'none' }}>
                            <div className="button3">Enterprise</div>
                          </Link>
                        </button>
                        <Link style={{ textDecoration: 'none' }} href="https://github.com/SuperDuperDB/superduperdb" target="_blank" rel="noopener noreferrer">
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
                        </Link>
                      </div>
                    </div>
                    <div className="frame5">
                      <div className="features-grid">
                        <div className="features-column">
                          <div className="div">{starCount !== null ? starCount : 'Loading...'} ★</div>
                          <div className="github-open-source">GitHub Open Source</div>
                        </div>
                        <div className="features-column1">
                          <div className="div1">{forksCount !== null ? forksCount : 'Loading...'}+</div>
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
            </section>
            <section className='not-a-database'>
              <img className="database-grid" alt="" src="../../../../images/database-grid.svg" />
              <div className="wrapper-grid-header-parent">
                <img
                  className="down-arrow-icon"
                  loading="lazy"
                  alt=""
                  src="../../../../images/Down arrow.svg"
                />
              </div>
              <div className='database-head'>
                SuperDuperDB
                <img className="sparkle-1" alt="" src="../../../../images/sparkle.svg" />
                <br />
                is not a database
              </div>
              <div className='database-title'>
                <i>SuperDuperDB integrates with major databases, <br />
                  facilitating data transfer to AI models APIs and frameworks.</i>
              </div>
              <div className="database-logos">
                {databases.map((database, index) => (
                  <div key={index} className="logo-row1">
                    <img
                      className="database-logo"
                      loading="lazy"
                      src={database.src}
                      alt={`Logo ${index}`} // Add alt attribute for accessibility
                    />
                  </div>
                ))}
              </div>
            </section>
            <section className="benefits">
              <div className="benefits-header">
                <div className="benefits-title">
                  <h1 className="benefits-of-superduperdb">
                    Why SuperDuperDB
                  </h1>

                </div>
              </div>
              <div className="benefit-cards">
                <div className="card">
                  <div className="image-card">
                    <div className="main-card">
                      <div className="content1">
                        <b className="card-header">Faster Development of more robust AI apps</b>
                        <div className="card-text">
                          SuperDuperDB allows developers to configure AI workflows directly on their data. A declarative interface and modular architecture simplifies implementing custom AI workflows effortlessly using building blocks and reusable components. Leveraging our abstractions and plugins users can prototype super fast while still being able to drill down to any layer of customization, while producing high-quality code. Work with and leverage any Python package and major AI frameworks, tools and libraries. Flexibility accommodating the specific needs of different use-cases, data types and environments.
                        </div>
                        <div className="dividers" />
                        <img className="" alt="" src="../../../../images/card-icon.svg" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="image-card1">
                    <div className="main-card">
                      <div className="content2">
                        <b className="card-header">Streamlined state-of
                          the art deployment </b>
                        <div className="card-text">
                          A single scalable environment of based on state-of-the art deployment technologies.
                          <br />
                          Facilitating distributed compute allows for maximum scalability and efficiency.
                          <br />
                          No setup of repetitive infrastructure and setup of ETL/data pipelines with every new application.
                          <br />
                          One deployment to serve them all.
                          <ul className='list-padding'>
                            <li>
                              Parameterizable Charts: expose only parameters that make sense.
                            </li>
                            <li>NodeGroups: cluster physical machines into cluster groups.</li>
                            <li>Workergroup: Assign cluster groups to ray worker groups.</li>
                            <li>Distributed Computing</li>
                            <li>Deploy Inference and training as REST API</li>
                            <li>Automation: Kubernetes operator for the deployment of AI Stack</li>
                            <li>Observability: Combine metrics from AI workflows with system Metrics</li>
                            <li>Single-Sign-One: login once and get access to the services.</li>
                            <li>Moreover, it leverages distributed computing capabilities to intelligently distribute tasks across machine clusters, thereby minimizing processing durations and optimizing reswource utilization for intensive AI tasks like model training and data analysis.</li>
                          </ul>



                        </div>
                        <div className="frame6" />
                        <img className="" alt="" src="../../../../images/card-icon.svg" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="image-card2">
                    <div className="main-card">
                      <div className="content3">
                        <b className="card-header">A single platform for all enterprise AI </b>
                        <div className="card-text">
                          SuperDuperDB revolutionizes the landscape of enterprise AI applications by offering a singular, comprehensive platform that eliminates the need for switching between tools and environments. Ideal for companies of any size and industry, SuperDuperDB empowers users to effortlessly tackle diverse AI challenges, making it the ultimate solution for organizations seeking to streamline their AI workflows and achieve maximum efficiency and truly own their AI stack.

                        </div>
                        <div className="frame7" />
                        <img className="" alt="" src="../../../../images/card-icon.svg" />

                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </section>
            <section className="integrations1">
              <img className="integration-grid" alt="" src="../../../../images/database-grid.svg" />

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
                {integrations.map((intIcon, index) => (
                  <div key={index} className="logo-row1">
                    <img
                      className="integration-icon"
                      loading="lazy"
                      src={intIcon.src}
                    />
                  </div>
                ))}
              </div>
            </section>
          </div>
        </section>
        <section className="application-process">
          <img className="transform-grid" alt="" src="../../../../images/database-grid.svg" />
          <div className="trainer-heading">
            <h1 className="heading3">
              <p className="superduperdb-transforms-your">
                SuperDuperDB transforms your <span className='data-line'>database <img
                  className="group-8-traced"
                  loading="lazy"
                  alt=""
                  src="../../../../images/into_underline.svg"
                /></span> into:
              </p>
            </h1>
          </div>
        </section>
        <div className="d-flex" >
          {transforms.map((transform, index) => (
            <div key={index} className="rectangle-parent">
              <div className="transform-header">
                <div className="deployment-icon">
                  <img
                    className="transform-icon"
                    alt=""
                    src={transform.imagePath}
                  />
                </div>
                <h2 className="transform-title" dangerouslySetInnerHTML={{ __html: transform.title }}></h2>
              </div>
              <div className="transform-text">{transform.description}</div>
            </div>
          ))}
        </div>
        <LetsCreate />
        <div className="footer-background">
          <img className="bg-2-1-icon1" alt="" src="../../../../images/bg-bottom.svg" />
        </div>
      </div>
      <Slack />

    </MainLayout>
  );
};

export default HomePage;
