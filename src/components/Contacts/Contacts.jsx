import { Titel, Contact } from "./Contacts.styled";

export const Contacts = ({ myContacts }) => {
    
    return (
        <>
            <Titel>Contacts</Titel>
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
</>
)
};