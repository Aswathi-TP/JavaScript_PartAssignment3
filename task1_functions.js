// Regular function to calculate result
function calculateResult(marks) {
    if (marks >= 50) {
        return "Pass";
    } 
    else {
        return "Fail";
    }
}

// Arrow function to display result
const displayResult = (name, result) => {
    console.log(name + " - " + result);
};

// Array to store learner details
let learners = [
    { name: "Anu", marks: 75 },
    { name: "Rahul", marks: 42 },
    { name: "Meena", marks: 68 },
    { name: "Arun", marks: 35 }
];

// Loop to process each learner
for (let learner of learners) {
    let result = calculateResult(learner.marks);
    displayResult(learner.name, result);
}



