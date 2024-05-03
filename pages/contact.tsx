
import { FC } from 'react';

import Slack from 'shared/components/Slack/ui/Slack';
import { metaData } from 'shared/constants';
import { MainLayout } from 'widgets/MainLayout';

import "../src/features/USPSection/ui/USPSection"

const engagementOptions = [
    {
        icon: "../../../../images/store.svg",
        title: "Enterprise",
        description: "We'd love to talk about how we can work together.",
        actionLabel: "Contact"
    },
    {
        icon: "../../../../images/user-headset.svg",
        title: "Help & Support",
        description: "Get in touch and let us know how we can help.",
        actionLabel: "Slack"
    },
    {
        icon: "../../../../images/newspaper.svg",
        title: "Media & Press",
        description: "Get SuperDuperDB news, company info, and media resources.",
        actionLabel: "E-mail"
    }
];

interface EngagementOptionProps {
    icon: string;
    title: string;
    description: string;
    actionLabel: string;
}

const EngagementOption: React.FC<EngagementOptionProps> = ({ icon, title, description, actionLabel }) => (
    <div className="option-structure">
        <div className="option-alignment-parent">
            <button className="option-alignment">
                <div className="option-details">
                    <div className="option-icons"></div>
                    <img className="store-1-icon" alt="" src={icon} />
                </div>
            </button>
            <div className="option-descriptions">
                <h3 className="enterprise">{title}</h3>
            </div>
        </div>
        <div className="wed-love-to">{description}</div>
        <button className="contact-btn">
            <div className="action-label">{actionLabel}</div>
            <img className="" alt="" src="../../../../images/arrow-right.svg" />
        </button>
    </div>
);

const EngagementOptions = () => (
    <div className="engagement-options">
        {engagementOptions.map((option, index) => (
            <EngagementOption
                key={index}
                icon={option.icon}
                title={option.title}
                description={option.description}
                actionLabel={option.actionLabel}
            />
        ))}
    </div>
);


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
                    <div className="engagement-header">
                        <h1 className="contact-us">Contact us</h1>
                        <div className="get-in-touch1">
                            Get in touch and let us know how we can help.
                        </div>
                    </div>

                    <EngagementOptions />
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

            <Slack />

        </MainLayout>
    );
};

export default HomePage;
