/* eslint-disable node/no-unsupported-features/es-syntax */

export const readingTimeResult = {
  minutes: 0.455,
  text: '1 min',
  time: 27300,
  words: 91
}

export const routes = [
  {
    heading: true,
    title: 'Test Documentation 44',
    routes: [
      {
        title: 'Introduction',
        path: '/docs/README.md'
      },
      {
        title: 'Quick Start',
        path: '/docs/quickstart.md'
      },
      {
        heading: true,
        title: 'User Guide',
        routes: [
          {
            title: 'User Guide Route 1',
            path: '/docs/2.md'
          },
          {
            title: 'Route 2',
            path: '/docs/1.md'
          }
        ]
      },
      {
        heading: true,
        title: 'Administrator Guide',
        routes: [
          {
            title: 'Administrator Guide Route',
            path: '/docs/3/1.md'
          }
        ]
      }
    ]
  }
]

export const routesResult = [
  {
    heading: true,
    title: 'Test Documentation 44',
    routes: [
      {
        title: 'Introduction',
        path: '/docs/README.md',
        readingTime: readingTimeResult
      },
      {
        title: 'Quick Start',
        path: '/docs/quickstart.md',
        readingTime: readingTimeResult
      },
      {
        heading: true,
        title: 'User Guide',
        routes: [
          {
            title: 'User Guide Route 1',
            path: '/docs/2.md',
            readingTime: readingTimeResult
          },
          {
            title: 'Route 2',
            path: '/docs/1.md',
            readingTime: readingTimeResult
          }
        ]
      },
      {
        heading: true,
        title: 'Administrator Guide',
        routes: [
          {
            title: 'Administrator Guide Route',
            path: '/docs/3/1.md',
            readingTime: readingTimeResult
          }
        ]
      }
    ]
  }
]
