// let btn = document.getElementById("btn");
// btn.addEventListener('click',firstFunction);

// function firstFunction(e){
//     console.log("You clicked Submit button",a);
//     a.preventDefault();
// }

// btn.addEventListener('dblclick',seconffun);

// function seconffun(e){
//     console.log("This is a double click");
//     e.preventDefault();
// }

// localStorage.setItem(key,'value');
// localStorage.setItem(a,'Web development');

// let myItem = localStorage.getItem(a);
// console.log(myItem);

// localStorage.setItem(key,'New value');
//Math using js

const myInfo=
{
    isMale : true,
    Bio:function(){
        console.log('My name is ${this.name}.aM I MALE? ${this.isMale}');
    }
}

const mySelf = Object.create(myInfo);
mySelf.name='John';
mySelf.Bio();