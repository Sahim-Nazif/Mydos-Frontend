import React, {useState ,useEffect} from 'react'
import DatePicker from "react-datepicker";
import { addMyDos } from './core/apiCore';
import axios from 'axios'

const DosForms = () => {

   const [startDate, setStartDate] = useState(new Date());
   const [values, setValues]= useState ({

      todo:'',
      error:''
   })
   const {
      todo,
      error
   }=values

   const init= ()=>{
      setValues({...values})

   }

    useEffect(()=>{
      init()
   },[])

   const handleChange=name=>event=>{
        
      setValues({...values, error:false, [name]:event.target.value})
      console.log(event.target.value)
      console.log(values)
   }

 
   const clickSubmit=event=>{

   //    event.preventDefault()
   //    setValues({...values, error:''})
   //    addMyDos().then(data=>{
   //       if (data.error) {
   //          setValues({...values, error:data.error})
   //       } else {
   //         setValues({...values, todo:''})
   //         console.log(data)
   //    }
   //  } )
   event.preventDefault();
   axios.post(`${process.env.REACT_APP_API_URI}`,
      {todo},{
         headers:{
            'Content-Type':'application/json'
         }
      }).then(response=>{
         setValues({...values, todo:''})
      }).catch(error=>{
         console.log(error.response)
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