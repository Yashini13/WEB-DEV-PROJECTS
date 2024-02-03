// let btn = document.getElementById("btn");
// btn.addEventListener('click',laodAbout);

// function laodAbout(){
//     var request = new XMLHttpRequest();
//     request.open("GET","about.html");
//     request.onreadystatechange = function(){
//         if(this.readyState == 4 && this.status == 200)
//           {
//             console.log(this.responseText);
//             document.getElementById("container").innerHTML= this.response;
//           }
//     }  
//     request.send();
// }

// function getdata(){
//   url="about.html";
//   fetch(url).then(response => {
//     return response.text();
//   }).then(data=>{
//     console.log(data);
//   }).catch(error => {
//     console.log(error);
//   })
// }

//----> ASYNC FUNCTIONS
async function fun()
{
  console.log("HI ALL");
  return Promise.resolve(1);

}

fun().then(function (res){
  console.log(res);
});