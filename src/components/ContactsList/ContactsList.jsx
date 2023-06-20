import { Button } from 'components/PhonebookForm/PhonebookForm.styled';
import PropTypes from 'prop-types';
import { List } from './ContactsList.styled';

const ContactList = ({ contacts, handleDeleteContact }) => {
    return (
        <List>
            {contacts.map(contact => (
                <li key={contact.id}>
                    {contact.name}: {contact.number}
                    <Button onClick={() => handleDeleteContact(contact.id)}>Delete</Button >
                </li>
            ))}
        </List>
    )
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  handleDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;