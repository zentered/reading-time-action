import readingTime from 'reading-time'
import getFile from './getFile.mjs'

export async function countReadingTimeByContent(path) {
  const content = await getFile(path.substring(1))
  const readingTimeResult = readingTime(content.toString())
  return {
    ...readingTimeResult,
    text: readingTimeResult.text.replace('read', '').trim()
  }
}

export default async function calculateRoutesReadingTime(routes) {
  return await Promise.all(
    routes.map(async (route) => {
      if (route.routes) {
        const routes = await calculateRoutesReadingTime(route.routes)
        return { ...route, routes }
      }
      const readingTimeResult = await countReadingTimeByContent(route.path)
      return {
        ...route,
        readingTime: readingTimeResult
      }
    })
  )
}
