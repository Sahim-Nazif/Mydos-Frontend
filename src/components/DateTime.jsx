import React from 'react'
import moment from 'moment'


const DateTime = () => {

  return (
    <div className='dateTime'>
    
       <h3>{moment().format('dddd, MMMM Do YYYY')}</h3> 
       <h4>{moment().format('LTS')}</h4>
    </div>
  )
}

export default DateTime