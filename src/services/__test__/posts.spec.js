import { renderHook, waitFor } from '@testing-library/react'
import { usePost } from '../posts'
import MockQueryProvider from '../../test-config/MockQueryProvider'

describe('post service test', () => {
  it('get post test', async () => {
    const { result } = renderHook(
      () => usePost({ params: { limit: 10, page: 1 } }),
      {
        wrapper: MockQueryProvider
      }
    )
    await waitFor(() => expect(result.current.posts.isSuccess).toBe(true))
  })

  it('create post test', async () => {
    const { result } = renderHook(() => usePost(), {
      wrapper: MockQueryProvider
    })

    result.current.createMutation.mutate({
      data: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1
      })
    })

    await waitFor(() =>
      expect(result.current.createMutation.isSuccess).toBe(true)
    )
  })
})
