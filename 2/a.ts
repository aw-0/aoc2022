// https://adventofcode.com/2022/day/2

import { readFile } from "fs/promises";

let rps = (await readFile("./2/input.txt", "utf-8") as string).split("\n");

const key: any = {
  A: 1, // rock
  B: 2, // paper
  C: 3, // scissors
  X: 1, // rock
  Y: 2, // paper
  Z: 3, // scissors
}

let totalPoints = 0;
for (const play of rps) {
  const playSplit = play.split(' ')
  totalPoints += key[playSplit[1]];
  console.log(key[playSplit[0]] + 'vs' + key[playSplit[1]])
  if (key[playSplit[0]] === key[playSplit[1]]) {
    // tie
    console.log('tie')
    totalPoints += 3
  } else if ((key[playSplit[0]] === 1 && key[playSplit[1]] === 2) || (key[playSplit[0]] === 2 && key[playSplit[1]] == 3) || (key[playSplit[0]] === 3 && key[playSplit[1]] === 1)) {
    // win
    console.log('win')
    totalPoints += 6
  }
}

console.log(totalPoints)