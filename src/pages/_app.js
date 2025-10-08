import '../styles/globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function MyApp({ Component, pageProps }) {
  return (
    <div id="top" className="pb-24">
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}
