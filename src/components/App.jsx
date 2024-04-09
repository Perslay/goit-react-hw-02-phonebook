import React, { Component } from 'react';
// https://www.npmjs.com/package/nanoid
import { nanoid } from 'nanoid';
// model.id = nanoid() //=> "V1StGXR8_Z5jdHi6B-myT"

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  handleChange = event => {
    this.setState({
      name: event.target.value,
    });
  };

  add = event => {
    event.preventDefault();

    const form = event.currentTarget;
    const name = form.elements.name.value;

    const updatedContacts = [
      ...this.state.contacts,
      {
        name: name,
        id: nanoid(),
      },
    ];

    this.setState({
      contacts: updatedContacts,
    });

    form.reset();
  };

  render() {
    const { contacts, name } = this.state;

    return (
      <>
        <div>
          <p>Phonebook</p>
          <div>
            <p>Name</p>
            <form onSubmit={this.add}>
              <input
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+((['\s\-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
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
              <li key={contact.id}>{contact.name}</li>
            ))}
          </ul>
        </div>
      </>
    );
  }
}
