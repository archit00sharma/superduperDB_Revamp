import React from 'react';

interface TestimonialProps {
    quote: string;
    authorName: string;
    authorRole: string;
    authorPhoto: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, authorName, authorRole, authorPhoto }) => (
    <div className="quote-cards">
        <div className="quote-cards-child"></div>
        <div className="ut-enim-ad-minim-veniam-quis-wrapper">
            <div className="ut-enim-ad">
                {quote}
            </div>
        </div>
        <div className="author-info">
            <div className="author-details">
                <img className="author-photos-icon" loading="lazy" alt="" src={authorPhoto} />

                <div className="author-data">
                    <div className="author-names">
                        <h3 className="author-name">{authorName}</h3>
                        <div className="author-role">{authorRole}</div>
                    </div>
                </div>
            </div>
            <div className="company-logo">
                <img className="company-logo-child" loading="lazy" alt="" src="../../../../images/rating.svg" />
            </div>
        </div>
    </div>
);

const Testimonials = () => {
    return (
        <section className="testimonial-container-wrapper">
            <div className="testimonial-container">
                <div className="testimonial-header">
                    <h1 className="testimonials">Testimonials</h1>
                </div>
                <div className="testimonial-cards">
                    <Testimonial
                        quote="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                        authorName="Rodrigo Duarte"
                        authorRole="Product Owner"
                        authorPhoto="../../../../images/testuser1.svg"
                    />
                    <Testimonial
                        quote="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                        authorName="Ivone Josan"
                        authorRole="Senior Engineer"
                        authorPhoto="../../../../images/testuser2.svg"
                    />
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
