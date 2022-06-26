import React from 'react'
import moment from 'moment'


const DateTime = () => {

  return (
    <div className='dateTime'>
    
       <h5>{moment().format('dddd, MMMM Do YYYY')}</h5> 
       <h5>{moment().format('LTS')}</h5>
    </div>
  )
}

export default DateTime