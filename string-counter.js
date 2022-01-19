export function stringCounter(str) {
  if (!str) return null;
  let i = 1;

  while (str[i]) {
    i += 1;
  }

  return i;
}
