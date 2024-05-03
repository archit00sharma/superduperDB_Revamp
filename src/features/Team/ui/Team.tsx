import React from 'react';

import { staffIconImages, teamMemberImages, } from '../model/sectionData'

const Team = () => {
    return (
        <section className="team-content-wrapper">
            <div className="team-content">
                <div className="team-title-container">
                    <h1 className="get-to-know">Get to know us</h1>
                </div>
                <div className="team-description">
                    <div className="superduperdb-is-a">
                        SuperDuperDB is a 100% remote team. We believe that creative
                        collaboration can happen anywhere and want our team to work where
                        they feel most comfortable and inspired.
                    </div>
                </div>
                <div className="team-member-list">
                    {/* Loop through team member images */}
                    {teamMemberImages.map((image, index) => (
                        <img
                            key={index}
                            className={`team-member-set${index}`}
                            loading="lazy"
                            alt=""
                            src={image}
                        />
                    ))}
                </div>
                <div className="staff-grid-container">
                    <div className="staff-grid">
                        {/* Loop through staff icon images */}
                        {staffIconImages.map((image, index) => (
                            <img
                                key={index}
                                className={`staff-icons${index}`}
                                loading="lazy"
                                alt=""
                                src={image}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Team;
