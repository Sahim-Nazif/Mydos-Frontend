import React from 'react'
import Header from './Header'
import DosForms from './DosForms'
import MyDos from './MyDos'


const Home = () => {
  return (

    <>

      <Header />
      <div className='container'>
      <DosForms/>
      
       <MyDos />
     
     
      </div>
    </>

  )
}

export default Home