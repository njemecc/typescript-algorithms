//Given two crystal balls that will break if dropped from high enough
//distance,terermine the exact spot in which it will break in
//in the most optimized way

//[false,false,true,true,true]

export default function two_crystal_balls(breaks: boolean[]): number {
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

console.log(
  two_crystal_balls([
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
  ])
);
