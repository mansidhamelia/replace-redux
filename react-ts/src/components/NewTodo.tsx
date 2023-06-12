import React, { useRef } from "react";

const NewTodo = () => {
    const todoTextRef = useRef<HTMLInputElement>(null)

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault()

        const enteredText = todoTextRef.current!.value  // can use "!" instead of "?" if you 100% sure your value will never be null.
        if (enteredText.trim().length === 0) {
            // throw an error
            return;
        }

    }

    return (
        <form onSubmit={submitHandler}>
            <label>Todo Text</label>
            <input type="text" id="text" ref={todoTextRef} />
            <button>Add Todo</button>
        </form>
    )
}
export default NewTodo;