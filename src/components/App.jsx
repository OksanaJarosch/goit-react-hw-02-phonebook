import {Component} from "react";
import { GlobalStyle } from "GlobalStyle";
import { nanoid } from 'nanoid';
import { Phonebook } from "./Phonebook/Phonebook";
import { Contacts } from "./Contacts/Contacts";

export class App extends Component {

state = {
  contacts: [],
  name: ''
}

  addContact = (values) => {
    const inputId = nanoid();

    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, {...values, id: inputId}]
  }
    })
  };



  render() {
    return (
      <>
        <Phonebook onAddContact={this.addContact}></Phonebook>
        <Contacts myContacts={this.state.contacts}></Contacts>
      <GlobalStyle />
      </>
    );
  };
};
