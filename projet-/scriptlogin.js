
const time_to_show_login = 400;
const time_to_hidden_login = 200;

function change_to_login() {
document.querySelector('.cont_forms').className = "cont_forms cont_forms_active_login";  
document.querySelector('.cont_form_login').style.display = "block";
document.querySelector('.cont_form_sign_up').style.opacity = "0";               

setTimeout(function(){  document.querySelector('.cont_form_login').style.opacity = "1"; },time_to_show_login);  
  
setTimeout(function(){    
document.querySelector('.cont_form_sign_up').style.display = "none";
},time_to_hidden_login);  
  }

  const time_to_show_sign_up = 100;
  const time_to_hidden_sign_up = 400;

function change_to_sign_up(at) {
  document.querySelector('.cont_forms').className = "cont_forms cont_forms_active_sign_up";
  document.querySelector('.cont_form_sign_up').style.display = "block";
document.querySelector('.cont_form_login').style.opacity = "0";
  
setTimeout(function(){  document.querySelector('.cont_form_sign_up').style.opacity = "1";
},time_to_show_sign_up);  

setTimeout(function(){   document.querySelector('.cont_form_login').style.display = "none";
},time_to_hidden_sign_up);  


}    

const time_to_hidden_all = 500;

function hidden_login_and_sign_up() {

document.querySelector('.cont_forms').className = "cont_forms";  
document.querySelector('.cont_form_sign_up').style.opacity = "0";               
document.querySelector('.cont_form_login').style.opacity = "0"; 

setTimeout(function(){
document.querySelector('.cont_form_sign_up').style.display = "none";
document.querySelector('.cont_form_login').style.display = "none";
},time_to_hidden_all);  
  
  }
 
let users = [
    { email: "exemple@example.com", user: "utilisateur1", password: "123" }
];

function userExists(email, password) {
    return users.some(user => user.email === email && user.password === password);
}


function login() {
    let email = document.querySelector('input[type="email"][placeholder="Email"]').value;
    let password = document.getElementById('p1').value;
    
    if (userExists(email, password)) {
       
        window.location.href = "home.html";
    } else {
       
        alert("Email ou mot de passe incorrect.");
    }
}


function signUp() {
    let email = document.querySelector('input[type="email"][placeholder="Email"]').value;
    let user = document.querySelector('input[type="text"][placeholder="User"]').value;
    let password = document.getElementById('p2').value;
    let confirmPassword = document.querySelector('input[type="password"][placeholder="Confirm Password"]').value;
    
    
    if (password !== confirmPassword) {
        alert("Les mots de passe ne correspondent pas.");
        return;
    }
    
 
    if (users.some(user => user.email === email)) {
        alert("Cet email est déjà utilisé.");
        return;
    }
    
   
    users.push({ email: email, user: user, password: password });
    
   
    alert("Inscription réussie ! Vous pouvez maintenant vous connecter.");
}
