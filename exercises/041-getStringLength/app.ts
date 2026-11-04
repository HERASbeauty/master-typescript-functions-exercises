function getStringLength(text: string): number {
  let count = 0;

  while (text.slice(count, count + 1) !== "") {
    count++;
  }

  return count;
}

export {};
