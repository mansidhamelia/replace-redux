import { useState } from "react"

const Greeting = () => {
    const [changeText, setChangeText] = useState(false)

    const changeHandler = () => {
        setChangeText(true)
    }
    return (
        <div>
            <h1>Hello Greetings!</h1>
            {!changeText && <p>It's good to see you!</p>}
            {changeText && <p>Changed!</p>}

            <button onClick={changeHandler}>Change Text!</button>
        </div>
    )
}

export default Greeting