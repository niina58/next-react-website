import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
const subtitle = 'アウトプットしていくサイト'

  return (
    <>
      <header>HEADER</header>
      
      <main>
        <div className="hero">
          <h1 style={{ color: 'red', fontSize: '80px' }}>
            CUBE
          </h1>
          <hr />
          <p>アウトプットしていくサイト</p>
        </div>
      </main>

      <footer>FOOTER</footer>
    </>
  )
}
