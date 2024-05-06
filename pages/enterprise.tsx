import { FC, SetStateAction, useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

import { ImageAccordion } from 'features/ImageAccordian';
import { ImageAccordionCarousel } from 'features/ImageAccordionCarousel';
import Accordion from 'shared/components/Accordian/ui/Accordian';
import { metaData } from 'shared/constants';
import useGitHubRepoStats from 'shared/utils/useGitHubRepoStats';
import { MainLayout } from 'widgets/MainLayout';

import "../src/features/USPSection/ui/USPSection"


interface CustomCardProps {
  title: string;
  description: string;
  imageSrc: string;
  name?: string;
};

const CustomCard: React.FC<CustomCardProps> = ({ title, description, imageSrc, name }) => {
  return (
    <div className="slider-card">
      <img src={imageSrc} alt="" />
      <div className="content10">
        <b className="card-title1">{title}</b>
        <i className="description1">{description}</i>
        <div className="frame17">
          <img
            className="frame-icon"
            alt=""
            src="../../../../images/Rectangle.svg"
          />
          <div className="chaos-labs-wrapper">
            <div className="chaos-labs1">{name}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const cardData = [
  {
    title: 'Card title',
    description: 'Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis cillum dolor.',
    imageSrc: '../../../../images/Image_Block.svg',
    name: "Chaos Labs"
  },
  {
    title: 'Card title',
    description: 'Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis cillum dolor.',
    imageSrc: '../../../../images/Image_Block1.svg',
    name: "Chaos Labs"
  },
  {
    title: 'Card title',
    description: 'Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis cillum dolor.',
    imageSrc: '../../../../images/bell.svg',
    name: "Chaos Labs"
  },
  {
    title: 'Card title',
    description: 'Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis cillum dolor.',
    imageSrc: '../../../../images/Image_Block.svg',
    name: "Chaos Labs"
  },
  {
    title: 'Card title',
    description: 'Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis cillum dolor.',
    imageSrc: '../../../../images/Image_Block1.svg',
    name: "Chaos Labs"
  },
  {
    title: 'Card title',
    description: 'Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis cillum dolor.',
    imageSrc: '../../../../images/bell.svg',
    name: "Chaos Labs"
  },


];

const HomePage: FC = () => {

  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 2000,
    // responsive: [
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 3,
    //       slidesToScroll: 1,
    //       infinite: true,
    //       dots: true,
    //     },
    //   },
    //   {
    //     breakpoint: 768,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 1,
    //       initialSlide: 2,
    //     },
    //   },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       slidesToShow: 4,
    //       slidesToScroll: 1,
    //     },
    //   },
    // ],
  };
  const AccordianItems = [
    {
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, maiores laudantium incidunt, harum hic possimus minima fugiat temporibus a dolorum architecto quae nulla, eaque culpa nemo neque modi et dolorem.',
    },
    {
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, maiores laudantium incidunt, harum hic possimus minima fugiat temporibus a dolorum architecto quae nulla, eaque culpa nemo neque modi et dolorem.',
    },
    {
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, maiores laudantium incidunt, harum hic possimus minima fugiat temporibus a dolorum architecto quae nulla, eaque culpa nemo neque modi et dolorem.',
    },
    {
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, maiores laudantium incidunt, harum hic possimus minima fugiat temporibus a dolorum architecto quae nulla, eaque culpa nemo neque modi et dolorem.',
    },
    {
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, maiores laudantium incidunt, harum hic possimus minima fugiat temporibus a dolorum architecto quae nulla, eaque culpa nemo neque modi et dolorem.',
    },
    {
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, maiores laudantium incidunt, harum hic possimus minima fugiat temporibus a dolorum architecto quae nulla, eaque culpa nemo neque modi et dolorem.',
    },
  ];
  const listItems = [
    {
      title: 'Install any model and API',
      image: '../../../../images/bell.svg',
      content: 'Install any model and API on your database to feed them your data effortlessly'
    },
    {
      title: 'Forget building pipelines',
      image: '../../../../images/Image_Block1.svg',
      content: 'Forget building pipelines and simply define your model input and training data with database queries.'
    },
    {
      title: 'AI outputs stored in your db',
      image: '../../../../images/Image_Block.svg',
      content: 'AI outputs stored in your db so that they are organized and available for downstream applications and your teams.'
    },
    {
      title: 'Enable & Manage Vector Search',
      image: '../../../../images/bell.svg',
      content: 'Deploy your favorite models and APIs side-by-side to generate multi-modal vector embeddings of your data, storing them in your database automatically. Easily create vector indexes for your different applications.'
    },
    {
      title: 'Streaming inference',
      image: '../../../../images/Image_Block1.svg',
      content: 'Real time processing of new incoming data points keeping your AI workflows up-to-date instantly and immediately, always.'
    },
    {
      title: 'Model Self-Hosting',
      image: '../../../../images/Image_Block.svg',
      content: 'Install and host/deploy/run any Pytorch, Sklearn, HF transformer model with one command. Switch from an API like OpenAI to an internal model with another one'
    },
    {
      title: 'Model training/fine-tuning',
      image: '../../../../images/Image_Block.svg',
      content: 'Model training/fine-tuning on your data without. , ie trigger retraining after 1000x new entries in the defined collection or table/the database'
    },
    {
      title: 'Compatible and open',
      image: '../../../../images/Image_Block.svg',
      content: 'Leverage any Python package and major AI frameworks, tools and libraries to enhance your applications'
    },
    {
      title: 'Support of any data type',
      image: '../../../../images/Image_Block.svg',
      content: 'Store, retrieve and work with images, video, audio in your database, and any type which can be encoded as bytes in Python.'
    },
  ];

  const { starCount, forksCount } = useGitHubRepoStats();

  return (
    <MainLayout {...metaData.main}>
      <div data-page="enterprise">
        <section className="grid-parent">
          <img className="grid-icon" alt="" src="../../../../images/enterpriseGrid.svg" />
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

        <ImageAccordion listItems={listItems} />

        <ImageAccordionCarousel listItems={listItems} />

        <section className="new-grants-parent">
          <div className="new-grants">
            <iframe className='youtube-frame' src="https://www.youtube.com/embed/FxJs7pbHj3Q?si=cts4IY8eT5d4vD2u" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
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
                  View all
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="frame-wrapper4">
          <div className="frame16">
            <img className="grid-icon1" alt="" src="../../../../images/Grid.svg" />
            <div className="project-cards">
              <section className='slider-wrapper'>

                <Slider {...settings}>
                  {cardData.map((card, index) => (
                    <CustomCard
                      key={index}
                      title={card.title}
                      description={card.description}
                      imageSrc={card.imageSrc}
                      name={card.name}
                    />
                  ))}
                </Slider>
              </section>
            </div>
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
                    <div className="why-superduperdb">Why SuperDuperDB?</div>
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
                  <Accordion items={AccordianItems} />
                </div>
              </div>
              <div className="bottom-background" />

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
                          <h1 className="superduperdb-enterprise">
                            SuperDuperDB Enterprise
                          </h1>
                          <b className="if-you-are">
                            If you are a large company or team looking to build with
                            SuperDuperDB. Send us a message.
                          </b>
                        </div>

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
      </div >

    </MainLayout >
  );
};

export default HomePage;
