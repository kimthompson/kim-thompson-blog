import { Theme, useTheme } from '../utils/themeProvider'
import { FiSun, FiMoon } from 'react-icons/fi'
import { useEffect, useState } from 'react'

export default function Header() {
  const [theme, setTheme] = useTheme()
  const [randomPhrase, setRandomPhrase] = useState('')

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT
    )
  }

  const pickRandomPhrase = () => {
    let lol = [
      'Anti-crypto enthusiast.',
      'Cripplingly addicted to FFXIV.',
      'No double quotes, no semicolons.',
      'Cat mom.',
      'Aider and abettor.',
      'Dependent on caffeine.',
    ]

    setRandomPhrase(lol[Math.floor(Math.random() * lol.length)])
  }

  useEffect(() => {
    pickRandomPhrase()
  }, [])

  return (
    <header className="flex flex-col md:flex-row items-center justify-between py-12 mx-6 sm:mx-24 lg:mx-36 xl:mx-48 2xl:mx-96">
      <a className="md:hidden" href="/">
        <img
          className="w-24 lg:w-32 hover:animate-wiggle self-end"
          src="/assets/grump_full_transparent.png"
        />
      </a>

      <div className="flex-auto max-w-sm md:max-w-md lg:max-w-2xl">
        <h1 className="font-heading font-extrabold tracking-tight text-6xl md:text-7xl lg:text-8xl italic text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-teal-500 mb-3">
          Kim Thompson
        </h1>
        <p className="text-gray-900 dark:text-slate-100">
          Web (
          <a
            className="text-indigo-500 hover:text-gray-900 dark:hover:text-slate-100"
            href="/assets/resume.pdf"
          >
            + more
          </a>
          ) developer. {randomPhrase}
        </p>
      </div>

      <a className="hidden md:block" href="/">
        <img
          className="w-24 lg:w-32 hover:animate-wiggle self-end"
          src="/assets/grump_full_transparent.png"
        />
      </a>

      <button className="absolute top-8 right-5" onClick={toggleTheme}>
        {theme === Theme.DARK ? (
          <FiSun className="h-9 w-9 p-2 mx-3 rounded-md text-slate-100 dark:text-gray-900 transition ease-in-out bg-gray-900 dark:bg-slate-100 hover:-translate-y-1 hover:scale-110 duration-300" />
        ) : (
          <FiMoon className="h-9 w-9 p-2 mx-3 rounded-md text-slate-100 dark:text-gray-900 transition ease-in-out bg-gray-900 dark:bg-slate-100 hover:-translate-y-1 hover:scale-110 duration-300" />
        )}
      </button>
    </header>
  )
}
