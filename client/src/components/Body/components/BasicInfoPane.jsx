import InputField from "../../common/InputField"

export default function BasicInfoPane({ inputs, onInputChange }) {
    return (
        <div className="">
            <div className="text-lg">
                Basic Info
            </div>
            <div>
                <InputField label={"Enter number of days"} name={'noOfDays'} value={inputs.noOfDays} onInputChange={onInputChange} placeholder={"5"} />
                <InputField label={"Enter number of classrooms"} name={'noOfClassrooms'} value={inputs.noOfClassrooms} onInputChange={onInputChange} placeholder={"2"} />
                <InputField label={"Enter number of subjects"} name={'noOfSubjects'} value={inputs.noOfSubjects} onInputChange={onInputChange} placeholder={"5"} />
            </div>
        </div>
    )
}