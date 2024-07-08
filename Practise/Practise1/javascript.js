// function createData(){
//     const title=document.getElementById("title").value
//     const body=document.getElementById("body").value
//     const userid=document.getElementById("userid").value
//     try{
//         let url = "https://jsonplaceholder.typicode.com/todos"
//         const optionts = {
//             method:"POST",
//             headers:{
//                 Accept:"application/json",
//                 "Content-Type":"appliction/json"
//             },
//             body:JSON.string({
//                 title: title,
//                 body: body,
//                 userid: userid
//             })
//         };
//         fetch(url,options)
//         .then((response)=>response.JSON())
//         .then((data)=>{
//             console.log(data)
//         })
//     } catch(error){
        
//     }
// }

//const axios = require("axios");
// function createData(){
//     let url="https://jsonplaceholder.typicode.com/todos"
//     const data={
//         title:"Title",
//         body:"Body",
//         userid:"userid"
//     };

//     axios.post(url, data,{
//         header: {
//             Accept: "application/json",
//             'Content-Type':'appliction/json'
//         }
//     })

//     .then(({data})=>{
//         console.log(data);
//     })
//     .catch(err =>{
//         console.log(err);
//     })
// }

//Getting data from APIs using Fetch method

function getData(){
    let url="https://jsonplaceholder.typicode.com/todos";
    fetch(url)
      .then((response)=>response.json()
         .then(data => {
            console.log(data)
         }))
}
getData()