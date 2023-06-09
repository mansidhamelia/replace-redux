import { render, screen } from "@testing-library/react"
import Async from "./Async"

describe('Async component', () => {
    test('renders posts if request succeeds', async () => {
        render(<Async />)

        const element = await screen.findAllByRole('listitem')
        expect(element).not.toHaveLength(0)
    })
})