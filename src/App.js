import React, { Component } from 'react';
import './App.css';
import CodeMirror from 'react-codemirror';
require('codemirror/lib/codemirror.css');
require('codemirror/mode/javascript/javascript');
require('codemirror/mode/xml/xml');
require('codemirror/mode/markdown/markdown');
require('codemirror/addon/display/placeholder');

// var defaults = {
// 	markdown: '# Heading\n\nSome **bold** and _italic_ text\nThis is some text',
// 	javascript: 'var component = {\n\tname: "react-codemirror",\n\tauthor: "Jed Watson",\n\tJust some more text'
// };

class App extends Component {
    constructor(props){
      super(props)
      this.state = {
        code: '',
        readOnly: false,
        mode: "markdown",

      }
      this.updateCode = this.updateCode.bind(this);
      this.changeMode = this.changeMode.bind(this);
      this.toggleReadOnly = this.toggleReadOnly.bind(this);
      this.saveCode = this.saveCode.bind(this);
    }
    updateCode(newCode){
      this.setState({
          code: newCode
      })
    }
    changeMode(e) {
  		var mode = e.target.value;
  		this.setState({
  			mode: mode,
  			code: this.state.code
  		})
  	}
    toggleReadOnly () {
  		this.setState({
  			readOnly: !this.state.readOnly
  		})
	  }
    saveCode(){
      console.log(this.state.code);
    }
    render() {
      var options = {
        lineNumbers: true,
        readOnly: this.state.readOnly,
			  mode: this.state.mode,
        placeholder: "paste your snippet here..."
    }
    return (
      <div className="App">
          <CodeMirror
            className="editor"
            ref="editor"
            options={options}
            onChange={this.updateCode}
            interact={this.interact}
            value={this.state.code}
            />
          <div className="editor-button">
    					<button type="button" onClick={this.changeMode} value="markdown">
                Markdown
    					</button>
    					<button type="button" onClick={this.changeMode} value="javascript">
                Javascript
    					</button>
    					<button onClick={this.toggleReadOnly}>Toggle read-only mode (currently {this.state.readOnly ? 'on' : 'off'})</button>
              <button type="button" onClick={this.saveCode} value={this.state.code}>
                Save the code
              </button>
  				  </div>
      </div>
    );
  }
}

export default App;
