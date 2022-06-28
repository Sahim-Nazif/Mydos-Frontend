import React from 'react'
import DateTime from './DateTime'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Header = () => {
  return (
    <div className='header'>
        <h1>My Dos</h1>
        <DateTime/>
        
 
 
<FontAwesomeIcon icon="fa-solid fa-comment-pen" />
    </div>
  )
}

export default Header