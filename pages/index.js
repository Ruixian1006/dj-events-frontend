import Image from 'next/image'
import styles from '../styles/Layout.module.css'
import Link from 'next/link'
import Layout from '../components/Layout'
export default function HomePage() {
  return (
    <Layout>
      <h1>Home</h1>
      <Link href="/about">About</Link>
    </Layout>
  )
}
