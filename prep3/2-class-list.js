import { currentMentorsForModule } from "./1-find-mentors.js";
import { modules, students, mentors, classes } from "./hyf.js";

/**
 * We would like to have a list of everyone that is currently participating in a class.
 * This means the students, but also the mentors that are currently teaching the class.
 * The students should be self explanatory, but to find the mentors you will need to follow these steps:
 * - Check what the `currentModule` of the class is
 * - Find the mentor(s) that are `nowTeaching` that module
 *
 * Should return the list of names and their roles. So something like:
 *
 *  [{ name: 'John', role: 'student' }, { name: 'Mary', role: 'mentor' }]
 */
export const getPeopleOfClass = (className) => {
  const studentsInClassName = students.filter((student) => {
    const isInCurrentClass = student.class === className;
    const hasNotGraduated = student.graduated === false;
    return isInCurrentClass && hasNotGraduated;
  });

  const classCurrentModule = classes.find(
    (hyfClass) => hyfClass.name === className && hyfClass.currentModule
  );
  const moduleCurrentMentors = currentMentorsForModule(
    classCurrentModule.currentModule
  );
  const mentorObjects = moduleCurrentMentors.map((mentor) => {
    return { name: mentor, role: "mentor" };
  });
  const studentObjects = studentsInClassName.map((student) => {
    return { name: student.name, role: "student" };
  });

  return [...studentObjects, ...mentorObjects];
};
// You can uncomment out this line to try your function
// console.log(getPeopleOfClass('class34'));

/**
 * We would like to have a complete overview of the current active classes.
 * First find the active classes, then for each get the people of that class.
 *
 * Should return an object with the class names as properties.
 * Each class name property contains an array identical to the return from `getPeopleFromClass`. So something like:
 *
 *  {
 *    class34: [{ name: 'John', role: 'student' }, { name: 'Mary', role: 'mentor' }],
 *    class35: [{ name: 'Jane', role: 'student' }, { name: 'Steve', role: 'mentor' }]
 *  }
 */
export const getActiveClasses = () => {
  const activeClasses = classes
    .filter((classObject) => !!classObject.active)
    .map((x) => x.name);
  const result = {};
  for (const className of activeClasses) {
    result[className] = getPeopleOfClass(className);
  }

  console.log(result);
  return result;
  // TODO complete this function
};
// You can uncomment out this line to try your function
// console.log(getActiveClasses());
