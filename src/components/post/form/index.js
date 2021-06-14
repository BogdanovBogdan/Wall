import React from 'react';
import './form.css';

export default class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: '',
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(event) {
    this.setState({ inputValue: event.target.value });
  }

  onSubmit(event) {
    event.preventDefault();
    this.props.addItem(this.state.inputValue); 
    this.setState({ inputValue: '' });
  }
  
  render() {
    const { inputValue } = this.state;
    
    return (
      <form className="bottom-panel d-flex" onSubmit={this.onSubmit}>
        <input type="text" placeholder="Type something" className="form-control new-post-label" onChange={this.onChange} value={inputValue}/>
        <button type="submit" className="btn btn-outline-secondary">Add</button>
      </form>
    )
  }
}