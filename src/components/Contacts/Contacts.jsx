import { Contact } from "./Contacts.styled";

export const Contacts = ({ myContacts }) => {
    
    return (
            <ul>
                {myContacts.map(contact => {
                    return (
                        <Contact key={contact.id}>
                            <span>{contact.name}: </span>
                            <span>{contact.number}</span>
                        </Contact>
                    )
                })}
        </ul>
    )
};