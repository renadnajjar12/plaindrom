let text=document.querySelector("input");
let check=document.querySelector(".check");
let main=document.querySelector(".main");
const result=document.querySelector(".result");

// console.log(text.value.split(''));

// let rev=function(){
//     let arr1=text.value.toUpperCase().split('');
//     let arr2=text.value.toUpperCase().split('').reverse();
//         // if(arr1.toString()==arr2.toString()){
//             console.log(arr1.toString()==arr2.toString());
//             // par.innerHTML(`${text.value} is plaivform`)
//             // let t=document.createTextNode(`${word.toString()} is plainform`);
//             // t=word+"is plainform";
//             // par.appendChild(t);
//             // t=text.value+"is plainform";
// //         console.log("rrr")
// // //         let p=document.createElement("p");
// //                 // main.appendChild(p);
// // // // text.innerHTML(`${text.value.style.textTransform="upperCase"} is plindrome`)
    
//     // else{
//         console.log("false");
//         // par.innerHTML(`${word} is NOT plaivform`)
// //         console.log("123")
//         //    let p=document.createElement("p");
//         // let t=document.createTextNode(`${word} is not plindrome`);
//         // par.appendChild(t);
// // //         main.appendChild(p);
//     };

check.addEventListener("click",()=>{
    let arr1=text.value.toUpperCase().split('');
    let arr2=text.value.toUpperCase().split('').reverse();
    if(arr1.toString()==arr2.toString()){
        result.innerHTML=`${text.value .toUpperCase()} is platform`;}
        else{
            result.innerHTML=`${text.value .toUpperCase()} is NOT platform`;
        }
});
    // let arr1=text.value.toUpperCase().split('');
    // let arr2=text.value.toUpperCase().split('').reverse();
    // console.log(arr1.toString()==arr2.toString());
    // console.log(text.value.toUpperCase().split(''));
    // console.log(text.value.toUpperCase().split('').reverse());
