// src/App.js
import React from 'react';
import CodeEditor from './CodeEditor';

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Simple Code Editor</h1>
      <p>A simple no-frills code editor with syntax highlighting.</p>
      <CodeEditor />
    </div>
  );
};

export default App;
