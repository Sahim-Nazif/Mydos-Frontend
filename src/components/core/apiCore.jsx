export const addMyDos=mydos=>{

    return fetch(`${process.env.REACT_APP_API_URL}`, {
        method: 'POST',
        headers:{
            Accept:'application/json',
            'Content-Type': 'application/json',

        },
        body:JSON.stringify(mydos)
    })
     .then(response =>{
        return response.json()
     })
      .catch(err=>{
        console.log(err)
      })
}

export const getMyDos=()=>{

    return fetch(`${process.env.REACT_APP_API_URL/list}` ,{
        method:'GET'
    })
    .then(response=>{
        return response.json()
    })
    .catch(err=>console.log(err))
}