import React, { Component } from 'react';
import { nanoid } from 'nanoid';

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      number: '',
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;
    const { onAddContact } = this.props;
    onAddContact({ id: nanoid(), name, number });
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form
        onSubmit={this.handleSubmit}
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '5px',
          width: '250px',
        }}
      >
        <input
          type="text"
          name="name"
          value={name}
          onChange={e => this.setState({ name: e.target.value })}
          required
        />
        <input
          type="tel"
          name="number"
          value={number}
          onChange={e => this.setState({ number: e.target.value })}
          required
        />
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export default ContactForm;
