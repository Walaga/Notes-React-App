import React from 'react';
import './Note.css'

function Note({title, body, image}){
    return(
    <div className="note"> 
    <div className="note_description">
     <h3 className="notes_title">{title}</h3> 
        <img src={image} alt="" className="note_image"/>
    
    </div>
    
    <hr className="notes_divider"></hr>
    <p className="note_body">{body}</p>
    
   </div>
    
    );
}

export default Note;