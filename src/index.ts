import { userName } from '@utils/logger'
import { PORT } from './config/index'
import User from '@components/user/user'
import { sum } from './components/sum/sum'
import { minus } from './components/minus/minus' // влкючить default Import

console.log(minus(23, 26))

console.log(PORT)
console.log(userName)
console.log(sum(2, 23))

const user = new User('vlad', 34)
user.greet('hello world')
