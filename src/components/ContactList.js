import React from "react";
import { ContactCard } from "./ContactCard";


export const ContactList = (props)=>{
    const renderContactList = props.contacts.map((contact)=>{
        return( 
            <ContactCard contact={contact} />
        );
    });
    
    return(
        <div className="ui celled list">
            Contact List
            {renderContactList}
        </div>
    );
};
