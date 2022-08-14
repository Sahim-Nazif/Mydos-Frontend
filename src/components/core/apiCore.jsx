export const addMyDos = (myDos) => {

    return fetch(`${process.env.REACT_APP_API_URI}`, {

        method: 'POST',
        headers: {

            Accept: 'application/json'
            
        },

        body: myDos
    }).
        then(response => {

            return response.json()
        }).catch(err => {
            console.log(err)
        })



}


export const getMyDos=()=>{

    return fetch(`${process.env.REACT_APP_API_URI}/list` ,{
        method:'GET'
    })
    .then(response=>{
        return response.json()
    })
    .catch(err=>console.log(err))
}