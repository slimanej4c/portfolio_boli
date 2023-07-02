import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import '../styles/Layout.css'
import '../styles/home/section1.css'
import '../styles/home/home.css'
import '../styles/competence/competence.css'
import '../styles/project/project.css'
 const App =({ Component, pageProps }: AppProps) =>{
  return (
    <>
    <Head>
       
    <title>PSE</title>
    <meta name='viewport' content='width=device-width, inital-scale=1' />
  </Head>

  <Component {...pageProps} />
  
  </>
  )
}
export default App