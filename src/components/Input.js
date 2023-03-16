

export default function Input({ type, placeholder }) {
    return (
        <input type={ type } className="w-full h-10 pl-3 pr-10 text-base placeholder-gray-300 border rounded-lg focus:shadow-outline" placeholder={ placeholder } />
    )
}