import PropTypes from 'prop-types';
import css from '../styles/ContactList.module.css';

export const ContactList = ({ contacts, filter, deleteContact }) => {
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className={css.list}>
      {filteredContacts.map(contact => (
        <li className={css.listItem} key={contact.id}>
          <p className={css.paragraph}>
            {contact.name}: {contact.number}
          </p>
          <button
            className={css.button}
            type="button"
            onClick={() => deleteContact(contact.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  filter: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
