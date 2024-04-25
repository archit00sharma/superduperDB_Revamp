import React, { useEffect } from 'react';

import { CodeHighlighter } from 'shared/components/CodeHighlighter';

import './code-tabs.scss';

interface CodeTab {
  label: string;
  code: string;
  paragraphId: string;
}

interface CodeTabsProps {
  tabsData: CodeTab[];
  activeTab: number;
  isMouseOver: boolean;
  setIsMouseOver: React.Dispatch<React.SetStateAction<boolean>>;
  setActiveTab: (index: number) => void;
}

const CodeTabs: React.FC<CodeTabsProps> = ({ tabsData, activeTab, setActiveTab }) => {
  const switchTab = (index: number) => {
    setActiveTab(index);
  };

  useEffect(() => {
    const highlightedParagraphId = tabsData[activeTab].paragraphId;
    const highlightedParagraph = document.getElementById(highlightedParagraphId);

    if (highlightedParagraph) {
      const keywords = highlightedParagraph.querySelectorAll('.keywords');

      keywords.forEach((keyword) => {
        keyword.classList.add('highlighted');
      });

      tabsData.forEach((tab, index) => {
        if (index !== activeTab) {
          const paragraph = document.getElementById(tab.paragraphId);

          if (paragraph) {
            const keywords = paragraph.querySelectorAll('.keywords');
            keywords.forEach((keyword) => {
              keyword.classList.remove('highlighted');
            });
          }
        }
      });
    }
  }, [activeTab, tabsData]);

  return (
    <div className="code-tabs__container">
      <div className="code-tabs__tabs">
        {tabsData.map((tab, index) => (
          <div
            key={index}
            className={`code-tabs__tab ${index === activeTab ? 'code-tabs__tab_active' : ''}`}
            onClick={() => switchTab(index)}
          >
            {tab.label}
          </div>
        ))}
      </div>
      <div className="code-tabs__content">
        <CodeHighlighter className="code-tabs__highlighter" code={tabsData[activeTab].code} />
      </div>
    </div>
  );
};

export default CodeTabs;
