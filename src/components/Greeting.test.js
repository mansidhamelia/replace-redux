import { render, screen } from "@testing-library/react"
import Greeting from "./Greeting"
import userEvent from "@testing-library/user-event"

describe('Greeting component', () => {
    test('renders hello world as a text', () => {
        // Arrange
        render(<Greeting />)

        // Act
        // ...nothing

        // Assert
        const helloElement = screen.getByText('Hello Greetings', { exact: false })  //exact: false will check only words but not precisely.
        expect(helloElement).toBeInTheDocument();
    })
    test('render h1 text if the button was NOT clicked', () => {
        render(<Greeting />)

        const outputElement = screen.getByText('good to see you', { exact: false })
        expect(outputElement).toBeInTheDocument();
    })

    test('renders "changed!" if the button was clicked', () => {
        // Arrange
        render(<Greeting />)
        // Act.
        const buttonElement = screen.getByRole('button')
        userEvent.click(buttonElement)
        // Assert
        const outputElement = screen.getByText('Changed!')
        expect(outputElement).toBeInTheDocument();
    })

    test('does not render text "good to see you"', () => {
        render(<Greeting />)

        const buttonElement = screen.getByRole('button')
        userEvent.click(buttonElement)
        const element = screen.queryByText('good to see you!', { exact: false })
        expect(element).toBeNull()
    })
})
