import React,{useState} from 'react'
import firebase from '../util/firebase'

export default function Form() {

    const [title,setTitle] = useState('');
    const handleOnChange = (e) =>{
        setTitle(e.target.value);
    }

    const todoOlustur = () =>{
        const todoRef = firebase.database().ref('Yapilacaklar');
        const todo = {
            title,
            tamamlanma :false
        };
        todoRef.push(todo);
    }


    return (
        <div>
            <input type="text" onChange={handleOnChange} value={title}></input>
            <button onClick={todoOlustur}>Todo Ekle</button>
        </div>
    )
}
