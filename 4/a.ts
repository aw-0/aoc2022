// https://adventofcode.com/2022/day/4

import { readFile } from "fs/promises";

const ids = (await readFile("./4/input.txt", "utf-8") as string).split("\n").map((val) => val.split(','));

let overlapCount = 0;
let numMatched = 0
for (const id of ids) {
  const first = id[0].split('-').map((val) => parseInt(val))
  const second = id[1].split('-').map((val) => parseInt(val))
  console.log([first, second])
  console.log(id)
  // if second elf's range is inside first
  if (first[0] <= second[0] && first[1] >= second[1]) {
    overlapCount++
    console.log('match second')
  } else if (second[0] <= first[0] && second[1] >= first[1]) { // if first elf's range is inside second
    overlapCount++
    console.log('match first')
  }
}

console.log(overlapCount)