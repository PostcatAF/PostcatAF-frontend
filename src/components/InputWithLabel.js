


export default function InputWithLabel({ label, type, placeholder }) {
    return (
        <>
            <label class="block mb-3 text-sm font-medium text-gray-600" name={ label }>
                { label }
            </label>
            <input class="block w-full px-2 py-3 text-black bg-white border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm" placeholder={ placeholder } autocomplete="off" type={ type } />
        </>
    )
}