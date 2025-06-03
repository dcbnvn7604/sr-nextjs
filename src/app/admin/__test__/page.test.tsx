import '@testing-library/jest-dom'
import { expect, describe, beforeEach, it } from '@jest/globals'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { CurrentUser } from '@/context/UserContext'
import Page from '@/app/admin/page'

const mockPush = jest.fn()

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: mockPush
  })
}))

describe('Admin', () => {
  beforeEach(() => {
    global.fetch = jest.fn()
  })

  it('state', async () => {
    (fetch as jest.Mock).mockResolvedValueOnce({status: 200})
    render(<CurrentUser.Provider value={{id: 1, role: 'admin'}}><Page/></CurrentUser.Provider>)
    await waitFor(() => {
      expect(mockPush).not.toBeCalled()
    })
    render(<CurrentUser.Provider value={{id: 1, role: 'user'}}><Page/></CurrentUser.Provider>)
    await waitFor(() => {
      expect(mockPush).toBeCalledWith('/login')
    })
  })
  it('api', async () => {
    (fetch as jest.Mock).mockResolvedValueOnce({status: 403})
    render(<CurrentUser.Provider value={{id: 1, role: 'admin'}}><Page/></CurrentUser.Provider>)
    await waitFor(() => {
      expect(mockPush).toBeCalledWith('/login')
    })
    expect(fetch).toBeCalled()
  })
})