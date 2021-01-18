
import React, { Component } from 'react';

class ResponseButton extends Component {
    constructor(props) {
        super(props);
        this.state = {clicked: false};
        this.handleClick =  this.handleClick.bind(this);
        this.getClass =  this.getClass.bind(this);
    }
    handleClick(event) {
        this.setState({clicked: true});
    }
    getClass() {
        if (this.state.clicked && this.props.response.correcta == "1") {
            return "ok"
        } else if (this.state.clicked) {
            return "err"
        }
        return ""
    }
    render() {
        return (
            <button type="button" className={this.getClass()} onClick={this.handleClick}>{this.props.response.respuesta}</button>
        )
    }
}
  
  export default ResponseButton