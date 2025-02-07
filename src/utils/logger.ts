function logger(target: any, key: any, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value

  descriptor.value = function (...args: any[]) {
    console.log(`(decorator) logger: ${String(key)} with args: ${String(args)}`)
    return originalMethod.apply(this, args)
  }

  return descriptor
}

export { logger }
