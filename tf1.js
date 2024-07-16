
// this is the prep of traffic light 
main();

const arrowSomething = () => console.log('ji')

function main() {
    const trafficLight = {
      possibleStates: ["green", "orange", "red"],
      stateIndex: 0,
    };
  
    for (let cycle = 0; cycle < 6; cycle++) {
      const currentState = getCurrentState(trafficLight);
      console.log(cycle, "The traffic light is now", currentState);
  
      waitSync(1); 
      trafficLight.stateIndex = getNextStateIndex(trafficLight);
    }
  }


function getCurrentState(trafficLight) {
    // 

    return trafficLight.possibleStates[trafficLight.stateIndex];
  }

  function waitSync(secs) {
    const start = Date.now();
    while (Date.now() - start < secs * 1000) {
      
    }
  }
  
  
  function getNextStateIndex(trafficLight) {
    
    switch (trafficLight.possibleStates[trafficLight.stateIndex]) {
      case 'green':
        return 1; 
      case 'orange':
        return 2; 
      case 'red':
        return 0; 
      default:
        console.log("Invalid state");
        return trafficLight.stateIndex; 
    }
  }
  

  
  



  

  // that is the prop of the dice 

  function runExperiment(sampleSize) {
    const valueCounts = [0, 0, 0, 0, 0, 0];
  
    for (let i = 0; i < sampleSize; i++) {
      const randomValue = Math.floor(Math.random() * 6) + 1;
      
      valueCounts[randomValue - 1]++;
    }
  
    const results = [];
  
    for (const count of valueCounts) {
      const percentage = ((count / sampleSize) * 100).toFixed(2);
      results.push(percentage);
    }
  
    return results;
  }
  
  function main() {
    const sampleSizes = [100, 1000, 1000000];
  
    for (const size of sampleSizes) {
      const experimentResults = runExperiment(size);
      console.log(experimentResults, size);
    }
  }
  
  main();