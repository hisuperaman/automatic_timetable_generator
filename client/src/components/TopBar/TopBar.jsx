export default function TopBar() {
    return (
        <div>
            <div className="bg-light-secondary flex items-center text-white p-4 text-xl font-bold md:text-3xl border-b-2 border-light-secondary dark:border-dark-secondary">
                <div onClick={()=>window.location.reload()} className="border rounded-xl inline-block p-2 px-4 flex items-center justify-center cursor-pointer hover:bg-light-hover2 dark:hover:bg-dark-hover2">
                    Time Table Generator
                </div>
            </div>
        </div>
    )
}