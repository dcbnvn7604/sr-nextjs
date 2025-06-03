export const srfetch = async (path: string, data: object) => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL
  const _data = {
    headers: {
      'Content-Type': 'application/json'
    },
    ...data
  }
  return await fetch(apiUrl + path, _data)
}