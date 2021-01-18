
import React, { Component } from 'react';
import ResponseButton from './response_button';

class Question extends Component {
    getResponse() {
        const listItems = this.props.question.respuestas.map((response) =>
          <li><ResponseButton response={response}/></li>
        );
    
        return (
          <ul>{listItems}</ul>
        )
      }
    render() {
        return (
      <div class="question">
          <p>
          {this.props.question.enunciado}
          </p>
          {this.getResponse()}
          <hr />
      </div>
    )
    }
}
  
  export default Question