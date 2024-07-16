import { modules, students, mentors, classes } from "./hyf.js";

/**
 * Tjebbe would like help to get a list of possible mentors for a module.
 * Fill in this function that finds all the mentors that can teach the given module.
 *
 * It should return an array of names. So something like:
 *  ['John', 'Mary']
 */
export const possibleMentorsForModule = (moduleName) => {
  const possibleMentors = mentors.filter((mentor) =>
    mentor.canTeach.includes(moduleName)
  );
  const namesOnly = possibleMentors.map((mentor) => mentor.name);
  return namesOnly;
};

export const currentMentorsForModule = (moduleName) => {
  if (!moduleName) throw new Error('There should be a module name')
  const possibleMentors = mentors.filter((mentor) =>
    mentor.nowTeaching && mentor.nowTeaching === moduleName
  );
  const namesOnly = possibleMentors.map((mentor) => mentor.name);
  return namesOnly;
}

// You can uncomment out this line to try your function
// console.log(possibleMentorsForModule('using-apis'));

/**
 * Tjebbe wants to make it even easier for himself.
 * Fill in this function that chooses a random mentor to teach the given module.
 *
 * It should return a single name.
 */

export const getRandomNumber = (max) => {
  return Math.floor(Math.random() * max);
};

export const findMentorForModule = (moduleName) => {
  const mentors = possibleMentorsForModule(moduleName);
  const randomNumber = getRandomNumber(mentors.length - 1);
  const randomMentor = mentors[randomNumber];
  if (!randomMentor) throw new Error("There should be a mentor name");
  return randomMentor;
};
// You can uncomment out this line to try your function
// console.log(findMentorForModule('javascript'));
