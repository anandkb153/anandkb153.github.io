let otpbtn=document.querySelector('#otp')

let smtbtn=document.querySelector('#smt_btm')

let OTP_Num;
otpbtn.addEventListener('click',gen_OTP)

function gen_OTP(){
  
    
    OTP_Num =OTP_Digits()
    alert(OTP_Num)
}
smtbtn.addEventListener('click', validateotp)
function validateotp(){
    let input=document.querySelector('#input').value

    if(input==="")
    {
        Swal.fire({
            title: 'Kindly Insert OTP',
            text: '',
            icon: 'error',
            confirmButtonText: 'ok'
          })
    }
   else if(input!=OTP_Num)
    Swal.fire({
        title: 'Invalid OTP!',
        text: 'Oops Try again',
        icon: 'error',
        confirmButtonText: 'ok'
      })
    else
    Swal.fire({
        title: 'Valid OTP!',
        text: 'Good',
        icon: 'success',
        confirmButtonText: 'ok'
      })
}


function OTP_Digits(){
    let code=""

    for(let i=1;i<7;i++)
    {
        code+= Math.floor(Math.random()*7)
    }

    return code
}
