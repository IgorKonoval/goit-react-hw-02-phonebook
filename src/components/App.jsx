import { Component } from 'react';
import { nanoid } from 'nanoid';

const Button = ({ onAdd }) => {
  return <button onClick={onAdd}>Add contact</button>;
};

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  handleChange = event => {
    this.setState({ name: event.target.value });
  };

  addContact = () => {
    const newContact = {
      id: nanoid(),
      name: this.state.name,
    };
    if (
      this.state.contacts.find(
        contact => contact.name.toLowerCase() === this.state.name.toLowerCase()
      )
    ) {
      return alert(`${this.state.name} is already in contacts!`);
    }
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  render() {
    const { contacts, name } = this.state;
    return (
      <section>
        <h2>Phonebook</h2>
        <div>
          <h3>Name</h3>
          <form>
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
              required
            />
          </form>
          <Button onAdd={this.addContact} />
        </div>
        <h2>Contacts</h2>
        <ul>
          {contacts.map(contact => (
            <li key={contact.id}>{contact.name}</li>
          ))}
        </ul>
      </section>
    );
  }
}
