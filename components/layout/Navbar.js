import Link from 'next/link'
import { useTheme } from 'next-themes'
import { FaMoon, FaSun } from "react-icons/fa";

export const Navbar = () => {
    const { theme, setTheme } = useTheme();
    return (
        <header className="mb-3 flex items-center w-full fixed py-6 bg-light dark:bg-dark">
            <nav className="container mx-auto px-4">
                <ul className="flex flex-row items-center justify-between space-x-4 text-dark dark:text-light ">
                    <li>
                        <Link href="/">
                            <a className="text-4xl font-bold">R.</a>
                        </Link>
                    </li>
                    <div className="flex  space-x-6">
                        <li>
                            <Link href="/bio">
                                <a>Bio</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/portfolio">
                                <a>Portfolio</a>
                            </Link>
                        </li>

                        <li>
                            <button
                                aria-label="Toggle Dark Mode"
                                type="button"
                                className="pt-1 hover:text-accent"
                                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                            >
                                {theme === 'dark' ? <FaSun /> : <FaMoon />}
                            </button>
                        </li>
                    </div>
                </ul>
            </nav>
        </header>
    )
}