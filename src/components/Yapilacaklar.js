import React, { useState, useEffect } from 'react'
import firebase from '../util/firebase'
import Yapilacak from './Yapilacak';

export default function Yapilacaklar() {

    const [todoList, setTodoList] = useState();
  
    useEffect(() => {
        const todoRef = firebase.database().ref('Yapilacaklar');
        todoRef.on('value', (snapshot) => {
            const _yapilacaklar = snapshot.val();
            const _yapilacakList = [];
            for (let x in _yapilacaklar) {
                _yapilacakList.push({x,..._yapilacaklar[x]});
               

            }
            setTodoList(_yapilacakList);
        });
    }, []);

    return (
        <div>
            {
                todoList ? todoList.map((todos,index) => <Yapilacak todos={todos} key={index} />
                ) : ''
            }
        </div>
    )
}
