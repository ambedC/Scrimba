import React from "react";

export default function Joke({setup,punchline}){
    return(
        <div className="jokes">
            <h3>Setup : {setup}</h3>
            <p>Punchline : {punchline}</p>
            <hr />  
        </div>
    )
}