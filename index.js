   
let form=document.querySelector("form");
let erroru=document.getElementById("erroru");
let error=document.getElementById("error");
let errorn=document.getElementById("errorn");
let errorp=document.getElementById("errorp");
let errorc=document.getElementById("errorc");
let passwordStrength=document.getElementById("password-strength");
function formvalidate(){
    let email=document.getElementById("email").value.trim(); 
    let password=document.getElementById("password").value.trim();
    if(email.trim()===""){
        document.querySelector("#email-field").classList="fail";
        error.innerHTML="*please fill the field";
        error.style.color="red";
      }
      if(password.trim()===""){
        document.querySelector("#password-field").classList="fail";
        errorp.innerHTML="*please fill the field";
        errorp.style.color="red";
      }      
}
document.querySelector("button")
.addEventListener("click",(event)=>{
    event.preventDefault();
    formvalidate();
});


    
   
function validate(){
    let user=document.getElementById("user_name").value.trim();
    let email=document.getElementById("email").value.trim(); 
    let number=document.getElementById("number").value.trim();
    let password=document.getElementById("password").value.trim();
    let confirmp=document.getElementById("confirm").value.trim(); 

    if(user.trim()===""){
       document.querySelector("#user-field").classList="fail";
       erroru.innerHTML="*please fill the field";
       erroru.style.color="red";
     }
     
     if(email.trim()===""){
        document.querySelector("#email-field").classList="fail";
        error.innerHTML="*please fill the field";
        error.style.color="red";
      }
      
     
     if(number.trim()===""){
        document.querySelector("#number-field").classList="fail";
        errorn.innerHTML="*please fill the field";
        errorn.style.color="red";
      }
     
     if(password.trim()===""){
        document.querySelector("#password-field").classList="fail";
        errorp.innerHTML="*please fill the field";
        errorp.style.color="red";
      }
      
     if(confirmp.trim()===""){
        document.querySelector("#confirm-field").classList="fail";
        errorc.innerHTML="*please fill the field";
        errorc.style.color="red";
      }
     
}
document.querySelector("button")
.addEventListener("click",(event)=>{
    event.preventDefault();
    validate();
});


function username(){
    let user=document.getElementById("user_name").value.trim();
    let b=/^([a-zA-Z ]){3,30}$/;
    if(user.length==0)
    {
        erroru.innerHTML="*please fill the field ";  
        erroru.style.color="red";
    }
    else if(!b.test(user)){
        erroru.innerHTML="*invalid";
        erroru.style.color="red";
    }
    else{
        erroru.innerHTML="";  
    }
    if(b.test(user)){
        document.querySelector("#user-field").classList="success";
    }
    else{
        document.querySelector("#user-field").classList="fail";
    }
}
function emailval(){
    let email=document.getElementById("email").value.trim();
    let b=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(email.length==0)
    {
        error.innerHTML="*please fill the field ";  
        error.style.color="red";
    }
    else if(!b.test(email)){
        error.innerHTML="*invalid";
        error.style.color="red";
    }
    else{
        error.innerHTML="";  
    }
    if(b.test(email)){
        document.querySelector("#email-field").classList="success";
    }
    else{
        document.querySelector("#email-field").classList="fail";
    }
}
function numberval(){
    let number=document.getElementById("number").value.trim();
    let b=/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if(number.length==0)
    {
        errorn.innerHTML="*please fill the field ";  
        errorn.style.color="red";
    }
    else if(!b.test(number)){
        errorn.innerHTML="*invalid";
        errorn.style.color="red";
    }
    else{
        errorn.innerHTML="";  
    }
    if(b.test(number)){
        document.querySelector("#number-field").classList="success";
    }
    else{
        document.querySelector("#number-field").classList="fail";
    }
}
function passwordval(){
    let password=document.getElementById("password").value.trim();
    if(password.length==0)
    {
        errorp.innerHTML="*please fill the field ";  
        errorp.style.color="red";
    }
    
    
    else{
        errorp.innerHTML="";
      
        
    }
    strength=0;
    if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)){
        strength+=1;
    }
    if(password.match(/([0-9])/)){
        strength += 1;
    }
    
    
    if (password.length > 8) {
        strength += 1; 
    }
    if (strength == 1) {
        document.querySelector("#password-field").classList="fail"; 
        document.querySelector("#password-strength").classList="progress-bar-danger"; 
        passwordStrength.style = 'width: 10%';
    }
    else if (strength == 2) {
        document.querySelector("#password-field").classList="middle"; 
        document.querySelector("#password-strength").classList="progress-bar-warning";
        passwordStrength.style = 'width: 60%';
 
    }
    else if (strength == 3){
        document.querySelector("#password-field").classList="success";
        document.querySelector("#password-strength").classList="progress-bar-success";
        passwordStrength.style = 'width: 100%';
    }
    
    
}
function confirmval(){
    let password=document.getElementById("password").value.trim();
    let confirmp=document.getElementById("confirm").value.trim();
    var b=/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    if(confirmp.length==0)
    {
        errorc.innerHTML="*please fill the field ";  
        errorc.style.color="red";
    }
    else if(!b.test(confirmp)){
        errorc.innerHTML="*password does not match";
        errorc.style.color="red";
    }
    else{
        errorc.innerHTML="";  
    }
    if(b.test(confirmp) && password==confirmp){
        document.querySelector("#confirm-field").classList="success";
    }
    else{
        document.querySelector("#confirm-field").classList="fail";
    }
}