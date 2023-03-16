import MessageLeft from '@/components/chat/MessageLeft'
import MessageRight from '@/components/chat/MessageRight'
import Input from '@/components/Input'


export default function MainChat({ title }) {
    return (
        <div className="px-4 mx-auto 2xl:max-w-7xl sm:px-6 md:px-8">
            <div className="py-4">
                <div className="h-full border border-gray-200 border-dashed rounded-lg">
                    <div className='w-full py-4 px-6 grid grid-cols-3'>
                        <h1 className='font-semibold text-2xl'>{title}</h1>
                        <div className="relative inline-flex items-center w-full" x-data="{ open: false }">
                            <div className="flex flex-col w-full">
                                <div className="relative">
                                    <input type="text" className="w-full h-10 pl-3 pr-10 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline" placeholder="Search" />
                                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-search" width="20" height="20" viewBox="0 0 24 24" stroke-width="0.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <circle cx="10" cy="10" r="7" />
                                            <line x1="21" y1="21" x2="15" y2="15" />
                                        </svg>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='flex justify-end'>
                            <button type="button" class="inline-flex items-center justify-center px-4 py-2 text-center text-black duration-200 bg-white border-2 border-black hover:bg-transparent hover:border-black rounded-xl hover:text-black focus:outline-none focus-visible:outline-black focus-visible:ring-black">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-notebook" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M6 4h11a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-11a1 1 0 0 1 -1 -1v-14a1 1 0 0 1 1 -1m3 0v18" />
                                    <line x1="13" y1="8" x2="15" y2="8" />
                                    <line x1="13" y1="12" x2="15" y2="12" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>


            <div className="py-4">
                <div className="relative h-[45rem] border border-gray-200 border-dashed rounded-lg py-4 px-6">
                    <div className='h-full'>
                        <MessageLeft profileImg="https://jvngarcia.com/wp-content/uploads/2021/01/community-group.png" name="Juan Garcia" status="online" >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
                        </MessageLeft>


                        <MessageRight profileImg="https://jvngarcia.com/wp-content/uploads/2021/01/community-group.png" name="Juan Garcia" status="online">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
                        </MessageRight>
                    </div>


                    <div className='absolute bottom-0 left-0 bg-gray-50 w-full py-5 px-6 flex'>
                        <Input placeholder='Hi!, how are you?' type='text' />
                        <button className='ml-2 bg-blue-100 hover:bg-blue-200 px-4 border-blue-300 border rounded-lg transition-all'>
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-send" width="20" height="20" viewBox="0 0 24 24" stroke-width="1" stroke="#1e3a8a" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <line x1="10" y1="14" x2="21" y2="3" />
                                <path d="M21 3l-6.5 18a0.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a0.55 .55 0 0 1 0 -1l18 -6.5" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}