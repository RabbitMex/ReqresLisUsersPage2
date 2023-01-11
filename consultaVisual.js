{/*
    <tr>
        <td>parametro 1</td>
        <td>valor 1</td>
    </tr>
    <tr>
        <td>parametro 2</td>
        <td>valor 2</td>
    </tr>
    <tr>
        <td>parametro 3</td>
        <td>valor 3</td>
    </tr> 
 */}
//obtener referencia a la tabla
const bodyTabla1 = document.getElementById('tabla1').children[1]
//Aqui se recibe el objeto despues de la consulta JSON
let objetoConsulta

const seccionUsuarios = document.getElementById('usuarios')

/**
 * funcion para poder agregar en la tabla los datos de la consulta
 * 
 * @param {*} parametro parametro del valor
 * @param {*} valor valor del parametro
 */
const agregarParametrosTabla1 = (parametro, valor)=>{
    //crear el elemento tr
    let lineaTr = document.createElement('tr')
    let parametroTd = document.createElement('td')
    let varlorTd = document.createElement('td')

    parametroTd.textContent = parametro
    varlorTd.innerText = valor

    lineaTr.appendChild(parametroTd)
    lineaTr.appendChild(varlorTd)

    bodyTabla1.append(lineaTr)
}

/**
 * Agrega los parametros especificos en la tabla.
 */
const agregarPrimerosParam = () =>{
    agregarParametrosTabla1('page', objetoConsulta.page)
    agregarParametrosTabla1('per_page', objetoConsulta.per_page)
    agregarParametrosTabla1('total', objetoConsulta.total)
    agregarParametrosTabla1('total_pages', objetoConsulta.total_pages)
}

/**
 * Agrega los parametros de la ancla
 */
const agregarAncla = () => {
    const divAncla = document.getElementById('ancla')
    const ancla = divAncla.children[0]
    ancla.href = objetoConsulta.support.url
    ancla.innerText = objetoConsulta.support.text
}

/*

 */

/**
 * Agregar al documento el usuario recibido el cual tiene los siguientes
 * datos:
 * "id": 7,
 * "email": "michael.lawson@reqres.in",
 * "first_name": "Michael",
 * "last_name": "Lawson",
 * "avatar": "https://reqres.in/img/faces/7-image.jpg"
 * 
 * Se tiene que acomodar con el siguiente formato:
 * 
 * <div class="col">
        <div class="card">
            <img src="..." class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">ID</h5>
                <p class="card-text">FIRST_NAME LAST_NAME</p>
                <p class="card-text">EMAIL</p>
            </div>
        </div>
    </div>
 * 
 * @param {*} usuario objeto que contien los datos del usuario
 */
const desplegarUsuario = (usuario)=>{
    /* console.log(usuario.id)
    console.log(usuario.email)
    console.log(usuario.first_name)
    console.log(usuario.last_name)
    console.log(usuario.avatar)
 */

    let columna = document.createElement('div')
    columna.className = 'col col-8 col-sm-6 mb-3 mb-sm-0' 
    let tarjeta = document.createElement('div')
    tarjeta.className = 'card h-100'
    let imagen = document.createElement('img')
    imagen.src = usuario.avatar
    imagen.className = 'card-img-top img-fluid img-thumbnail rounded'
    imagen.alt = 'usuario imagen'
    let tarjetabody = document.createElement('div')
    tarjetabody.className = 'card-body'
    let tituloTarjeta = document.createElement('h5')
    tituloTarjeta.className = 'card-title'
    tituloTarjeta.innerText = usuario.id
    let parrafoNombreApellido = document.createElement('p')
    parrafoNombreApellido.className = 'card-text'
    parrafoNombreApellido.innerText = `${usuario.first_name} ${usuario.last_name}`
    let parrafoCorreo = document.createElement('p')
    parrafoCorreo.className = 'card-text'
    parrafoCorreo.innerText = usuario.email
    
    tarjetabody.appendChild(tituloTarjeta)
    tarjetabody.appendChild(parrafoNombreApellido)
    tarjetabody.appendChild(parrafoCorreo)

    tarjeta.appendChild(imagen)
    tarjeta.appendChild(tarjetabody)

    columna.appendChild(tarjeta)

    seccionUsuarios.append(columna)
}
/**
 * Desplegar los usuarios, cada usuario tiene os siguientes campos
 * id, email, first_name, last_name, avatar
 */
const desplegarDatos = () => {
    const data = objetoConsulta.data
    data.forEach(usuario => {
        desplegarUsuario(usuario)
    });
}
let consulta = new XMLHttpRequest()
consulta.open("get", "https://reqres.in/api/users?page=2", true)
consulta.onload = function(){
    console.log(consulta.responseText)
    objetoConsulta = JSON.parse(consulta.responseText)
    //Agregar los primeros parametros
    agregarPrimerosParam()
    //Agregar el ancla
    agregarAncla()
    //desplegar datos 
    desplegarDatos()
}
consulta.send()
