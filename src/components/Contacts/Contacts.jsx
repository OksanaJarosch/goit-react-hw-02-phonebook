import { Titel, Contact } from "./Contacts.styled";

export const Contacts = ({ myContacts }) => {
    
    return (
        <>
            <Titel>Contacts</Titel>
            <ul>
                {myContacts.map(contact => {
                    return (
                        <Contact key={contact.id}>
                            <p>{contact.name}</p>
                        </Contact>
                    )
                })}
            </ul>
</>
)
};