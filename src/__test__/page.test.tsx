import '@testing-library/jest-dom'
import { fireEvent, render, screen, prettyDOM } from '@testing-library/react'
import Page from '@/app/page'
import { act } from 'react'
 
describe('Page', () => {
  beforeEach(() => {
    global.fetch = jest.fn()
  })

  it('renders a heading',async () => {
    (fetch as jest.Mock).mockResolvedValueOnce({
      status: 401,
      json: async () => ({detail: [{field: "username", message: "User existed"}]})
    })
    render(<Page />)
    const button = screen.getByTestId('submit')
    fireEvent.click(button)
    await screen.findByText("Username is required")
    const username = screen.getByLabelText('username')
    fireEvent.change(username, {target: {value: "user1"}})
    fireEvent.click(button)
    await screen.findByText("Invalid email address")
    fireEvent.change(username, {target: {value: "user1@com.com"}})
    fireEvent.click(button)
    await screen.findByText("User existed")
  })
})