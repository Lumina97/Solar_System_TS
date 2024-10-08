// see e16.md

// DO NOT USE `any` for this, you will need to use generics in order to pass both the vitest tests and the tsc compiler
export function find<T>(itemArray: T[], callbackFunction: (e: T) => boolean) {
  for (let el of itemArray) {
    if (callbackFunction(el)) return el;
  }
}
