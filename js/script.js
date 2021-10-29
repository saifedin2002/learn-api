
//old Api
// fetch("https://www.breakingbadapi.com/api/").then((response)=>{
//     return response.json();
                   
// }).then((data)=>{
//     console.log(data)
// })


async function getInfo(){
    const response = await fetch("https://www.breakingbadapi.com/api/characters/")
    const data =await response.json()
    console.log(data[0].name)

    document.querySelector("#content h1").innerHTML = data[1].name
   
        


       
        data.map(actor=>{
            console.log(actor.name)
             document.querySelector("#actor").innerHTML = `<select > <option> ${actor.name} </option>  </select>`
        })
       
       
       
  
    document.querySelector("#content h5").innerHTML = data[1].birthday
    document.querySelector("#content img").src = data[1].img
}


getInfo()