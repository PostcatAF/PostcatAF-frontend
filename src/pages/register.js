import Head from 'next/head'
import Link from 'next/link'

export default function Register() {
    return(
        <>
      <Head>
        <title>PostcatAF - Register</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container mx-auto">
        
        
            
        <section className='h-screen'>
                        <div class="relative flex justify-center max-h-full h-full overflow-hidden lg:px-0 md:px-12">
                          <div class="relative z-10 flex flex-col flex-1 px-4 py-10 bg-white shadow-2xl lg:py-24 md:flex-none md:px-28 sm:justify-center">
                            <div class="w-full max-w-md mx-auto md:max-w-sm md:px-0 md:w-96 sm:px-4">
                              <div class="flex flex-col">
                                <div>
                                  <h2 class="text-4xl text-black">
                                    Let's get started!
                                  </h2>
                                  <p class="mt-2 text-sm text-gray-500">
                                    Complete the details below so I can process your request and then
                                    schedule a time to discuss your goals.
                                  </p>
                                </div>
                              </div>
                              <form>
                                <input autocomplete="false" name="hidden" style={{ display: 'none' }} />
                                <input name="_redirect" type="hidden" value="#" />
                                <div class="mt-4 space-y-6">
                                  <div>
                                    <label class="block mb-3 text-sm font-medium text-gray-600" name="name">
                                      First name
                                    </label>
                                    <input class="block w-full px-6 py-3 text-black bg-white border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm" placeholder="Your name" />
                                  </div>
                                  <div class="col-span-full">
                                    <label class="block mb-3 text-sm font-medium text-gray-600" name="company">
                                      What is the name of your company / organisation?
                                    </label>
                                    <input class="block w-full px-6 py-3 text-black bg-white border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm" placeholder="Company name" />
                                  </div>
                                  <div class="col-span-full">
                                    <label class="block mb-3 text-sm font-medium text-gray-600" name="email">
                                      How shall we contact you?
                                    </label>
                                    <input class="block w-full px-6 py-3 text-black bg-white border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm" placeholder="email@example.com" autocomplete="off" type="email" />
                                  </div>
                                  <div>
                                    <div>
                                      <label class="block mb-3 text-sm font-medium text-gray-600" name="message">
                                        Project details
                                      </label>
                                      <div class="mt-1">
                                        <textarea class="block w-full px-6 py-3 text-black bg-white border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm" placeholder="What are you working on?" rows="4"></textarea>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="col-span-full">
                                    <button class="inline-flex items-center justify-center w-full px-6 py-3 text-center text-white duration-200 bg-black border-2 border-black hover:bg-transparent hover:border-black rounded-xl hover:text-black focus:outline-none" type="submit">
                                      Submit
                                    </button>
                                  </div>

                                  <div class="col-span-full">
                                    <p className='text-center'>or</p>
                                    <div className='flex justify-center mt-3'>
                                        <Link href="/" className='text-center font-bold'>Login</Link>
                                    </div>
                                </div>
                                </div>
                              </form>
                            </div>
                          </div>
                          <div class="hidden bg-white lg:block lg:flex-1 lg:relative sm:contents">
                            <div class="absolute inset-0 object-cover w-full h-full bg-white" alt="" height="1866" width="1664">
                              <img class="object-center w-full h-auto bg-gray-200" src="https://d33wubrfki0l68.cloudfront.net/64c901dbc4b16388ef27646a320ad9c1441594df/236fd/images/placeholders/rectangle2.svg" alt="" width="1310" height="873" />
                            </div>
                          </div>
                        </div>
                      </section>                               
        </main>
    </>
    )
}