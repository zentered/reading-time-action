/* eslint-disable node/no-unsupported-features/es-syntax */
jest.mock('../src/getFile.mjs', () => {
  return jest
    .fn()
    .mockResolvedValue(
      `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
    )
})

import { readingTimeResult, routes, routesResult } from './mocks'

import calculateRoutesReadingTime, {
  countReadingTimeByContent
} from '../src/calculateRoutesReadingTime.mjs'

test('countReadingTimeByContent function count reading time by file content', async () => {
  const result = await countReadingTimeByContent('/path')
  expect(result).toEqual(readingTimeResult)
})

test('calculateRoutesReadingTime return updated routes with readingTime attr', async () => {
  const result = await calculateRoutesReadingTime(routes)
  expect(result).toEqual(routesResult)
})
