function contact() {
  let name = prompt("What is your name?");
  let email = prompt("What is your email?");
  alert("Thank you " + name + "! We'll be in touch by email!");
}
let button = document.querySelector("button");
button.addEventListener("click", contact);
