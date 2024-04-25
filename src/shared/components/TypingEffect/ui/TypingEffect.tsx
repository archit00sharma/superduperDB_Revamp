// TypingEffect.jsx
import React, { useEffect, useState } from 'react';

import { CodeHighlighter } from 'shared/components/CodeHighlighter';

const TypingEffect: React.FC<{ code: string; startTyping: boolean }> = ({ code, startTyping }) => {
  const [typedCode, setTypedCode] = useState('');
  const [showAllCode, setShowAllCode] = useState(false);

  useEffect(() => {
    if (startTyping) {
      const codeLength = code.length;
      let currentLength = 0;

      const typingInterval = setInterval(() => {
        const currentCode = code.substring(0, currentLength);
        setTypedCode(currentCode);

        currentLength++;

        if (currentLength > codeLength) {
          clearInterval(typingInterval);
          setShowAllCode(true);
        }
      }, 20);

      return () => {
        clearInterval(typingInterval);
      };
    }
  }, [code, startTyping]);

  return <CodeHighlighter code={startTyping ? (showAllCode ? code : typedCode) : ''} />;
};

export default TypingEffect;
