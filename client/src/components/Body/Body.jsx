import { useEffect, useState } from "react";
import BasicInfoPane from "./components/BasicInfoPane";
import Button from "../common/Button";
import SubjectInfoPane from "./components/SubjectInfoPane";
import { getTimeTable } from "../../helpers";
import Table from "./components/Table";


export default function Body() {

    const [inputs, setInputs] = useState({
        noOfDays: '',
        noOfClassrooms: '',
        noOfSubjects: ''
    });

    const [classroomSubjects, setClassroomSubjects] = useState([]);

    const [isGenerateClick, setIsGenerateClick] = useState(false);

    const [timeTable, setTimeTable] = useState(null);


    useEffect(() => {
        if (isGenerateClick) {
            const theTimeTable = getTimeTable(inputs.noOfDays, inputs.noOfSubjects, inputs.noOfClassrooms, classroomSubjects);
            setTimeTable(theTimeTable);
            setIsGenerateClick(false);
        }
    }, [isGenerateClick]);



    const [pageNumber, setPageNumber] = useState(0);

    function handleInputChange(name, value) {
        setInputs((prevInputs) => {
            return {
                ...prevInputs,
                [name]: value
            }
        })
    }

    function handleNextClick() {
        // if(inputs.noOfDays!='' && inputs.noOfClassrooms!='' && inputs.noOfSubjects!=''){
        setPageNumber(1);
        // }
    }

    return (
        <div className="mt-5 flex flex-col justify-center items-center p-4">
            {
                pageNumber === 0 ?
                    <>
                        <BasicInfoPane inputs={inputs} onInputChange={handleInputChange} />
                        <Button text={'Next'} onButtonClick={handleNextClick} />
                    </>
                    : <SubjectInfoPane setIsGenerateClick={setIsGenerateClick} inputs={inputs} classroomSubjects={classroomSubjects} setClassroomSubjects={setClassroomSubjects} />
            }


            <div>
                {
                    timeTable ?
                        Object.entries(timeTable).map(([classroomNumber, classroomTimetable]) => {
                            return <div key={classroomNumber} className="mb-8">
                                <div>
                                    Classroom {parseInt(classroomNumber) + 1}
                                </div>
                                <Table timeTable={classroomTimetable} />
                            </div>
                        })
                        : ''
                }
            </div>

        </div>
    )
}