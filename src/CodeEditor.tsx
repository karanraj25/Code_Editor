// src/CodeEditor.tsx
import React, { useState, ChangeEvent } from 'react';
import Prism from 'prismjs';
import "prismjs/themes/prism.css";
import "./CodeEditor.css";

const CodeEditor: React.FC = () => {
  const [code, setCode] = useState<string>('');

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setCode(event.target.value);
  };

  return (
    <div className="code-editor">
      <textarea
        className="code-input"
        value={code}
        onChange={handleChange}
        spellCheck="false"
        placeholder="Start typing your code here..."
        onFocus={(e) => e.target.setSelectionRange(e.target.value.length, e.target.value.length)}
      />
      <pre className="code-output">
        <code
          className="language-js"
          dangerouslySetInnerHTML={{ __html: Prism.highlight(code, Prism.languages.javascript, 'javascript') }}
        />
      </pre>
    </div>
  );
};

export default CodeEditor;
