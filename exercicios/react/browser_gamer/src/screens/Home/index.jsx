import React from 'react'
import '../Home/styles.css'
import Header from '../../components/header'
import { Outlet } from 'react-router-dom'


const Home = () => {
  return (
    <main className='homeContainer'>
        <Header/>
        <section>
            <Outlet />
        </section>
    </main>
  )
}

export default Home