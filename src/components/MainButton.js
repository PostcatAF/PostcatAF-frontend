


export default function MainButton({ children, className }) {
    return (
        <button class={ `inline-flex items-center justify-center px-6 py-3 text-center text-white duration-200 bg-black border-2 border-black hover:bg-transparent hover:border-black rounded-xl hover:text-black focus:outline-none focus-visible:outline-black focus-visible:ring-black ${ className }` } type="submit">
            {children}
        </button>
    )
}