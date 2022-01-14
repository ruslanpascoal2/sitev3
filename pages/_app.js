import '../styles/globals.css'
import { Navbar } from '../components/layout/Navbar'
import { ThemeProvider } from 'next-themes'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
     <Navbar></Navbar>
      <main className="container px-10 pb-20 mx-auto pt-32 bg-light dark:bg-dark">
        <Component {...pageProps} />
      </main>
    </ThemeProvider>

  )
}

export default MyApp
