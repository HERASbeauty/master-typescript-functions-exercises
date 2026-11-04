"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getStringLength(text) {
    let count = 0;
    while (text.slice(count, count + 1) !== "") {
        count++;
    }
    return count;
}
