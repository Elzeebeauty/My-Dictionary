import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";
import "./Results.css";
import Synonyms from "./Synonyms";

export default function Results (props){
    let data= props.data;
    if (data){
    let word= data.word;
    let phonetics= data.phonetics;
    return (
    <div className="Results">
    <h1>{word}</h1>
    {phonetics.map(function(phonetic,index){
        return(
            <div key={index}>
                <Phonetic phonetic={phonetic} />
            </div>
        );
    })}

    <p>{data.meanings.map(function(meaning,index){
        return <div key={index}>
            <section>
            <Meaning meaning={meaning}/>
            <Synonyms synonyms={meaning.synonyms}/>
            </section>
            </div>})}
    </p>
</div>
);}
else {
    return null;
}
}