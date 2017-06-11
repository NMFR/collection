export default function* iterateAll(...args) {
  for (const arg of args) {
    for (const item of (arg || [])) {
      yield item;
    }
  }
}
