import '../styles/globals.css'
import { Navbar } from '../components/layout/Navbar'
import { ThemeProvider } from 'next-themes'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Navbar></Navbar>
      <main className="container mx-auto px-4 pt-32 bg-light dark:bg-dark">
        <Component {...pageProps} />
      </main>
    </ThemeProvider>

  )
}

export default MyApp
