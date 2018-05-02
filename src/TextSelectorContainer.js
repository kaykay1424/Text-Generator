import React, { Component } from 'react';
import TextSelector from './TextSelector.js';
import $ from 'jquery';

class TextSelectorContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numParas: 1,
      format: 'text'
    }
    this.changeParagraph = this.changeParagraph.bind(this);
    this.changeFormat = this.changeFormat.bind(this);
    this.getText = this.getText.bind(this);
  }
  getText(event) {
    if (event !== undefined) {
      event.preventDefault();
    }
    $.ajax({
      url: 'https://baconipsum.com/api/?type=meat-and-filler&paras=' + this.state.numParas +'&format=' + this.state.format,
      dataType: this.state.format,
      cache: false,
      success: function(data) {
        const textOutputDiv = document.getElementById('text-output');
        textOutputDiv.textContent = data;
      },
      error: function(xhr,status,err) {
        console.log(err);
      }
    });
  }
  changeParagraph(event) {
    let numParagraphs = event.target.value;
    this.setState({
      numParas: numParagraphs
    });
  }
  changeFormat(event) {
    let formatType = event.target.value;
    this.setState({
      format: formatType
    });
  }
  componentDidMount() {
    this.getText();
  }
  render() {
    return (
      <TextSelector getText={this.getText} format={this.state.format} numParagraphs={this.state.numParas} changeParagraph={this.changeParagraph} changeFormat={this.changeFormat} />
    );
  }
}

export default TextSelectorContainer;
