import { logger } from '@utils/logger.js'

class User {
  constructor(
    public name: string,
    public age: number,
  ) {}

  @logger
  public greet(message: string) {
    return `${this.name} передает вам ${message}`
  }
}

export default User
