export default function* filter(iterable, filterFunc) {
  for (const item of iterable) {
    if (filterFunc(item)) {
      yield item;
    }
  }
}
