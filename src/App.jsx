import React, { useState } from 'react';
import Editor from './components/Editor';
import Preview from './components/Preview';
import './styles/App.scss';

const App = () => {
  const [markdown, setMarkdown] = useState('# Welcome to my Markdown Previewer!');

  const handleChange = (e) => {
    setMarkdown(e.target.value);
  };

  return (
    <div className="app container-fluid">
      <div className="row">
        <div className="col-md-6">
          <h2>Editor</h2>
          <Editor markdown={markdown} handleChange={handleChange} />
        </div>
        <div className="col-md-6">
          <h2>Previewer</h2>
          <Preview markdown={markdown} />
        </div>
      </div>
    </div>
  );
};

export default App;