"use strict";
  
function runExperiment(sampleSize) {
  const valueCounts = [0, 0, 0, 0, 0, 0]; 
  for (let i = 0; i <= sampleSize; i++) {
    const randomInt = Math.ceil(Math.random() * 6);
    valueCounts[randomInt - 1] += 1;
  }

  const results = [];
  for (const timesThrown of valueCounts) {
    const percentage = (timesThrown / sampleSize) * 100;
    const percentageString = percentage.toFixed(2);
    results.push(percentageString);
  }

  return results;
}

function main() {
  const sampleSizes = [100, 1000, 1000000];
  for (let times of sampleSizes) {
    console.log(runExperiment(times), times);
  }
}

main();