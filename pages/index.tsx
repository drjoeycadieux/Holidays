import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Christmas and holiday season</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-gray-800 p-9">
        <h1 className="text-white text-center text-5xl">
          Christmas and holiday season
        </h1>
        <p className="text-white text-center">From Developers</p>
      </main>

      <div className="bg-blue-800 p-5 text-white text-center">
        <h1>
          What months are holiday season?
          the holiday season | Business English
          the period between late December and early January that includes Christmas, Hanukkah, and New Year: Planning for the holiday season begins as early as February.
        </h1>
      </div>

      <div className="bg-white text-center p-9 font-sans text-5xl font-bold">
          <h1>
           Hello! Dev
          </h1>
      </div>

      <div className="p-9 bg-gray-800 text-center flex">
        <h1 className="text-white font-sans text-center m-8 text-4xl">
          Merry Christmas 2023 🎄 Best Christmas Songs Of All Time 🎅🏼 Nonstop Christmas Songs Medley 2023 V23
        </h1>
      </div>

      <footer className="text-center font-sans font-bold p-9">
        <p>
          Copyright &copy; TeamLitho &mdash; . All Right Reserved
        </p>
      </footer>
    </div>
  )
}

export default Home