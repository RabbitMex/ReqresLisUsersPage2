console.log('Inicio de consulta')
var xhr = new XMLHttpRequest();
xhr.open("GET", "https://reqres.in/api/users?page=2", true);
xhr.onload = function(){
    console.log('El tipo de xhr es:', typeof(xhr))
    const textoXhr = xhr.responseText
    console.log('el tipo de textoXhr es:', typeof(textoXhr))
    console.log('-------------------------------------------------')
    console.log(textoXhr);
    console.log('-------------------------------------------------')
    console.log(xhr.responseText);
    console.log('-------------------------------------------------')
    console.log('Convertir de string a objeto')
    const miObjeto = JSON.parse(textoXhr)
    console.log('typeof miObjeto:', typeof(miObjeto))
    console.log(miObjeto)
    console.log('-------------------------------------------------')
    console.log('Desplegar el primer usuario data[0]')
    console.log('id:', miObjeto.data[0].id)
    console.log('Nombre:', miObjeto.data[0].first_name)
    console.log('Apellido:', miObjeto.data[0].last_name)
    console.log('email:', miObjeto.data[0].email)
    console.log('avatar:', miObjeto.data[0].avatar)
    console.log('Desplegar el usuario data[1]')
    console.log(
        `
        id: ${miObjeto.data[1].id}
        Nombre: ${miObjeto.data[1].first_name}
        Apellido: ${miObjeto.data[1].last_name}
        email: ${miObjeto.data[1].email}
        avatar:${miObjeto.data[1].avatar}
        `)
};
xhr.send();