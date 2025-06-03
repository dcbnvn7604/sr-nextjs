import '@testing-library/jest-dom'
import { expect, describe, beforeEach, it } from '@jest/globals';
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import Page from '@/app/login/page'
import { SetCurrentUser } from '@/context/UserContext';
import { useRouter } from 'next/navigation';

const mockPush = jest.fn()

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: mockPush
  })
}))

describe('Login', () => {
  beforeEach(() => {
    global.fetch = jest.fn()
  })

  it('ok', async () => {
    (fetch as jest.Mock).mockResolvedValueOnce({
      json: async () => { return {id: 1}}
    })
    const setUser = jest.fn()
    render(<SetCurrentUser.Provider value={setUser}><Page /></SetCurrentUser.Provider>)
    const inputU =  screen.getByTestId("username")
    fireEvent.change(inputU, { target: { value: 'user1'}})
    const inputP =  screen.getByTestId("password")
    fireEvent.change(inputP, { target: { value: 'password1'}})
    const button =  screen.getByTestId("submit")
    fireEvent.click(button)
    expect((fetch as jest.Mock).mock.calls[0][1]['body']).toEqual('{"username":"user1","password":"password1"}')
    await waitFor(() => {
      expect(setUser).toBeCalledWith({"id": 1})
    })
    expect(mockPush).toBeCalledWith('/')
  })
})