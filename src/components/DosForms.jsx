import React, {useState} from 'react'
import Card from './shared/Card'
import Calendar from 'react-calendar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarPlus } from '@fortawesome/free-solid-svg-icons';


const DosForms = () => {

   const [date, setDate]=useState(new Date())
   const [showCal, setShowCal]=useState(false)


   const displayCalendar=()=>{
      return ( 

         setShowCal(true)
       
         
      )
      }
   const displayCalBtn=()=>{

      return (
         <div>
           <button className='calendarBtn' onClick={()=>displayCalendar()}  >
          Calendar <FontAwesomeIcon icon={faCalendarPlus}
       
           style={{ cursor: 'pointer', color: '#ffffff' }} /> </button>
         </div>
      )
   }
   const submitBtn=()=>{
      return( 
         <div>
         <button className='calendarBtn'  
         
         style={{ cursor: 'pointer', color: '#ffffff' }} >Submit </button>
       </div>
      )
    
   }       

   return (

         <>
         <div className='form-input'>
            
            <input placeholder='Your Dos' />
          
            {displayCalBtn()}
            {showCal && <Calendar onChange={setDate} value={date} />}
       
         </div>
         <div className='submitBtn'>
         {submitBtn()}
         </div>
   
        </>
   )

 
}

export default DosForms