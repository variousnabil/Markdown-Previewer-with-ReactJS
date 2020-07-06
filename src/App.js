import React from 'react';
import './App.css';
import marked from 'marked';

const markdownExample = `# Welcome to my React Markdown Previewer! 
\n\n## This is a sub-heading...
\n\n[go to my github](https://github.com/variousnabil)<br>
\n\n Heres some code, \`<div></div>\`, between 2 backticks.
\n\n \`\`\`
function anotherExample(firstLine, lastLine) {
  if (firstLine == 'hello' && lastLine == 'world') {
    return multiLineCode;
  }
}
\`\`\` 
\n\n - list example
\n\n - list example
\n\n - list example
\n\n > blockquote example
\n\n ![React Logo w/ Text](https://goo.gl/Umyytc)
\n\n **bolded text**
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: markdownExample
    };
  }
  handleChange = (e) => {
    this.setState({
      text: e.target.value
    });
    document.querySelector("#preview").innerHTML = marked(e.target.value);
  };
  componentDidMount() {
    // on first page load
    (function () {
      const editor = document.querySelector('#editor');
      document.querySelector("#preview").innerHTML = marked(editor.value);
    })();
  }
  render() {
    return (
      <div className="container">
        <h1> Markdown Converter </h1>
        <div className="row">
          <form>
            <textarea
              id="editor"
              onChange={this.handleChange}
              value={this.state.text}
            />
          </form>
        </div>
        <div className="row">
          <div id="preview">{this.state.result}</div>
        </div>
      </div>
    );
  }
}

export default App;
