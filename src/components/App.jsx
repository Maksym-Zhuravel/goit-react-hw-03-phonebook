import { Component } from 'react';
import { nanoid } from 'nanoid';
import PhonebookForm from './PhonebookForm/PhonebookForm';
import ContactsFilter from './ContatcsFilter/ContactsFilter';
import ContactList from './ContactsList/ContactsList';
import { Heading, Title, Section } from './Heading/Heading.styled';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidUpdate(prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  componentDidMount() {
    const savedData = JSON.parse(localStorage.getItem('contacts'));
    if (savedData) {
      this.setState({ contacts: savedData });
    }
  }

  handleFormSubmit = data => {
    const { contacts } = this.state;
    const { name, number } = data;

    const existingContact = contacts.find(
      contact =>
        contact.name.toLowerCase() === name.toLowerCase() ||
        contact.number === number
    );
    if (existingContact) {
      alert('This contact is already exist!');
    } else {
      const newContact = {
        id: nanoid(),
        ...data,
      };
      this.setState({ contacts: [...this.state.contacts, newContact] });
    }
  };

  handleFilterChange = event => {
    this.setState({ filter: event.target.value });
  };

  handleDeleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <Section>
        <Heading>Phonebook</Heading>
        <PhonebookForm onSubmit={this.handleFormSubmit} />
        <Title>Contacts</Title>
        <ContactsFilter value={filter} onChange={this.handleFilterChange} />
        <ContactList
          contacts={filteredContacts}
          handleDeleteContact={this.handleDeleteContact}
        />
      </Section>
    );
  }
}

export default App;
