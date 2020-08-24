import React from 'react'
import firebase from 'firebase'


export default function Yapilacak({todos}) {
    
    const todoSil = () =>{
        const todoRef = firebase.database().ref('Yapilacaklar').child(todos.x);
        todoRef.remove();
    }

    const todoGuncelle = () => {
        const todoRef = firebase.database().ref('Yapilacaklar').child(todos.x);
        todoRef.update({
            tamamlanma:!todos.tamamlanma
        })
    }
    
    
    return (
        
        <div>
            <h3>{todos.title} - {todos.tamamlanma.toString()} </h3>
            <button onClick={todoSil}>Sil</button>
            <button onClick={todoGuncelle}>Durumu Değiştir!</button>
            
            
        </div>
    )
}
