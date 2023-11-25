// Constructor function for Student details
function Student(name, roll_no, className, section, marks_of_5_subjects) {
    this.name = name;
    this.roll_no = roll_no;
    this.class = className;
    this.section = section;
    this.marks_of_5_subjects = marks_of_5_subjects;

    // Function method to print top three subjects based on marks
    this.printTop3Subjects = function () {
        // Sorting the subjects based on marks
        let sortedSubjects = Object.keys(this.marks_of_5_subjects).sort((a, b) => {
            return this.marks_of_5_subjects[b] - this.marks_of_5_subjects[a];
        });

        // Printing the top three subjects
        console.log("Top 3 Subjects:");
        for (let i = 0; i < 3; i++) {
            console.log(`${i + 1}. ${sortedSubjects[i]} - ${this.marks_of_5_subjects[sortedSubjects[i]]}`);
        }
    };

    // Function method to print the report card
    this.printReportCard = function () {
        // Calculating the percentage
        let totalMarks = Object.values(this.marks_of_5_subjects).reduce((acc, curr) => acc + curr, 0);
        let percentage = (totalMarks / (Object.keys(this.marks_of_5_subjects).length * 100)) * 100;

        // Printing the report card
        console.log("+--------------------+");
        console.log("|     REPORT CAR    |");
        console.log("+--------------------+");
        console.log(`| Name     - ${this.name} |`);
        console.log(`| Roll no. - ${this.roll_no}      |`);
        console.log(`| Class    - ${this.class}       |`);
        console.log(`| Section  - ${this.section}       |`);
        for (let subject in this.marks_of_5_subjects) {
            console.log(`| ${subject.charAt(0).toUpperCase() + subject.slice(1)}  - ${this.marks_of_5_subjects[subject]}      |`);
        }
        console.log(`| Percentage - ${percentage.toFixed(1)} %  |`);
        console.log("+--------------------+");
    };
}

// Example usage:
let student1 = new Student("Huzaifa", 16, "X", "A", {
    science: 72,
    maths: 75,
    social_science: 79,
    english: 80,
    hindi: 67
});

// Example: Print top 3 subjects
student1.printTop3Subjects();

// Example: Print report card
student1.printReportCard();
