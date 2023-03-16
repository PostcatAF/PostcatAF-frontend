
import Menu from '@/components/Menu'
import Head from 'next/head'

export default function Template({ title, description, children }) {
    return (
        <>
            <Head>
                <title>{ title }</title>
                <meta name="description" content={ description } />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <div className="flex h-screen overflow-hidden bg-white">
                    <Menu />
                    <div className="flex flex-col flex-1 w-0 overflow-hidden">
                        <main className="relative flex-1 overflow-y-auto focus:outline-none">
                            <div className="py-6">
                                {children}
                            </div>
                        </main>
                    </div>
                </div>
            </main>
        </>
    )
}