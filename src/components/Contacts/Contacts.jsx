

export const Contacts = ({ myContacts }) => {
    
    return (
        <>
            <h2>Contacts</h2>
            <ul>
                {myContacts.map(contact => {
                    return (
                        <li key={contact.id}>
                            <p>{contact.name}</p>
                        </li>
                    )
                })}
            </ul>
</>
)
};