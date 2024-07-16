"use strict";
main();

function main() {
  const sampleSizes = [100, 1000, 1000000];

  for (const size of sampleSizes) {
    console.log(runExperiment(size), size);
  }
}

function runExperiment(sampleSize, dieSides = 6) {
  const valueCounts = Array(6).fill(0);

  for (let i = 0; i < sampleSize; i++) {
    const randomDie = getRandomDice();
    valueCounts[randomDie - 1]++;
  }
  function getRandomDice() {
    return Math.ceil(Math.random() * 6);
  }

  function convertToPercentages(valueCounts, sampleSize) {
    return valueCounts.map((count) => ((count / sampleSize) * 100).toFixed(2));
  }
 
  return convertToPercentages(valueCounts, sampleSize);
}


