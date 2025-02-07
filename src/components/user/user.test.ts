import User from './user'

test('create User instances', () => {
  const user = new User('vlad', 34)
  expect(user.greet('hello world!')).toBeUndefined()
})
