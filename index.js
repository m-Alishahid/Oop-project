#! /usr/bin/env node 
//Oop project
console.log(chalk.yellowBright("**********OOP Project**********(By:m.a.s)"));
import chalk from "chalk";
import inquirer from "inquirer";
class Student {
    name;
    constructor(n) {
        this.name = n;
    }
}
class Person {
    students = [];
    addStudent(obj) {
        this.students.push(obj);
    }
}
const person = new Person();
const programStart = async (person) => {
    do {
        console.log("Welcome!");
        const ans = await inquirer.prompt([{
                name: "select",
                type: "list",
                message: "Whom would you like to interact with?",
                choices: ["Staff", "Students", "Exit"]
            }]);
        if (ans.select == "Staff") {
            console.log("You approach the staff room.please feel free to ask any question.");
        }
        else if (ans.select == "Students") {
            const ans = await inquirer.prompt([{
                    name: "student",
                    type: "input",
                    message: " Enter the student name you wish to engaged with:"
                }]);
            const student = person.students.find(val => val.name == ans.student);
            if (!student) {
                const name = new Student(ans.student);
                person.addStudent(name);
                console.log(`Hello I am ${name.name}.Nice to meet you!`);
                console.log("New Student added");
                console.log("Current student list:");
                console.log(person.students);
            }
            else {
                console.log(`Hello I am ${student.name}. Nice to see you again!`);
                console.log("Existing students list:");
                console.log(person.students);
            }
        }
        else if (ans.select == "Exit") {
            console.log("Exiting the program...");
            process.exit();
        }
    } while (true);
};
programStart(person);
