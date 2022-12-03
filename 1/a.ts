// https://adventofcode.com/2022/day/1

import { readFile } from "fs/promises";

let cals = (await readFile("./1/input.txt", "utf-8") as string).split("\n");

let mostCals = 0
let currentTol = 0
let elvesFound = 0
let totalCals = 0
let currentIndexes: number[] = []
let biggestIndexes: number[] = []
while (elvesFound !== 3) {
  for (let i = 0; i < cals.length; i++) {
    if (cals[i] == "") {
      if (currentTol > mostCals) {
        mostCals = currentTol
        biggestIndexes = currentIndexes
      }
      currentIndexes = [];
      currentTol = 0;
      continue;
    }
    currentTol += parseInt(cals[i])
    currentIndexes.push(i)
  }
  console.log(biggestIndexes)
  for (const i of biggestIndexes) {
    console.log(cals[i])
    cals = cals.filter(el => cals.indexOf(el) !== i)
  }
  totalCals += mostCals
  mostCals = 0
  currentTol = 0
  currentIndexes = []
  biggestIndexes = []
  elvesFound += 1
}
console.log(totalCals)
console.log(biggestIndexes)