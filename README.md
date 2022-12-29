# ReqresLisUsersPage2
Pagina para poder solicitar datos de la pagina 
"https://reqres.in/" 
utilizando la petición 
GET:"https://reqres.in/api/users?page=2"
-------------------------------------------------------------------------------
Página principal tenemos las siguientes opciones

Repositorio: ir al repositorio del proyecto en Github

Consulta transparente: realiza una consulta y muestra el resultado en pantalla
tal y como se reciben los datos, en formato JSON

Consulta consola: realiza la consulta y muestra el resultado en consola.

Consulta visual: Realiza la consulata pero e resultado lo coloca en un formato
mas agradable y visual.

REST-API: lleva a la pagina https://reqres.in/, donde puedes ver mas consultas

-------------------------------------------------------------------------------
la consulta tiene el siguiente aspecto:

{"page":2,"per_page":6,"total":12,"total_pages":2,"data":[{"id":7,"email":"michael.lawson@reqres.in","first_name":"Michael","last_name":"Lawson","avatar":"https://reqres.in/img/faces/7-image.jpg"},{"id":8,"email":"lindsay.ferguson@reqres.in","first_name":"Lindsay","last_name":"Ferguson","avatar":"https://reqres.in/img/faces/8-image.jpg"},{"id":9,"email":"tobias.funke@reqres.in","first_name":"Tobias","last_name":"Funke","avatar":"https://reqres.in/img/faces/9-image.jpg"},{"id":10,"email":"byron.fields@reqres.in","first_name":"Byron","last_name":"Fields","avatar":"https://reqres.in/img/faces/10-image.jpg"},{"id":11,"email":"george.edwards@reqres.in","first_name":"George","last_name":"Edwards","avatar":"https://reqres.in/img/faces/11-image.jpg"},{"id":12,"email":"rachel.howell@reqres.in","first_name":"Rachel","last_name":"Howell","avatar":"https://reqres.in/img/faces/12-image.jpg"}],"support":{"url":"https://reqres.in/#support-heading","text":"To keep ReqRes free, contributions towards server costs are appreciated!"}}

acomodado un poco mejor

{
    "page":2,
    "per_page":6,
    "total":12,
    "total_pages":2,
    
    "data":[
        {
            "id":7,
            "email":"michael.lawson@reqres.in",
            "first_name":"Michael",
            "last_name":"Lawson",
            "avatar":"https://reqres.in/img/faces/7-image.jpg"
        },
        {
            "id":8,
            "email":"lindsay.ferguson@reqres.in",
            "first_name":"Lindsay",
            "last_name":"Ferguson",
            "avatar":"https://reqres.in/img/faces/8-image.jpg"
        },
        {
            "id":9,"email":"tobias.funke@reqres.in",
            "first_name":"Tobias",
            "last_name":"Funke",
            "avatar":"https://reqres.in/img/faces/9-image.jpg"
        },
        {
            "id":10,"email":"byron.fields@reqres.in",
            "first_name":"Byron","last_name":"Fields",
            "avatar":"https://reqres.in/img/faces/10-image.jpg"
        },
        {
            "id":11,
            "email":"george.edwards@reqres.in",
            "first_name":"George",
            "last_name":"Edwards",
            "avatar":"https://reqres.in/img/faces/11-image.jpg"
        },
        {
            "id":12,
            "email":"rachel.howell@reqres.in",
            "first_name":"Rachel",
            "last_name":"Howell",
            "avatar":"https://reqres.in/img/faces/12-image.jpg"
        }
    ],
    
    "support":{
        "url":"https://reqres.in/#support-heading",
        "text":"To keep ReqRes free, contributions towards server costs are appreciated!"
    }
}