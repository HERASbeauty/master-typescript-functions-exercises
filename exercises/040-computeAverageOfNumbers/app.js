"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function computeAverageOfNumbers(numbers) {
    if (numbers.length === 0) {
        return 0;
    }
    let total = 0;
    for (const num of numbers) {
        total += num;
    }
    return total / numbers.length;
}
