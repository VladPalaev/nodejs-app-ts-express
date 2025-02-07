import { sum } from './sum'

describe('проверка функции sum', () => {
  test('3 + 3', () => {
    expect(sum(3, 3)).toBe(6)
  })
})
