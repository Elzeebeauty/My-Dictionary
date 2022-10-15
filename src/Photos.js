import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Results.css"

export default function Photos(props) {
let [photos,setPhotos] =useState(null);
let apiKey="563492ad6f9170000100000192ae5f85fdbf4f7ab621e9b48f4ee7da";
let apiUrl=`https://api.pexels.com/v1/search?query=${props.word}&people`;
let headers ={ Authorization: `Bearer ${apiKey}`};

function HandlePhotos(response){
    setPhotos(response.data.photos);
}

useEffect(()=>{axios.get(apiUrl,{headers: headers })
.then(HandlePhotos);},[props.word, apiUrl]) 
if(photos){
    return(
        <div className="photos row">
            {photos.map(function(photo,index){
                return(
                    <div className="col-4" key={index}>
                    <img src={photo.src.medium} alt={props.word} className="img-fluid"/>
                    </div>
                );
            })}
        </div>
    );
    }
    else{
        return null;
    }
}