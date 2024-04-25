
import React, { useEffect, useRef, useState } from 'react';


import { TypingEffect } from 'shared/components/TypingEffect';

import './vectorDatabase-section.scss';
import { vectorDatabaseHeading } from '../model/sectionData';


interface VectorDatabaseSectionProps {
  section: string;
}

const VectorDatabaseSection: React.FC<VectorDatabaseSectionProps> = ({ section }) => {
  const code = `from superduperdb import Listener, VectorIndex
from superduperdb.ext.openai import OpenAIEmbedding

db.add(
    VectorIndex(
        identifier='my-index',
        indexing_listener=Listener(
            model=OpenAIEmbedding(model='text-embedding-ada-002'),
            key='txt',
            select=Collection('documents').find(),
        ),
    )
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
      { threshold: 0, root: null } // You may adjust the threshold as needed
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
    <section ref={sectionRef} className={`vector_database__container ${isVisible ? 'visible' : ''}`}>

      <div className="vector_database">
        <div className="vector_database__text">
          <h2>{vectorDatabaseHeading[section]}</h2>
          <p>
            No need to introduce an additional database and duplicate your data to use vector search and build on top of it. SuperDuperDB enables vector search in your existing database.
          </p>
        </div>
        <div className="vector_database__code">

        <TypingEffect code={code} startTyping={startTyping} />

        </div>
      </div>

    </section>
  );
};

export default VectorDatabaseSection;
