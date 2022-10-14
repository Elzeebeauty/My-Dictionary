import React from "react";
import "./Results.css";

export default function Synonyms(props){
    if (props.synonym[0]){
            return (
            <div>
                <strong>Synonyms :</strong>
                {props.synonym.map(function(synonym,index){
                    return(
                        <div key={index} className="Synonyms">
                         {synonym}               
                        </div>
                    );})}
                
            </div>
            );
        }
else{ 
    return null;
};
}