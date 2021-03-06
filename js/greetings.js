const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("#login-form input");
const greeting = document.querySelector('#greeting');

const hidden_classname="hidden";
const username_key = "username";

function onLoginSubmit(event){
  event.preventDefault();
  const username = loginInput.value;
  loginForm.classList.add(hidden_classname)
  localStorage.setItem(username_key, username);
paintGreetings(username);
}

function paintGreetings(username){
  greeting.innerText = `안녕하세요 ${username}님!`;
  greeting.classList.remove(hidden_classname);
}

const saveUsername = localStorage.getItem(username_key);

  if (saveUsername === null){
    loginForm.classList.remove(hidden_classname);
    loginForm.addEventListener("submit", onLoginSubmit);
  }else{
 paintGreetings(saveUsername);
  }