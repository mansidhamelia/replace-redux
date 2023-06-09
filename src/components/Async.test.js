import { render, screen } from "@testing-library/react"
import Async from "./Async"

describe('Async component', () => {
    test('renders posts if request succeeds', async () => {
        window.fetch = jest.fn();  // jest create mock function by using fn
        window.fetch.mockResolvedValueOnce({
            json: async () => [{ id: 'p1', title: 'First post' }]
        });
        render(<Async />)

        const element = await screen.findAllByRole('listitem')
        expect(element).not.toHaveLength(0)
    })
})