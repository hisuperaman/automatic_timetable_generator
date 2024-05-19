import { useEffect, useState } from "react";
import InputField from "../../common/InputField";
import Button from "../../common/Button";


function SubjectContainer({ subjectNo, value, onInputChange }) {
    const subjectKey = 'subject' + subjectNo;
    const teacherKey = 'teacher' + subjectNo;

    function handleInputChange(name, value) {
        onInputChange(subjectNo, name, value);
    }

    return (
        <div className="flex justify-center items-center">
            <div className="mr-4">{subjectNo+1}</div>
            <InputField name={subjectKey} value={value[subjectKey]} onInputChange={handleInputChange} placeholder={"subject"} />
            <InputField name={teacherKey} value={value[teacherKey]} onInputChange={handleInputChange} placeholder={"teacher"} />
        </div>
    )
}

function ClassroomContainer({ setClassroomInputs, classroom, noOfSubjects, onInputChange }) {

    const [subjectInputs, setSubjectInputs] = useState([]);

    useEffect(() => {
        setClassroomInputs((prevClassroomInputs) => {
            const newValue = prevClassroomInputs;
            newValue[classroom] = subjectInputs;
            return [...newValue];
        })
    }, [subjectInputs])


    useEffect(() => {
        setSubjectInputs((prevSubjectInputs) => {
            const subInputs = [];

            for (let i = 0; i < noOfSubjects; i++) {
                subInputs.push({
                    ['subject' + i]: '',
                    ['teacher' + i]: ''
                });
            }
            return subInputs;
        });
    }, []);

    function handleInputChange(index, name, value) {
        const values = [...subjectInputs];
        values[index] = { ...values[index], [name]: value };
        setSubjectInputs(values);
    }

    return (
        <div>
            <div>Classroom {classroom+1}</div>
            <div>

                {
                    subjectInputs.map((subject, index) => {
                        return <SubjectContainer key={index} subjectNo={index} value={subjectInputs[index]} onInputChange={handleInputChange} />
                    })
                }
            </div>

        </div>
    )
}

export default function SubjectInfoPane({ setIsGenerateClick, inputs, onInputChange, classroomSubjects, setClassroomSubjects }) {

    const [classrooms, setClassrooms] = useState(inputs.noOfClassrooms ? parseInt(inputs.noOfClassrooms) : 2);

    const [classroomInputs, setClassroomInputs] = useState([]);


    function handleInputChange() {

    }

    const classroomsArray = new Array(classrooms).fill(0);

    function handleGenerateClick() {
        const values = classroomInputs.map((classroom) => {
            return classroom.map((subject) => {
                return {
                    [Object.values(subject)[0].toLowerCase().trim()]: Object.values(subject)[1].toLowerCase().trim()
                }
            })
        });

        setIsGenerateClick(true);

        setClassroomSubjects(values);
    }

    return (
        <div>
            <div className="text-lg">
                Subjects Info
            </div>

            {
                classroomsArray.map((c, index) => {
                    return <ClassroomContainer key={index} setClassroomInputs={setClassroomInputs} noOfSubjects={inputs.noOfSubjects} classroom={index} onInputChange={handleInputChange} />
                })
            }


            <div className="flex justify-center items-center">
                <Button text={'Generate'} onButtonClick={handleGenerateClick} />
            </div>

        </div>
    )
}