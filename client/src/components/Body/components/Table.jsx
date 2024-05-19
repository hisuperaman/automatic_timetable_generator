export default function Table({timeTable}) {
    return (
        <table className="min-w-full text-sm font-light text-surface dark:text-white text-center">
            <thead className="border-b border-neutral-200 font-medium dark:border-white/10">
                <tr className="border-b border-neutral-200 dark:border-white/10">
                <th scope="col" className="px-6 py-4">Days</th>
                    {
                        timeTable[0].map((subject, index)=>{
                            return <th key={index} scope="col" className="px-6 py-4">{index+1}</th>
                        })
                    }
                </tr>
            </thead>
            <tbody>
                {
                    timeTable.map((dayTimeTable, index)=>{
                        return <tr key={index} className="border-b border-neutral-200 dark:border-white/10">
                            <th  className="whitespace-nowrap px-6 py-4 font-medium">{index+1}</th>
                            {dayTimeTable.map((subject, indexx)=>{
                                return <td key={indexx} className="whitespace-nowrap px-6 py-4 uppercase">{Object.keys(subject)[0]} <br/> {Object.values(subject)[0]}</td>
                                
                            })}
                        </tr>
                    })
                }
            </tbody>
        </table>
    )
}