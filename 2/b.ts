// https://adventofcode.com/2022/day/2

import { readFile } from "fs/promises";

let rps = (await readFile("./2/input.txt", "utf-8") as string).split("\n");

const key: any = {
  A: 1, // rock
  B: 2, // paper
  C: 3, // scissors
  X: 4, // lose
  Y: 5, // draw
  Z: 6, // win
}

let totalPoints = 0;
let choice = 0;
for (const play of rps) {
  const playSplit = play.split(' ')
  if (key[playSplit[1]] === 4) {
    if (key[playSplit[0]] === 1) choice = 3
    if (key[playSplit[0]] === 2) choice = 1
    if (key[playSplit[0]] === 3) choice = 2
  } else if (key[playSplit[1]] === 5) {
    choice = key[playSplit[0]]
    totalPoints += 0
  } else if (key[playSplit[1]] === 6) {
    if (key[playSplit[0]] === 1) choice = 2
    if (key[playSplit[0]] === 2) choice = 3
    if (key[playSplit[0]] === 3) choice = 1
    totalPoints += 1
  }
  //totalPoints += choice
}

console.log(totalPoints)