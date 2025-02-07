import { minus } from './minus'

describe('testing function minus', () => {
  test('10 - 2', () => {
    expect(minus(10, 2)).toBe(8)
  })
})
