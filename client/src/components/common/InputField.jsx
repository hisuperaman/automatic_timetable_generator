export default function InputField({label, name, value, onInputChange, placeholder, required}) {
    return (
        <div>
            <label className="">
                <span className="text-sm font-medium text-slate-700">
                    {label}
                </span>
                <input type="text" value={value} onChange={(e)=>onInputChange(name, e.target.value)} className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder={placeholder} />
            </label>
        </div>
    )
}