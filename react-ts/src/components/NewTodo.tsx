import React, { useContext, useRef } from "react";
import classes from './NewTodo.module.css'
import { TodosContext } from "../store/Todos-context";

const NewTodo: React.FC = () => {

    const todosCtx = useContext(TodosContext);

    const todoTextRef = useRef<HTMLInputElement>(null)

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault()

        const enteredText = todoTextRef.current!.value  // can use "!" instead of "?" if you 100% sure your value will never be null.
        if (enteredText.trim().length === 0) {
            // throw an error
            return;
        }

        todosCtx.addTodo(enteredText)

    }

    return (
        <form onSubmit={submitHandler} className={classes.form}>
            <label>Todo Text</label>
            <input type="text" id="text" ref={todoTextRef} />
            <button>Add Todo</button>
        </form>
    )
}
export default NewTodo;