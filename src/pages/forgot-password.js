import InputWithLabel from '@/components/InputWithLabel'
import MainButton from '@/components/MainButton'
import Head from 'next/head'
import Link from 'next/link'

export default function ForgotPassword() {
    return (
        <>
            <Head>
                <title>PostcatAF - Forgot your password?</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="container mx-auto">


                <section className='flex justify-center items-center h-screen'>
                    <div class="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-20 max-w-7xl">
                        <div class="w-full max-w-xl p-8 mx-auto text-center">
                            <div>
                                <h2 class="text-4xl tracking-tighter text-black">
                                    Forgot your password?
                                </h2>
                            </div>
                            <div class="mt-2">
                                <div class="mt-6">
                                    <form action="#" method="POST" class="space-y-2">
                                        <div class="col-span-full">
                                            <InputWithLabel label='How shall we contact you?' type='email' placeholder="email@example.com" />
                                        </div>
                                        <div>
                                            <MainButton className='w-full'>
                                                Submit
                                            </MainButton>
                                        </div>
                                        <div class="col-span-full">
                                            <p className='text-center'>or</p>
                                            <div className='flex justify-center mt-3'>
                                                <Link href="/" className='text-center font-bold'>Login</Link>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}