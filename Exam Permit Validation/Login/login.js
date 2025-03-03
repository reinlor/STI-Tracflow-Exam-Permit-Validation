const sid = document.getElementById("studentNumberTxt");
const pass = document.getElementById("passwordTxt");
const logBtn = document.getElementById("loginBtn");
let stuid, passId;

logBtn.onclick = function(){
    stuid = sid.value;
    passId = pass.value;
}        

//connect sa database smth