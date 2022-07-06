import React from "react";
import { ContactCard } from "./ContactCard";
import { Link } from "react-router-dom";


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
        <div className="main">
            <h2>Contact List               
            </h2>
            <Link to="/add">
            <button className="ui button  blue right ">Add Contact</button>
            </Link>
            <div className="ui celled list">{renderContactList}</div>
        </div>
    );
};
