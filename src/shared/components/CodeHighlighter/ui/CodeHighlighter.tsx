/* eslint-disable prettier/prettier */
import hljs from 'highlight.js';
import 'highlight.js/styles/felipec.css';
import { FC, useEffect } from 'react';

import './code-highlighter.scss';

interface CodeHighlighterProps {
  code: string;
  className?: string;
  codeClassName?: string;
}

const CodeHighlighter: FC<CodeHighlighterProps> = ({ code, className, codeClassName }) => {
  useEffect(() => {
    hljs.highlightAll();
  }, [code]);

  return (
    <pre className={className ?? 'highlighter'}>
      <code className={codeClassName ?? 'language-python'}>{code}</code>
    </pre>
  );
};

export default CodeHighlighter;
