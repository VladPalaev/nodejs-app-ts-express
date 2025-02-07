import User from '@components/user/user.js'
import { sum } from '@components/sum/sum.js'

const user = new User('vlad palev', 34)
user.greet('hello')

console.log(sum(3, 23))
