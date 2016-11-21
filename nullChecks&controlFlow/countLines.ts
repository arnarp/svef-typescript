function countLines(text?: string[]): number {
  let count: number;
  for (const line of text) {
    if (line.length !== 0) {
      count = count + 1;
    }
  }
  return count;
}

countLines(['one', 'two', '', 'four']);
countLines(['hello', null]);
countLines();