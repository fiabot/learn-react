// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Profile from './components/profile'
import RecipeList from './qcomps/recipes'
import MenuBar from './qcomps/menuBar'
export default function Home() {
  return (
    <div className={styles.main}>
        <MenuBar/>
    </div>
  )
}
