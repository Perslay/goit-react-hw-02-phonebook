import React, { Component } from 'react';
// https://www.npmjs.com/package/nanoid
// import { nanoid } from 'nanoid'
// model.id = nanoid() //=> "V1StGXR8_Z5jdHi6B-myT"

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  render() {
    return (
      <>
        <div>
          <p>Phonebook</p>
          <div>
            <p>Name</p>
            <form action="">
              <input
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
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
            <li>a</li>
            <li>a</li>
            <li>a</li>
          </ul>
        </div>
      </>
    );
  }
}
