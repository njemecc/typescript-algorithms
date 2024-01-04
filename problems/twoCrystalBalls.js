"use strict";
//Given two crystal balls that will break if dropped from high enough
//distance,terermine the exact spot in which it will break in
//in the most optimized way
Object.defineProperty(exports, "__esModule", { value: true });
//[false,false,true,true,true]
function two_crystal_balls(breaks) {
    const jmpAmount = Math.floor(Math.sqrt(breaks.length));
    let i = jmpAmount;
    for (; i < breaks.length; i += jmpAmount) {
        if (breaks[i]) {
            break;
        }
    }
    i -= jmpAmount;
    for (let j = 0; j < jmpAmount; ++j, ++i) {
        if (breaks[i]) {
            return i;
        }
    }
    return -1;
}
exports.default = two_crystal_balls;
console.log(two_crystal_balls([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    true,
    true,
    true,
    true,
    true,
]));
