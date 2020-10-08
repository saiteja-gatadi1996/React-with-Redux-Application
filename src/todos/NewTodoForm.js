import React, { useState } from 'react'
import "./NewTodoForm.css"
import {connect} from 'react-redux';
import {getTodos} from './selectors'
import {addTodoRequest} from './thunks'

function NewTodoForm({todos,onCreatePressed}) {
    const[inputValue, setInputValue]=useState('')

    return (
        <div className="new-todo-form">
            <input className="new-todo-input" placeholder="Type a new Todo here... " type="text" value={inputValue} onChange={e=>setInputValue(e.target.value)}/>
            
            <button onClick={()=>{
                const isDuplicateText=todos.some(todo=>todo.text===inputValue);
                if(!isDuplicateText){ 
                onCreatePressed(inputValue);
                setInputValue('');
            }}}
                className="new-todo-button">Create Todo</button>
        </div>
    )
}

const mapStateToProps=state=>({
    todos: getTodos(state),
});

const mapDispatchToProps=dispatch=>({
    onCreatePressed:text=>dispatch(addTodoRequest(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm);
