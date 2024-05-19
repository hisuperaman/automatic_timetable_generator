export default function Button({ text, onButtonClick }) {
    return (
        <div onClick={onButtonClick} className="mt-8 cursor-pointer rounded-lg bg-light-secondary dark:bg-dark-secondary dark:bg-dark-hover1 hover:bg-light-hover1 text-white text-lg text-center w-20">
            {text}
        </div>
    )
}