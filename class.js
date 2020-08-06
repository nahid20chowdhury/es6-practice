class Student {
    constructor(sId, sName) {
        this.id = sId;
        this.name = sName;
        this.school = 'Kolimunnesa Primary School'
    }
}

const student1 = new Student(1, 'Nahid')
const student2 = new Student(2, 'Voshu')
const student3 = new Student(3, 'Bappi')
console.log(student1, student2, student3)
    // console.log(student1.name, student2.id)