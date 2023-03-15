import { useMutation, useQuery } from 'react-query'
import { request } from './http-client'

interface reqParams {
  limit?: number
  page?: number
}
interface Params {
  params?: reqParams
}

const getPosts = (params: reqParams | undefined) =>
  request.get('/posts', { params })
const createPost = (data: { data: string }) => request.post('/posts', data)
const updatePost = (id: string, data: { data: string }) =>
  request.put(`/posts/${id}`, data)
const deletePost = (id: string) => request.delete(`/posts/${id}`)

export const usePost = ({ params }: Params = {}) => {
  const posts = useQuery(['GET_POSTS'], () => getPosts(params), {
    enabled: true
  })
  const createMutation = useMutation(createPost)

  return {
    posts,
    createMutation
  }
}
