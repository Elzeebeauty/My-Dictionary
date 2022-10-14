import axios from "axios";
import React, { useState } from "react";
import "./Results.css"

export default function Photos(props) {
let [photos,setPhotos] =useState(null);

function HandlePhotos(response){
    setPhotos(response.data.photos);
}

useState(()=>{axios.get(apiUrl,{headers: headers })
.then(HandlePhotos);},[props.word , apiUrl]) 
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