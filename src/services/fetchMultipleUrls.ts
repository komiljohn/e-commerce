import { request } from './http-client'

export const fetchMultipleUrls = async (urls: String[]) => {
  let data
  try {
    data = await Promise.all(
      urls.map(async (url) => {
        try {
          const response = await request.get(url)
          return response.data
        } catch (e) {
          console.log(e)
        }
      })
    )
  } catch (error) {
    console.error(error)
  }

  return data
}
