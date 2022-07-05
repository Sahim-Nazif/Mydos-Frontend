import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faClose ,faPencil} from '@fortawesome/free-solid-svg-icons'


const Card = ({children, reverse}) => {

  return (
    <div className='card'>{children}
        <div className='card-line'></div>
        <div className='icons'>
        <FontAwesomeIcon icon={faClose} />
        <div className='icon-edit'>
        <FontAwesomeIcon icon={faPencil} />
        </div>
        
        </div>
      
    </div>
  )
}

Card.propTypes={

    children:PropTypes.node.isRequired,
    reverse:PropTypes.bool
    

}

export default Card