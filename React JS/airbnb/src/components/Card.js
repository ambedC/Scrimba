import React from "react";
import star from "./images/star.png"
import App from "../App.css"



export default function Card(props) {
    let badgeText
        if(props.openSpots === 0){
            badgeText = "SOLD OUT"
        } else if(props.location === "Online"){
            badgeText = "ONLINE"
        }

    
    return (
            <div className="card">
                {/* {badgeText && <div className="card--badge">{badgeText}</div>} */}
                <img src= {require(`./images/${props.img}`)} className="card--photo" />
                <div className="card--stats">
                    <img src = {star} className="star--photo" />
                    <span>{props.rating}</span>
                    <span className="grey">({props.reviewCount}) {props.location} </span>
                    <p className="card--title">{props.title}</p> 
                    <p className="card--price"><span className="bold">From ${props.price}/</span>person</p>
                </div>
            </div>     
    )
}


