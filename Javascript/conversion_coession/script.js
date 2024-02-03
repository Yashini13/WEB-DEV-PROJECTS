// console.log("Conversion and coession");
 

// let v
// v=String (new Date());
// console.log(v,(typeof v));

// let x=parseFloat(5345.56565)
// console.log(x.toFixed(3),(typeof x));

// // string
// let a='mac';
// let b='andriod';

// let html2=`<h1> Hi I use ${a} and my friend uses ${b} </h1> 
// <h3> I will be a successfull Full Stack Web Developer </h3>`;
// console.log(html2);

// document.body.innerHTML=html2;
// // objects and arrays

// let c=[12,45,56,77];
// let arr=['Jack','Jones','Harry','Olivia'];
// arr.pop();
// console.log(arr);
// arr.unshift('Lianna');  //used to add at beginning replacing the first one
// console.log(arr);
// //loops
// //in
// for (var i in c){
//       console.log(1+ " "+ c[i]);
// }
// //for each
// let sum=0;
// c.forEach(element =>{
//     sum=sum+element;
//     console.log(sum);
// });

// //while
// let d=1 , n=10;
// while(x<=n)
// {
//     console.log(d);
//     d++
//     console.log(x);
// }
// //do while

// do
// {
//     console.log(d);
//     d++
//     console.log(x);
// }while(x<=n);

// // let g = document;
// // //g =  window.alert("check again");
// // g=window.prompt("will you ?")
// console.log("Conversion and Coercion")
// let a =document
// a= document.forms;
// console.log(a);
// // dom manipulation and html selectors

// let x= document.getElementById("doms");
// x.innerText="<b>Heading</b>";  //will show as it is 
// x.innerHTML="<b>Heading</b>";  //will avoid the <b></b>
// x=x.childNodes;
// console.log(x);

//QUERY SECLETORS-------)))
//*Here the query selector method only returns the first element that matches the specified requirement
// let x= document.querySelector('#doms');
// x.style.color="red";
// //2.Multi element selector
// // here the multi element selectors will use the the class name 
// let b =document.querySelectorAll("doms");
// console.log("doms");
// //gETELEMENET BY TAG NAME
// let ar=document.getElementsByTagName("article");
// console.log(ar);
// for(let i=0;i<ar.length;i++)
// {
//     const element= array[i];
//     ar[i].style.border="2px solid red";
//}
//EVENT LISTERNER

document.getElementById("myUl").addEventListener("click", function(e){
    let variable;
    variable = e.target;
    variable = e.target.className;
    variable = e.target.id;
    variable = e.target.classList;
    variable = e.offsetX;
    variable = e.offsetY;
    variable = e.clientX;
    variable = e.clientY;
    console.log(variable);
    // console.log("You have clicked h1 tag!");
})
