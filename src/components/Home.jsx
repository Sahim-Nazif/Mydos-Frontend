import Header from './Header'
import DosForms from './DosForms'
import MyDos from './MyDos'
import Card from './shared/Card'


const Home = () => {

 
  return (

    <>
   
      <div className='container'>
      <Header />
      
      <MyDos/>
      <DosForms/>
       
      </div>
   
    </>

  )
}

export default Home