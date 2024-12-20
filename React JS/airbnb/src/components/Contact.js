import React from "react";

export default function Contact({img,name,phone,email}) {
    return(
        <div className="contacts">
            <div className="contact-card">
                <img src={img}/>
                <h3>{name}</h3>
            </div>
            
            <div className="info-group">
                <p>{phone}</p>
            </div>

            <div className="info-group">
                <p>{email}</p>
            </div>

        </div>
    )
}
    
