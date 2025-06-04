import '@testing-library/jest-dom'
import { render, screen, waitFor } from '@testing-library/react'
import Page from '@/app/page'
 
describe('Page', () => {
  beforeEach(() => {
    global.fetch = jest.fn()
  })

  it('renders a heading', async () => {
    (fetch as jest.Mock).mockResolvedValueOnce({
      json: async () => ([{username: 'username1'}, {username: 'username2'}])
    })
    const { container } = render(<Page />)
 
    await waitFor(() => {
      expect(container.querySelectorAll('li').length).toEqual(2)
    })
  })
})