/**
 * 柯里化函数包装
 * @param callback
 */
export function curring(callback: (...params: any[]) => any): (...params: any[]) => any {
  return function curried(...args: any[]) {
    if (args.length >= callback.length) {
      return callback.apply({ }, args)
    } else {
      return function(...args2: any[]) {
        return curried.apply({ }, args.concat(args2))
      }
    }
  }
}
