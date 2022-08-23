import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faClose ,faPencil} from '@fortawesome/free-solid-svg-icons'
import moment from 'moment'
import {deleteMyDos} from '../core/apiCore'

const Card = ({children, reverse, todo}) => {


  
  const removeMydos=id=>{
    window.location.reload()
    deleteMyDos(id).then(data=>{
      if (data.error){
        console.log(data.error)
      } else {
        console.log('Mydo removed !')
      }
    })
  }
    
  return (
    
         
       <div className='card'>{children}
         
        <div className='card-line'> 
        <p className='todo'>
        {todo.todo}
        </p>
        <p className='date'>
          
        {moment(todo.createdAt).format('YYYY-MMMM-DD')}
        </p>
       </div> 
     
        <div className='icons'>
        <FontAwesomeIcon icon={faClose}  onClick={()=>removeMydos(todo._id)}/>
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