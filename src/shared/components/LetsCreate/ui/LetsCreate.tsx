import React from 'react';

import "./LetsCreate.scss"

const LetsCreate = () => {
    return (
        <section className="cta-wrapper">
            <div className="cta">
                <div className="c-t-a-wrapper">
                    <div className="frame">
                        <div className="frame1">
                            <h1 className="lets-create-something">Let&#39;s create something awesome.</h1>
                        </div>
                        <button className="button-wrapper">
                            <div className="button-text">Get Started</div>
                            <img className="fiarrow-right-icon" alt="" src="../../../../images/getstartedarrow-right.svg" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LetsCreate;