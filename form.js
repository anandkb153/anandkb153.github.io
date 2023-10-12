const form=document.querySelector("#form")
const username=document.querySelector("#username")
const email=document.querySelector("#email")
const password=document.querySelector("#password")
const cpassword=document.querySelector("#cpassword")


form.addEventListener('submit',(obj)=>{

    if(validateInputs()==false)
    {
        obj.preventDefault();
    }

})

function validateInputs()
{
    const usernameVal = username.value.trim()
    const emailVal = email.value.trim();
    const passwordVal = password.value.trim();
    const cpasswordVal = cpassword.value.trim();
    let success = true

    if(usernameVal==="")
    {
        success=false;
        setError(username,'Username is required')
    }else{ 
        setSuccess(username)
    }

    if(emailVal==="")
    {
        success=false;
        setError(email,'Email is required')
    }else if(validateEmail(emailVal)==null)
    {
        success=false;
        setError(email,'Invalid Email')
    }else{
        setSuccess(email)
    }
    if(passwordVal === ''){
        success= false;
        setError(password,'Password is required')
    }
    else if(passwordVal.length<8){
        success = false;
        setError(password,'Password must be atleast 8 characters long')
    }
    else{
        setSuccess(password)
    }

    if(cpasswordVal === ''){
        success = false;
        setError(cpassword,'Confirm password is required')
    }
    else if(cpasswordVal!==passwordVal){
        success = false;
        setError(cpassword,'Password does not match')
    }
    else{
        setSuccess(cpassword)
    }

    return success;

}

function setError(element,message){
    const parent_tag=element.parentElement;
    const errorElement =parent_tag.querySelector('.error')

    errorElement.innerHTML=message;
    parent_tag.classList.add("error")
    parent_tag.classList.remove("success")


}
function setSuccess(element){
    const inputgroup=element.parentElement;
    const errorElement =inputgroup.querySelector('.error')

    errorElement.innerHTML="";
    inputgroup.classList.add("success")
    inputgroup.classList.remove("error")
  
}

function validateEmail(validateEmail){
     
    return String(validateEmail)
    .toLocaleLowerCase()
    .match( /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);


}



