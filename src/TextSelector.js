import React, { Component } from 'react';

const TextSelector = (props) => {
  return (
    <div className='container'>
      <h1>Sample Text Generator</h1>
      <form onSubmit={props.getText}>
        <div className='form-group'>
          <label htmlFor='paragraphs' >Paragraphs:</label>
          <input id='paragraphs' type='number' onChange={props.changeParagraph} value={props.numParagraphs} min='1' />
        </div>
        <div className='form-group'>
          <label htmlFor='format'>Format: </label>
          <select id='format' onChange={props.changeFormat}  >
            <option value='text'>Text</option>
            <option value='html' >HTML</option>
          </select>
        </div>
        <div className='form-group'>
          <button type='submit' > Get Text </button>
        </div>
      </form>
      <div id='text-output'></div>
    </div>
  );
}

export default TextSelector;
