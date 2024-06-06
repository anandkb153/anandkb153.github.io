// console.log(Math.PI)
// console.log(Math.round(5.4))
// console.log(Math.floor(5.8))
// console.log(Math.sqrt(4))
// console.log(Math.pow(3,3))
// console.log(Math.floor(Math.random()*6))
let btn=document.querySelector('#btn')
let background=document.getElementById('container')
let hex=[0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f']

btn.addEventListener('click',gen_HexValue)

function gen_HexValue(){
   let hex_code="#"

   for(let i=1;i<=6;i++)
   {
//    hex_code+= random_hex_value()
    hex_code=hex_code+random_hex_value();
   
   }
   console.log(hex_code)
  background.style.backgroundColor=hex_code
  
}

function random_hex_value()
{
    let random_index=Math.floor(Math.random()*16)
    return hex[random_index]
}


