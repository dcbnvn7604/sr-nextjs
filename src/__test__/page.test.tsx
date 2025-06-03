import '@testing-library/jest-dom'
import { render, screen, waitFor } from '@testing-library/react'
import Page from '@/app/page'
import { CurrentUser } from '@/context/UserContext'
import { expect, describe, beforeEach, it } from '@jest/globals';

const mockPush = jest.fn()

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: mockPush
  })
}))
 
describe('Page', () => {
  beforeEach(() => {
    global.fetch = jest.fn()
  })

  it('unauthentication', async () => {
    (fetch as jest.Mock).mockResolvedValueOnce({
      status: 401
    })
    const user = {id: 1}
    render(<CurrentUser.Provider value={user}><Page/></CurrentUser.Provider>)
    expect(fetch as jest.Mock).toBeCalled()
    await waitFor(() => {
      expect(mockPush).toBeCalledWith('/login')
    })
  })
})