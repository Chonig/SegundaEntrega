class Usuario {
    constructor(nombre,apellido,telefono,mail,nombreUsuario){
    this.nombre = nombre;
    this.apellido = apellido;
    this.telefono = telefono;
    this.mail = mail;
    this.nombreUsuario= nombreUsuario
    
    }
}

const usuarioUno = new Usuario("Cristian", "Hönig", 1234567891, "cristian@gmail.com", "Crish");
const usuarioDos = new Usuario("Carlos", "Calvo", 1010101025,"carloscalvo@gmail.com", "Carlin");
const usuarioTres = new Usuario("Pepe","Argento",0303456111,"pepeargento@gmail.com", "Pepito");

const arrayUsuarios = [];


arrayUsuarios.push(usuarioUno);
arrayUsuarios.push(usuarioDos);
arrayUsuarios.push(usuarioTres);

console.log(arrayUsuarios);


function menu(){
    alert("¡Bienvenido!");
    let opcion = parseInt(prompt("Ingrese la opción deseada: \n 1) ingrese un usuario \n 2) consulta de usuario \n 3) eliminar usuario  \n 4) salir"))
    return opcion

}

function ingresarUsuario (){
    let nombre = prompt("Ingrese su nombre: ");
    let apellido = prompt("Ingrese su apellido: ");
    let telefono = parseInt(prompt("Ingrese su teléfono: "));
    let mail = prompt("Ingrese su mail: ");
    let nombreUsuario = prompt("Ingrese su nombre de Usuario: ");
    let usuario = new Usuario(nombre,apellido,telefono,mail,nombreUsuario);
    arrayUsuarios.push(usuario);
    console.log(arrayUsuarios);
}

function consultaUsuario(){
    let nombreUsuario = prompt("Ingrese su nombre de usuario: ");
    let usuario = arrayUsuarios.find( usuario => usuario.nombreUsuario === nombreUsuario);
    console.log(usuario);
    console.log(arrayUsuarios);

}

function eliminarUsuario(){
    let nombreUsuario = prompt("Ingrese su nombre de Usuario: ");
    let usuario = arrayUsuarios.find(usuario => usuario.nombreUsuario === nombreUsuario);
    let indice = arrayUsuarios.indexOf(usuario);
    arrayUsuarios.splice(indice,1);
    console.log(arrayUsuarios);
}


function salir(){
    alert ( "Hasta Luego" );
}


let opcion = menu();
switch(opcion){
    case 1:
        ingresarUsuario();
        break

    case 2:
        consultaUsuario();
        break

    case 3:
        eliminarUsuario();
        break

    case 4:
        salir();
        break
}

