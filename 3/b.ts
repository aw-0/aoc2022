// https://adventofcode.com/2022/day/3
// the brute forcing here isn't ideal... but it works!

import { readFile } from "fs/promises";

const rucksacks = (await readFile("./3/input.txt", "utf-8") as string).split("\n");

let totalPoints = 0
let seenLetters: any[] = []
for (let i = 0; i < rucksacks.length; i+=3) {
  const sacks = [
    rucksacks[i],
    rucksacks[i+1],
    rucksacks[i+2],
  ]
  console.log(sacks)
  for (const sack of sacks[0]) {
    for (const sa of sacks[1]) {
      for (const s of sacks[2]) {
        if (sack === sa && sa === s && seenLetters.indexOf(s) === -1) {
          seenLetters.push(s)
          if (s.toUpperCase() === s) {
            console.log("up")
            console.log("pt " + (s.charCodeAt(0)-38).toString())
            totalPoints += s.charCodeAt(0)-38
          } else {
            console.log("low")
            console.log("pt " + (s.charCodeAt(0)-96).toString())
            totalPoints += s.charCodeAt(0)-96
          }
        }
      }
    }
  }
  seenLetters = []
}
console.log(totalPoints)