import React from "react";

const ContactList = ({ contacts, onDeleteContact }) => <ul>
        {contacts.map(({ id, name, number }) =>
                <li key={id}>
                        <p>{name}: tel. <span>{number}</span></p>
                        <button onClick={()=>onDeleteContact(id)}>🗑</button>
                </li>)}
</ul>
export default ContactList
