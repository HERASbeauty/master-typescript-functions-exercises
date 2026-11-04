function computeAverageOfNumbers(numbers: number[]): number {
  if (numbers.length === 0) {
    return 0;
  }

  let total = 0;

  for (const num of numbers) {
    total += num;
  }

  return total / numbers.length;
}

export {};
