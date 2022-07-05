import React, {useState} from 'react'
import DatePicker from "react-datepicker";

const DosForms = () => {

   const [startDate, setStartDate] = useState(new Date());

   const submitBtn=()=>{

      return (
         <div>
           <button className='calendarBtn'  >Submit</button>

         </div>
      )
   }
    
   return (

         <>
         <div className='form-input'>
            
            <input placeholder='Your Dos' />
          
            {submitBtn()}
            {<DatePicker selected={startDate} onChange={(date) => setStartDate(date)} 
             />}
       
         </div>
      
        </>
   )

 
}

export default DosForms