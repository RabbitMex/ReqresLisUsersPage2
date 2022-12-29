console.log('Inicio de consulta')
var xhr = new XMLHttpRequest();
xhr.open("GET", "https://reqres.in/api/users?page=2", true);
xhr.onload = function(){
    console.log(xhr.responseText);
};
xhr.send();