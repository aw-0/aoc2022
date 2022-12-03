// https://adventofcode.com/2022/day/3
// the brute forcing here isn't ideal... but it works!

import { readFile } from "fs/promises";

const rucksacks = (await readFile("./3/input.txt", "utf-8") as string).split("\n");

let totalPoints = 0
let seenLetters: any[] = []
for (const sack of rucksacks) {
  const split = [sack.slice(0, sack.length/2), sack.slice(sack.length/2, sack.length)]
  for (const i of split[0]) {
    for (const j of split[1]) {
      console.log(i + ' vs ' + j)
      if (i === j && seenLetters.indexOf(i) === -1) {
        console.log("match!")
        seenLetters.push(i)
        if (i.toUpperCase() === i) {
          console.log("up")
          console.log("pt " + (i.charCodeAt(0)-38).toString())
          totalPoints += i.charCodeAt(0)-38
        } else {
          console.log("low")
          console.log("pt " + (i.charCodeAt(0)-96).toString())
          totalPoints += i.charCodeAt(0)-96
        }
      }
    }
  }
  seenLetters = []
}
console.log(totalPoints)