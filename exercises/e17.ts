/*
a minBy function should
• Take an array of things
• return a the element where the callback function on that element yields the lowest value

a maxBy function should
• Take an array of things
• return a the element where the callback function on that element yields the highest value
 */

export const minBy = <T>(array: T[], cb: (item: T) => number | string) => {
  if (array[0]) {
    let min = cb(array[0]!);
    let element: T = array[0];

    for (let el of array) {
      const result = cb(el);
      if (result < min) {
        min = result;
        element = el;
      }
    }
    return element;
  }
};

export function maxBy<T>(array: T[], cb: (item: T) => number | string) {
  if (array[0]) {
    let min = cb(array[0]!);
    let element: T = array[0];

    for (let el of array) {
      const result = cb(el);
      if (result > min) {
        min = result;
        element = el;
      }
    }
    return element;
  }
}
