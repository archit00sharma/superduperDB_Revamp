/* eslint-disable prettier/prettier */
import React, { useEffect, useRef, useState } from 'react';

import { DBSlider } from 'features/DBSlider';
import { TypingEffect } from 'shared/components/TypingEffect';

import './build-ai-section.scss';
import { build_a_text_heading } from '../model/sectionData'




interface BuildAISectionProps {
  section: string;
};

const BuildAISection: React.FC<BuildAISectionProps> = ({ section }) => {
  const code = `from superduperdb import superduper 
from superduperdb.mongodb import Collection 
import pymongo 
  
my_db = superduper(pymongo.MongoClient().my_db) 
r = my_db.execute(
    Collection('docs')
        .like({'txt': 'similar to this'})
        .find_one()
)
`;

  const [isVisible, setIsVisible] = useState(false);
  const [startTyping, setStartTyping] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            setStartTyping(true)
          }
        });
      },
      { threshold: 0, root: null }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className='build-ai__container'>

      <DBSlider section={section} />

      <div className="build-ai">
        <div className="build-ai__code">
          <TypingEffect code={code} startTyping={startTyping} />
        </div>
        <div className="build-ai__text">
          <h2>{build_a_text_heading[section]}</h2>
          <p>
            A single scalable deployment of all your AI models and APIs which is automatically kept
            up-to-date as new data is processed immediately.
          </p>
        </div>
      </div>

    </section>
  );
};

export default BuildAISection;
