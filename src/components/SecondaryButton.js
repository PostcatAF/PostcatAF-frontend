

export default function SecondaryButton({ children, className }) {
    return (
        <button class={ `inline-flex items-center justify-center px-6 py-3 text-center text-black duration-200 bg-white border-2 border-black hover:bg-black hover:border-black rounded-xl hover:text-white focus:outline-none focus-visible:outline-black focus-visible:ring-black ${ className }` } type="submit">
            {children}
        </button>
    )
}