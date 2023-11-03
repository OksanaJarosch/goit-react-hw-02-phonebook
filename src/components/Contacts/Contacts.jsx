import { Contact, Span, Btn } from "./Contacts.styled";

export const Contacts = ({ myContacts, onDelete }) => {
    
    return (
            <ul>
            {myContacts.map(contact => {
                const { id, name, number } = contact;

                    return (
                        <Contact key={id}>
                            <Span>{name}:
                            </Span>
                            <Span>{number}</Span>
                            <Btn type="button" onClick={() => onDelete(id)}>X</Btn>
                        </Contact>
                    )
                })}
        </ul>
    )
};