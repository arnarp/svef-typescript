function countLines(text?: (string | null)[]): number {
  if (!text) {
    return 0;
  }
  let count = 0;
  for (const line of text) {
    if (line && line.length !== 0) {
      count = count + 1;
    }
  }
  return count;
}

countLines(['one', 'two', '', 'four']);
countLines(['hello', null]);
countLines();