import React from "react";
import user from "../images/user.png"

export const ContactCard = (props)=>{
    const{id,name,email} = props.contact;
    return(
        <div className="item">
            <img className="ui avatar image" src={user} alt="User"/>
        <div className="content">
            <div className="header">
                <span>{name}</span>
                <span>{email}</span>
                <i className="trash  alternate  outline  icon" style={{color:"red",marginTop:"7px"}}></i>
            </div>
        </div>
    </div>
    );
};
