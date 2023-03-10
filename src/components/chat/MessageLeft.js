


export default function MessageLeft({ profileImg, name, status, children }) {
    return (
        <div className='flex'>
            <div className='flex-shrink-0'>
                <img className='h-10 w-10 rounded-full' src={ profileImg } alt="" />
            </div>
            <div className='ml-4'>
                <div className='flex items-center'>
                    <h3 className='text-sm font-medium text-gray-900'>
                        { name }
                    </h3>
                    <span className='ml-2 flex-shrink-0 inline-block px-2 py-0.5 text-green-800 text-xs font-medium bg-green-100 rounded-full'>
                        { status }
                    </span>
                </div>
                <div className='mt-1 bg-gray-100 px-8 py-6 rounded-b-2xl rounded-tr-2xl text-sm text-gray-500'>
                    { children }
                </div>
            </div>
        </div>
    )
}