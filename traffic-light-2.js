"use strict";
/**
 * The `possibleStates` property define the states (in this case: colours)
 * in which the traffic light can be.
 * The `stateIndex` property indicates which of the possible states is current.
 */
const trafficLight = {
  possibleStates: ["green", "orange", "red"],
  stateIndex: 0,
};

export const getState = (currentState) => {
    switch (currentState) {
        case "green":
          return 1;
          break;
        case "orange":
          return 2;
          break;
        case "red":
        return 0;
          break;
        default:
          throw new Error("Impossible!");
      }
}

// cycle, length are all defined in the condition. 
for (let cycle = 0; cycle < 6; cycle++) {
  const currentState = trafficLight.possibleStates[trafficLight.stateIndex];
  console.log("The traffic light is on", currentState);

  trafficLight.stateIndex = getState(currentState)


  // TODO
  // if the color is green, turn it orange
  // if the color is orange, turn it red
  // if the color is red, add 1 to cycles and turn it green
}



/**
 * The output should be:

The traffic light is on green
The traffic light is on orange
The traffic light is on red
The traffic light is on green
The traffic light is on orange
The traffic light is on red

*/