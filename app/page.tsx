import { Link } from 'next/link'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="flex flex-col items-center justify-center flex-1 w-full px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to <a className="text-blue-600" href="https://nextjs.org">Dogs World</a>
        </h1>

        <p className="mt-3 text-2xl">
          Get all the information about your favorite dogs breeds
        </p>

        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
          <Link href="/breeds">
            <a className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600">
              <h3 className="text-2xl font-bold">Dog Breeds &rarr;</h3>
              <p className="mt-4 text-xl">
                Discover the different breeds of dogs and their characteristics.
              </p>
            </a>
          </Link>

          <Link href="/care">
            <a className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600">
              <h3 className="text-2xl font-bold">Dog Care &rarr;</h3>
              <p className="mt-4 text-xl">
                Learn how to take care of your dog.
              </p>
            </a>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  )
}