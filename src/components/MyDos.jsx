import React, {useEffect, useState} from 'react'
import Card from './shared/Card'
import { getMyDos } from './core/apiCore'
import { faTentArrowDownToLine } from '@fortawesome/free-solid-svg-icons'

const MyDos = () => {
    
  const [mydos, setMyDos]=useState([])
  const [error, setError]=useState(false)

  const init=()=>{
        getMyDos().then(data=>{
      if (data.error) {
        setError(data.error)
      }
      else {
        setMyDos(data)
       
      }
    })
  }
  useEffect(()=>{
    init()
  },[])
  return (
     <>
       {mydos.map((todo, index)=>(<Card key={index} todo={todo}/>))}
     </> 
  )
}

export default MyDos