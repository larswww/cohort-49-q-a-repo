"use strict";
import { getState } from "./traffic-light-2";
/**
 * The `state` property says what the traffic light's state (i.e. colour) is at
 * that moment.
 */
const ORANGE = 'orange'
const trafficLight = {
  state: "green",
};

let rotations = 0;
// while; if the condition isn't realised the program does nothing
// do while; will write the condition one time
do {
  const currentState = trafficLight.state;
  console.log("The traffic light is on", currentState);

  console.time('switchStatement')
  trafficLight.state = getState()
  }
  console.timeEnd('switchStatement')


//   console.time('ifStatement')
//   if (currentState === "green") {
//     trafficLight.state = "orange";
//   } else if (currentState === "orange") {
//     trafficLight.state = "red";
//   } else if (currentState === "red") {
//     trafficLight.state = "green";
//     rotations++;
//   } else {
//     throw new Error("should be impossible");
//   }
  console.timeEnd('ifStatement')

  // TODO
  // if the color is green, turn it orange
  // if the color is orange, turn it red
  // if the color is red, add 1 to rotations and turn it green
} while (rotations < 2);

/**
 * The output should be:

The traffic light is on green
The traffic light is on orange
The traffic light is on red
The traffic light is on green
The traffic light is on orange
The traffic light is on red

*/
