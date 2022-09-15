import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>nextjs-tailwind-template</title>
                <meta
                    name="description"
                    content="Personal Next.js and Tailwind project template "
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="container mx-auto py-4">
                <h1 className="text-3xl font-bold">Hello world</h1>
                <p>
                    This project is generated with create-next-app and
                    tailwindcss
                </p>
            </div>
        </>
    )
}

export default Home
