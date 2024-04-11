// ADD PROPTYPES

import React, { Component } from 'react';
// https://www.npmjs.com/package/nanoid
import { nanoid } from 'nanoid';
// model.id = nanoid() //=> "V1StGXR8_Z5jdHi6B-myT"
import css from '../styles/App.module.css';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  add = event => {
    event.preventDefault();

    const form = event.currentTarget;
    const newName = form.elements.name.value;
    const newNumber = form.elements.number.value;

    this.setState(prevState => ({
      contacts: [
        ...prevState.contacts,
        {
          name: newName,
          number: newNumber,
          id: nanoid(),
        },
      ],
    }));

    form.reset();
  };

  render() {
    const { contacts, name, number } = this.state;

    return (
      <>
        <div>
          <p>Phonebook</p>
          <div>
            <form onSubmit={this.add}>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                pattern="^[a-zA-Zа-яА-Я]+((['\s\-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
              />
              <label htmlFor="number">Number</label>
              <input
                type="tel"
                name="number"
                id="number"
                pattern="^\+((?:9[679]|8[035789]|6[789]|5[90]|42|3[578]|2[1-689])|9[0-58]|8[1246]|6[0-6]|5[1-8]|4[013-9]|3[0-469]|2[70]|7|1)(?:\W*\d){0,13}\d$"
                title="Phone number must start with +, be at least 3 digits and can contain spaces, dashes"
                required
              />
              <button type="submit">Add contact</button>
            </form>
          </div>
        </div>
        <div>
          <p>Contacts</p>
          <ul>
            {contacts.map(contact => (
              <li key={contact.id}>
                {contact.name}: {contact.number}
              </li>
            ))}
          </ul>
        </div>
      </>
    );
  }
}
