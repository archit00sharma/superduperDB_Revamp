import { FC } from 'react';


import { metaData } from 'shared/constants';
import { MainLayout } from 'widgets/MainLayout';

import "../src/features/USPSection/ui/USPSection"
import Slack from 'shared/components/Slack/ui/Slack';


const HomePage: FC = () => {


    return (
        <MainLayout {...metaData.main}>
            <div data-page="contact">
                <section className="form-background"></section>
                <section className="main-content">
                    <div className="contact-information-parent">
                        <div className="contact-information">
                            <div className="contact-details">
                                <h1 className="get-in-touch">Get in touch</h1>
                                <div className="our-team-would-be-love-to-hear-wrapper">
                                    <div className="our-team-would">
                                        Our team would be love to hear from you!
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="form-container">
                            <div className="form-container-child"></div>
                            <div className="form-structure">
                                <div className="name-input">
                                    <b className="your-name">YOUR NAME</b>
                                    <input className="name-value" placeholder="Vitalik Buterin" type="text" />
                                </div>
                            </div>
                            <div className="email-input">
                                <div className="email-structure">
                                    <b className="email-address">EMAIL ADDRESS</b>
                                    <input className="email-value" placeholder="vitalik@company.com" type="text" />
                                </div>
                                <div className="company-input">
                                    <b className="company-optional">COMPANY (OPTIONAL)</b>
                                    <input className="company-value" placeholder="One Solution LLC" type="text" />
                                </div>
                            </div>
                            <div className="message-input">
                                <div className="message-structure">
                                    <b className="message">MESSAGE</b>
                                    <textarea className="message-value" placeholder="Hi there, I would like to..." rows={7} cols={27}></textarea>

                                </div>
                            </div>
                            <div className="submit-button">
                                <button className="button2">
                                    <b className="submit-label">Send</b>
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="rectangle-parent">
                    <div className="frame-child"></div>
                    <div className="engagement-header">
                        <h1 className="contact-us">Contact us</h1>
                        <div className="get-in-touch1">
                            Get in touch and let us know how we can help.
                        </div>
                    </div>
                    <div className="engagement-options">
                        <div className="option-structure">
                            <div className="option-structure-child"></div>
                            <div className="option-alignment-parent">
                                <button className="option-alignment">
                                    <div className="option-details">
                                        <div className="option-icons"></div>
                                        <img className="store-1-icon" alt="" src="../../../../images/store.svg" />
                                    </div>
                                </button>
                                <div className="option-descriptions">
                                    <h3 className="enterprise">Enterprise</h3>
                                </div>
                            </div>
                            <div className="wed-love-to">
                                We'd love to talk about how we can work together.
                            </div>
                            <button className="contact-btn">
                                <div className="action-label">Contact</div>
                                <img className="" alt="" src="../../../../images/arrow-right.svg" />
                            </button>
                        </div>
                        <div className="option-structure1">
                            <div className="option-structure-item"></div>
                            <div className="frame-parent">
                                <button className="frame-wrapper">
                                    <div className="ellipse-parent">
                                        <div className="frame-item"></div>
                                        <img className="user-headset-1-icon" alt="" src="../../../../images/user-headset.svg" />
                                    </div>
                                </button>
                                <div className="help-support-wrapper">
                                    <h3 className="help-support">Help & Support</h3>
                                </div>
                            </div>
                            <div className="get-in-touch2">
                                Get in touch and let us know how we can help.
                            </div>
                            <button className="contact-btn">
                                <div className="action-label">Slack</div>
                                <img className="" alt="" src="../../../../images/arrow-right.svg" />
                            </button>
                        </div>
                        <div className="option-structure2">
                            <div className="option-structure-inner"></div>
                            <div className="frame-group">
                                <button className="frame-container">
                                    <div className="ellipse-group">
                                        <div className="frame-inner"></div>
                                        <img className="newspaper-1-icon" alt="" src="../../../../images/newspaper.svg" />
                                    </div>
                                </button>
                                <div className="media-press-wrapper">
                                    <h3 className="media-press">Media & Press</h3>
                                </div>
                            </div>
                            <div className="get-superduperdb-news">
                                Get SuperDuperDB news, company info, and media resources.
                            </div>
                            <button className="contact-btn">
                                <div className="action-label">E-mail</div>
                                <img className="" alt="" src="../../../../images/arrow-right.svg" />
                            </button>
                        </div>
                    </div>
                </section>
                <section className="subscription">
                    <div className="subscription-content">
                        <div className="subscription-content-child"></div>
                        <div className="subscription-header">
                            <h1 className="stay-in-the-container">
                                <p className="stay-in-the">Stay in the loop</p>
                            </h1>
                            <div className="sign-up-for-our-mailing-list-f-wrapper">
                                <div className="sign-up-for-container">
                                    <p className="sign-up-for">
                                        Sign up for our mailing list for the latest news, updates,
                                        features and integrations.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="subscription-input">
                            <div className="input-fields">
                                <div className="rectangle-group">
                                    <div className="rectangle-div"></div>
                                    <div className="email-field">
                                        <div className="enter-your-email">Enter your email</div>
                                    </div>
                                    <button className="button6">
                                        <b className="submit-label1">Sign Up</b>
                                    </button>
                                </div>
                                <div className="you-can-unsubscribe">
                                    You can unsubscribe at any time.
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            
           <Slack/>

        </MainLayout>
    );
};

export default HomePage;
