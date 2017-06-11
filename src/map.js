export default function* filter(iterable, mapFunc) {
  for (const item of iterable) {
    yield mapFunc(item);
  }
}
