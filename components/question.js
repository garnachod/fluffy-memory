
import React, { Component } from 'react';
import ResponseButton from './response_button';

class Question extends Component {
    constructor(props) {
      super(props);

      this.state = { isCorrect: false};
      this.updateIsCorrect = this.updateIsCorrect.bind(this);
    }
    updateIsCorrect() {
      this.setState({
        isCorrect: true
      });
    }
    getResponse() {
      let listItems
      if (this.props.question.respuestas !== undefined) {
        listItems = this.props.question.respuestas.map((response) =>
          <li key={response.id || response.answerId}><ResponseButton response={response} updateIsCorrect={this.updateIsCorrect}/></li>
        );
      } 
      if (this.props.question.answers !== undefined) {
        listItems = this.props.question.answers.map((response) =>
          <li key={response.id || response.answerId}><ResponseButton response={response} updateIsCorrect={this.updateIsCorrect}/></li>
        );
      } 
         
    
        return (
          <ul>{listItems}</ul>
        )
      }

    renderExplain() {
      if (this.state.isCorrect) {
        return (<div className="explain">
                <p dangerouslySetInnerHTML={{ __html: this.props.question.explicacion_respuesta  }}>
                </p>
              </div>
        )}
    }
    render() {
      
        return (
        <div className="question">
            <p dangerouslySetInnerHTML={{ __html: this.props.question.enunciado  || this.props.question.statement}}>
            </p>
            {this.renderExplain()}
            {this.getResponse()}
            <hr />
        </div>)
      }
    
}
  
  export default Question