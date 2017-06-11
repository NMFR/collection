export default function pipe(input, ...functions) {
  let output = input;
  for (const f of functions) {
    output = f(output);
  }
  return output;
}
