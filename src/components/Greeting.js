import { useState } from "react"
import Output from "./Output"
const Greeting = () => {
    const [changeText, setChangeText] = useState(false)

    const changeHandler = () => {
        setChangeText(true)
    }
    return (
        <div>
            <h1>Hello Greetings!</h1>
            {!changeText && <Output>It's good to see you!</Output>}
            {changeText && <Output>Changed!</Output>}

            <button onClick={changeHandler}>Change Text!</button>
        </div>
    )
}

export default Greeting