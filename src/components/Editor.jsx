import React from 'react';

const Editor = ({ markdown, handleChange }) => {
  return (
    <div className="editor-container">
      <textarea id="editor" className="form-control" value={markdown} onChange={handleChange} />
    </div>
  );
};

export default Editor;