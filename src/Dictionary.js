import React,{useState} from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";



export default function Dictionary(props){
    let [word,setWord]=useState(props.defaultWord);
    let [data,setData] = useState(null);
    let[loaded,setLoaded]=useState(false);
   
    function handleResponse(res){
    setData(res.data[0]);
    }
    
    function Searching (){
        let url=`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
        axios.get(url).then(handleResponse);
    }

    function handleSearch(event){
        event.preventDefault();
        Searching();
    }

    function handleWordChange(event){
        setWord(event.target.value);
    }

    function Load(){
        setLoaded(true);
        Searching();
    }

    if (loaded){
    return(
        <div className="Dictionary">
            <section>
            <form className="dForm" onSubmit={handleSearch}>
                <input type= "search" placeholder="Insert a word" onChange={handleWordChange}/>
               
            </form>
            </section>
            <section>
                <Photos word={word} />
                </section>
            <Results data={data}/>
        </div>
    );
    }
    else{
        Load();
        return "loading...";
    }
}