import { render, screen } from "@testing-library/react"
import Greeting from "./Greeting"

describe('Greeting component', () => {
    test('renders hello world as a text', () => {
        // Arrange
        render(<Greeting />)

        // Act
        // ...nothing

        // Assert
        const helloElement = screen.getByText('Hello Greetings', { exact: false })  //exact: false will check only words but not precisely
        expect(helloElement).toBeInTheDocument();


    })
})
