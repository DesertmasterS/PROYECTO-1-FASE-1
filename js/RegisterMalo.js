const form = document.getElementById('form');
const nombre = document.getElementById('nombre');
const apellido = document.getElementById('apellido');
const correoP = document.getElementById('correoP');
const correoE= document.getElementById('correoE');
const numtelef = document.getElementById('numtelef');
const direccion= document.getElementById('direccion');
const numdireccion = document.getElementById('numDir');
const contraseña = document.getElementById('contraseña');
const Repcontraseña = document.getElementById('Repcontraseña');

formulario.addEventListener('submit',e => {
    e.preventDefault();

    validar();
});

const setError = (element,message) => {
    const inputControl = element.parentElement;
    const Mostrarerror = inputControl.querySelector('.error');

    Mostrarerror.innerText = message;
    inputControl.classlist.add('error');
    inputControl.classlist.remove('success');
}   

const setSuccess = element => {
    const inputControl = element.parentElement;
    const Mostrarerror = inputControl.querySelector('.error');
    
    Mostrarerror.innerText = '';
    inputControl.classlist.add('success');
    inputControl.classlist.remove('error');
}


const validar = () => {
    const nombreValue = nombre.value.trim();
    const apellidoValue = apellido.value.trim();
    const correoPValue = correoP.value.trim();
    const correoEValue= correoE.value.trim();
    const numtelefValue = numtelef.value.trim();
    const direccionValue= direccion.value.trim();
    const numdireccionValue = numDir.value.trim();
    const contraseñaValue = contraseña.value.trim();
    const RepcontraseñaValue = Repcontraseña.value.trim();

    if (nombreValue === ''){
        setError(nombre, 'Este campo es obligatorio');

    }else{
        setSuccess(nombre);

    }

    if (apellidoValue === ''){
        setError(apellido, 'Este campo es obligatorio');

    }else{
        setSuccess(apellido);

    }
};