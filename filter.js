  
/**
 * To run this file in Gitpod, use the 
 * command node filter.js in the terminal
 */


// Simple Filtering
const people = [
  {
    name: 'Michael',
    age: 23,
  },
  {
    name: 'Lianna',
    age: 16,
  },
  {
    name: 'Paul',
    age: 18,
  },
];

//filtering for the people that has age equal or above 21

const oldEnough = people.filter(person => person.age >= 21);
console.log(oldEnough);

const paul = people.filter(person => person.name === "Paul");
console.log("Paul obj: ", paul);



// Complex Filtering
const students = [
  {
    id: 1,
    name: 'Mark',
    profession: 'Developer',
    skills: [
      { name: 'javascript', yrsExperience: 1 },
      { name: 'html', yrsExperience: 5 },
      { name: 'css', yrsExperience: 3 },
    ]
  },
  {
    id: 2,
    name: 'Ariel',
    profession: 'Developer',
    skills: [
      { name: 'javascript', yrsExperience: 0 },
      { name: 'html', yrsExperience: 4 },
      { name: 'css', yrsExperience: 2 },
    ]
  },
  {
    id: 3,
    name: 'Jason',
    profession: 'Designer',
    skills: [
      { name: 'javascript', yrsExperience: 1 },
      { name: 'html', yrsExperience: 1 },
      { name: 'css', yrsExperience: 5 },
    ]
  },
];

//Imagine we want a list of candidates that has at leas 5 years experience in the skills set.

//first run on every stundet on the array students
const candidates = students.filter(stundent => {
  //then we will filter in the skills array of each student
  //to check if they have the condictions that we need
  let strongSkills = stundent.skills.filter(skill => skill.yrsExperience >= 5);
  //since that in the case o negative the student will be with a empy array so we just want those who has
  // the >= 5 years so we verify if the new array is greater than 0
  return strongSkills.length > 0;

})

console.log(candidates);


