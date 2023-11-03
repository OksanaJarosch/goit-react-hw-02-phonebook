import {Component} from "react";
import { GlobalStyle } from "GlobalStyle";
import { nanoid } from 'nanoid';
import { Phonebook } from "./Phonebook/Phonebook";
import { Contacts } from "./Contacts/Contacts";
import { Container, Title } from "./App.styled";
import {Filter} from "./Filter/Filter"

export class App extends Component {

state = {
  contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
  filter: '',
}

  addContact = values => {
    const inputId = nanoid();

    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, { ...values, id: inputId }]
  }
    })
  };

  updateFilter = value => {

    this.setState({
      filter: value,
    });
}

  
  render() {
    const { contacts, filter } = this.state;

    const filtredContacts = contacts.filter(
      contact => {
        const filtred = contact.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase());
        return filtred;
      }
    )

    return (
      <Container>
        <Title>Phonebook</Title>
        <Phonebook onAddContact={this.addContact}></Phonebook>

        <Title>Contacts</Title>
        <Filter onFilter={this.updateFilter}></Filter>
        <Contacts myContacts={filtredContacts}></Contacts>
      <GlobalStyle />
      </Container>
    );
  };
};
