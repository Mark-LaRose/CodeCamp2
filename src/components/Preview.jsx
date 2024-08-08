import React from 'react';
import marked from 'marked';

const Preview = ({ markdown }) => {
  return (
    <div id="preview" className="preview-container" dangerouslySetInnerHTML={{ __html: marked(markdown) }} />
  );
};

export default Preview;