


export default function MessageRight({ profileImg, name, status, children }) {
    return (
        <div className='flex mt-8 flex-row-reverse'>
            <div className='flex-shrink-0'>
                <img className='h-10 w-10 rounded-full' src={ profileImg } alt="" />
            </div>
            <div className='mr-4'>
                <div className='flex items-center justify-end'>
                    <h3 className='text-sm font-medium text-gray-900'>
                        { name }
                    </h3>
                    <span className='ml-2 flex-shrink-0 inline-block px-2 py-0.5 text-green-800 text-xs font-medium bg-green-100 rounded-full'>
                        { status }
                    </span>
                </div>
                <div className='mt-2 bg-gray-50 px-8 py-6 rounded-b-2xl rounded-tl-2xl text-sm text-gray-500 text-right'>
                    { children }
                </div>
            </div>
        </div>
    )
}