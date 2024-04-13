// ADD PROPTYPES

import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import css from '../styles/App.module.css';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  nameInputId = nanoid();
  numberInputId = nanoid();
  filterInputId = nanoid();

  handleChange = evt => {
    this.setState({ filter: evt.target.value });
    console.log(this.state.filter);
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
    const {
      contacts,
      // name, number,
      filter,
    } = this.state;
    const { nameInputId, numberInputId, filterInputId, handleChange } = this;

    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <div className={css.appContainer}>
        <div>
          <h1>Phonebook</h1>
          <div>
            <form onSubmit={this.add}>
              <label htmlFor={this.nameInputId}>Name</label>
              <input
                type="text"
                name="name"
                id={nameInputId}
                pattern="^[a-zA-Zа-яА-Я]+((['\s\-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
              />
              <label htmlFor={numberInputId}>Number</label>
              <input
                type="tel"
                name="number"
                id={numberInputId}
                pattern="^\+((?:9[679]|8[035789]|6[789]|5[90]|42|3[578]|2[1-689])|9[0-58]|8[1246]|6[0-6]|5[1-8]|4[013-9]|3[0-469]|2[70]|7|1)(?:\W*\d){0,13}\d$"
                title="Phone number must start with +, be at least 3 digits and can contain spaces, dashes"
                required
              />
              <button type="submit">Add contact</button>
            </form>
          </div>
        </div>
        <div>
          <h2>Contacts</h2>
          <p>Find contacts by name</p>
          <input
            onChange={handleChange}
            type="text"
            name="filter"
            id={filterInputId}
            pattern="^[a-zA-Zа-яА-Я]+((['\s\-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          />
          <ul>
            {filteredContacts.map(contact => (
              <li key={contact.id}>
                {contact.name}: {contact.number}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
