export default function* iterateParallel(...args) {
  const iterators = args.map(a => a[Symbol.iterator]());
  let nexts;
  // eslint-disable-next-line no-cond-assign
  while (
    !(
      nexts = iterators.map(i => i.next())
    ).reduce((a, c) => a && c.done, true)
  ) {
    yield nexts.map(r => r.value);
  }
}
