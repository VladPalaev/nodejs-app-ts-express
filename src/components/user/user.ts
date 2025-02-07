import { logger } from '@utils/logger'

class User {
  constructor(
    public name: string,
    public age: number,
  ) {}

  @logger
  public greet(message: string) {
    console.log(`${message}, ${this.name}`)
  }
}

export default User
