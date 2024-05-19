const util = require('util');


function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}


let no_of_days = 5
let no_of_subjects = 4
let no_of_classrooms = 2

let classrooms_subjects = [
    [
        { 'AI': 'John' },
        { 'ML': 'Bruce' },
        { 'DL': 'Max' },
        { 'BOM': 'Kate' }
    ],
    [
        { 'WC': 'Kate' },
        { 'OS': 'Mary' },
        { 'Python': 'Bruce' },
        { 'Java': 'John' }
    ]
]

const time_slot = 1 // 1 hour


function getTimeTable(no_of_days, no_of_subjects, no_of_classrooms, classrooms_subjects, maxTime=2000){
    // timeout mechanism
    const startTime = Date.now();

    let timeExceeded = false;

    const timeoutId = setTimeout(()=>{
        timeExceeded = true;
    }, maxTime);


    console.log("Generating time table...")

    let timeTable = {};
    for (let classroom = 0; classroom < no_of_classrooms; classroom++) {
    
        let daysTimeTable = [];
        for (let day = 0; day < no_of_days; day++) {
            let dayTimeTable = [];
            let availableSubjectIndexes = [];
    
            for(let subject_index = 0; subject_index < no_of_subjects; subject_index++){
                availableSubjectIndexes.push(subject_index);
            }
    
            for (let subject = 0; subject < no_of_subjects; subject++) {
    
                let gotTheSubject = false;
                let the_subject;
    
                while(!gotTheSubject){

                    if(timeExceeded ||  Date.now() - startTime > maxTime){
                        console.log("Took too long, try again!")
                        clearTimeout(timeoutId);
                        return -1;
                    }


                    const classroom_subject_index = availableSubjectIndexes[getRandomInt(0, availableSubjectIndexes.length)];
                    the_subject = classrooms_subjects[classroom][classroom_subject_index];
    
    
                    const the_subject_teacher = Object.values(the_subject)[0];
                    
                    let isSubjectSafe = true;
    
                    if(classroom>0){
                        for(let prevClassRoom = classroom-1; prevClassRoom>=0; prevClassRoom--){
                            const prevClassRoom_subject = timeTable[prevClassRoom][day][subject];
                            const prevClassRoom_subject_teacher = Object.values(prevClassRoom_subject)[0];
    
    
                            if(prevClassRoom_subject_teacher==the_subject_teacher){
                                isSubjectSafe = false;
                                break;
                            }
                        }
                    }
    
                    
                    if(isSubjectSafe){
                        availableSubjectIndexes = availableSubjectIndexes.filter((s)=>s!=classroom_subject_index);
                        gotTheSubject = true;
                    }
                    
    
                }
    
                dayTimeTable.push(the_subject);
    
            }
    
            daysTimeTable.push(dayTimeTable);
    
    
        }
    
        timeTable[classroom] = daysTimeTable;
    
    }

    clearTimeout(timeoutId);
    return timeTable;

}

const timeTable = getTimeTable(no_of_days, no_of_subjects, no_of_classrooms, classrooms_subjects);
console.log(util.inspect(timeTable, {depth: null}));