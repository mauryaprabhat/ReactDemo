import React from "react";
import { ContactCard } from "./ContactCard";


export const ContactList = (props)=>{
    
    const contacts = [{
        id:"1",
        name:"Prabhat",
        email:"Prabhat@gmail.com"
    }];

    const renderContactList = contacts.map((contact)=>{
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
