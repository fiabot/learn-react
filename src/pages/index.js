// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Button from './components/button'
import Profile from './components/profile'
import BucketList from './qcomps/arrObj'

export default function Home() {
  return (
    <div className={styles.main}>
        <BucketList />
    </div>
  )

}
