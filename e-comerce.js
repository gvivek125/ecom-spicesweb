
const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const productquanitity = document.getElementById("productquanitity");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  CheckInput();
});

function CheckInput() {
  const usernameValue = username.value.trim();
  const emailvalue = email.value.trim();
  const passwordValue = password.value.trim();
 

  if (usernameValue === "") {
    setError(username, "User name Canot Be Blank");
  } else {
    setSuccess(username);
  }

  if (emailvalue === "") {
    setError(email, "User Email Canot Be Blank");
  } else if (!isEmail(emailvalue)) {
    setError(email, "not a valid email");
  } else {
    setSuccess(email);
  }

  if (passwordValue === "") {
    setError(password, "User Product Canot Be Blank");
  } else {
    setSuccess(password);
  }
  








  function setError(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");
    formControl.className = "form-control error";
    small.innerText = message;
  }

  function setSuccess(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");
    formControl.className = "form-control success";
    small.innerText = message;
  }

  function isEmail(email) {
    return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);
  }
}
 


// ----------------------customer reviews testimonials--------------------------------------// 
 var btn =document.getElementsByClassName('btn');
 var slide=document.getElementById('slide');

 btn[0].onclick= function(){
  slide.style.transform="translateX(0px)"
  for (i=0;i<4;i++){
    btn[i].classList.remove("active");
  }
  this.classList.add("active");
 }

 btn[1].onclick= function(){
  slide.style.transform="translateX(-800px)"
  for (i=0;i<4;i++){
    btn[i].classList.remove("active");
  }
  this.classList.add("active");
 }

 btn[2].onclick= function(){
  slide.style.transform="translateX(-1600px)"
  for (i=0;i<4;i++){
    btn[i].classList.remove("active");
  }
  this.classList.add("active");
 }

 btn[3].onclick= function(){
  slide.style.transform="translateX(-2400px)"
  for (i=0;i<4;i++){
    btn[i].classList.remove("active");
  }
  this.classList.add("active");
 }