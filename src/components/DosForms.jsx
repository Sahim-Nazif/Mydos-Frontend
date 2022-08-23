import React, {useState ,useEffect} from 'react'
import DatePicker from "react-datepicker";
import { addMyDos } from './core/apiCore';
import axios from 'axios'

const DosForms = () => {

   const [startDate, setStartDate] = useState(new Date());
   const [values, setValues]= useState ({

      todo:'',
      error:'',
      formData:''
   })
   const {
      todo,
      error,
      formData

   }=values

   const init= ()=>{
      setValues({...values, formData: new FormData()})

   }

    useEffect(()=>{
      init()
   },[])

   const handleChange=name=>event=>{
      const value=event.target.value 
      formData.set(name, value )
      setValues({...values, error:false, [name]:event.target.value})
      console.log(event.target.value)
      
   }

   const clickSubmit = event => {

      event.preventDefault()

      setValues({ ...values, error: ''})

      addMyDos( formData)
          .then(data => {

              if (data.error) {

                  setValues({ ...values, error: data.error })
              } else {

                  setValues({

                      ...values,
                      todo: ''
                                        
                  })
        
              }
          })

    

  }
     
   return (

         <>
         <form onSubmit={clickSubmit}>
         <div className='form-input'>
            
            <input onChange={handleChange('todo')} placeholder='Your Dos'  type='text' value={todo}  />
          
            <div>
           <button className='calendarBtn'  >Submit</button>

         </div>
            {<DatePicker selected={startDate} onChange={(date) => setStartDate(date)} 
           
             />}
        {console.log(startDate)}
         </div>
         </form>
        </>
   )

}


export default DosForms