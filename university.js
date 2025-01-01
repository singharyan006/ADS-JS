// CREATING THE DATA STRUCTURE 
const university={
    departments:{
        "Computer Science":{
            professors:[
                {id:'P1',name:'Punnuswamy',course:'PPS'},
                {id:'P2',name:'Muttuswamy',course:'OOPS'}
            ],
            students:[
                {id:'RA123',name:'Sharat',age:19},
                {id:'RA124',name:'Pravaat',age:19}
            ]
        },
        "Foreign Language":{
            professors:[
                {id:'P6',name:'Radhakrishnan',course:'French'},
                {id:'P8',name:'Jackson',course:'German'}
            ],
            students:[
                {id:'RA128',name:'Atul',age:18},
                {id:'RA129',name:'Jaya',age:18}
            ]
        }
    }
};
//console.log(university.departments['Foreign Language']);

//CREATING FUNCTIONS FOR VALIDATION OF THE DATA
const isValidProfessor=(professors) =>{
    return typeof professors.id==='string'&& 
        typeof professors.name==='string'&& 
        typeof professors.course==='string';
}

const isValidStudent=(students) =>{
    return typeof students.id==='string'&&
        typeof students.name==='string'&& 
        typeof students.age==='number'&&students.age>17;
}

const isValidDepartment=(departmentname)=>{
    return typeof departmentname==='string'
}

//CREAATING FUNCTIONS TO ADD NEW ENTRIES 


//FUNCTION TO ADD NEW DEPT
const addDepartment=(deptName)=>{
    if(isValidDepartment(deptName)){
        university.departments[deptName]={professors:[],students:[]};
        console.log('New Department added successfully.');
    }
    else{
        console.log("Invalid Department.")
    }
}


//FUNCTION TO ADD NEW PROFESSORS
const addProfessor=(prof)=>{
    if(isValidProfessor(prof)){
        university.departments[deptName].professors.push(prof);
        console.log('Data of ${prof} added.');}
    else{
        console.log("Invalid Entry.");
    }
}



//FUNCTION TO ADD NEW STUDENTS
const addStudent=(stud)=>{
    if(isValidStudent(stud)){
        university.departments[deptName].students.push(stud);
        console.log('New ${stud} has beed added.');
    }
    else{
        console.log("Invalid Entry.");
    }
}

// FUNCTION TO UPDATE PROFESSORS
function updateProfessor(deptName, profId, newName, newCourse) {
    const department = university.departments[deptName];
    if (department) {
        const professors = department.professors;
        for (let i = 0; i < professors.length; i++) {
            if (professors[i].id === profId) {
                professors[i].name = newName;
                professors[i].course = newCourse;
                console.log("Professor updated successfully.");
                return;
            }
        }
        console.log("Professor not found.");
    } else {
        console.log("Invalid department name.");
    }
}

// FUNCTION TO UPDATE STUDENTS
function updateStudent(deptName, studentId, newName, newAge) {
    const department = university.departments[deptName];
    if (department) {
        const students = department.students;
        for (let i = 0; i < students.length; i++) {
            if (students[i].id === studentId) {
                students[i].name = newName;
                students[i].age = newAge;
                console.log("Student updated successfully.");
                return;
            }
        }
        console.log("Student not found.");
    } else {
        console.log("Invalid department name.");
    }
}


// FUNCTION TO DELETE PROFESSORS
function deleteProfessor(deptName, profId) {
    const department = university.departments[deptName];
    if (department) {
        const professors = department.professors;
        for (let i = 0; i < professors.length; i++) {
            if (professors[i].id === profId) {
                professors.splice(i, 1); // Remove professor at index i
                console.log("Professor deleted successfully.");
                return;
            }
        }
        console.log("Professor not found.");
    } else {
        console.log("Invalid department name.");
    }
}

// FUNCTION TO DELETE STUDENTS
function deleteStudent(deptName, studentId) {
    const department = university.departments[deptName];
    if (department) {
        const students = department.students;
        for (let i = 0; i < students.length; i++) {
            if (students[i].id === studentId) {
                students.splice(i, 1); // Remove student at index i
                console.log("Student deleted successfully.");
                return;
            }
        }
        console.log("Student not found.");
    } else {
        console.log("Invalid department name.");
    }
}


// FUNCTION TO SEARCH PROFESSORS
function searchProfessor(deptName, profName) {
    const department = university.departments[deptName];
    if (department) {
        const professors = department.professors;
        for (let i = 0; i < professors.length; i++) {
            if (professors[i].name === profName) {
                console.log("Professor found:", professors[i]);
                return;
            }
        }
        console.log("Professor not found.");
    } else {
        console.log("Invalid department name.");
    }
}

// FUNCTION TO SEARCH STUDENTS
function searchStudent(deptName, studentName) {
    const department = university.departments[deptName];
    if (department) {
        const students = department.students;
        for (let i = 0; i < students.length; i++) {
            if (students[i].name === studentName) {
                console.log("Student found:", students[i]);
                return;
            }
        }
        console.log("Student not found.");
    } else {
        console.log("Invalid department name.");
    }
}