import React, { useState } from 'react';
import Editor from './components/Editor';
import Preview from './components/Preview';
import './styles/App.scss';

const App = () => {
  const [markdown, setMarkdown] = useState(`# Welcome to my Markdown Previewer!

## This is a sub-heading...

### And here's some other cool stuff:

Here's some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!

Or _italic_.

Or... wait for it... **_both!_**

And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. But the list goes on...

![React Logo w/ Text](https://goo.gl/Umyytc)

`);

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