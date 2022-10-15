import React from "react";
import "./Results.css";

export default function Phonetic(props){
    return(
        <div className="Phonetics">
            <a href={props.phonetic.audio} target="_blank" rel="noreferrer">Listen</a>
            <small>{props.phonetic.text} </small>
        </div>
    )
}