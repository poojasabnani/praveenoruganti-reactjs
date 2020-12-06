import React, {createContext ,useState} from 'react';
// import uuid from 'uuid/v1'
import { v4 as uuidv4 } from 'uuid';
export const TodoContext = createContext();

const TodoContextProvider = (props) =>{
    const [Todo, setTodo] = useState([]);

    const addTodo= (List, Time)=>{
        setTodo([...Todo, {List,Time, id:uuidv4()}]);
    }

    const removeTodo = (id) =>{
        setTodo(Todo.filter(list=> list.id !== id));
    }


    return(
        <TodoContext.Provider value= {{Todo, addTodo, removeTodo}}>
            {props.children}
        </TodoContext.Provider>
    )

}
export default TodoContextProvider;