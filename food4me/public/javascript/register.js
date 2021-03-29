const qs = (e)=> document.querySelector(e)

window.addEventListener('load',()=>{
    console.log('Javascript está vinculado correctamente');

    let formulario = qs('form.form-reg')
    let email = formulario.elements[0];
    let nombre = formulario.elements[1];
    let apellido = formulario.elements[2];
    let pass1 = formulario.elements[3];
    let pass2 = formulario.elements[4];
    let date = formulario.elements[5];
    let image = formulario.elements[6];
    let aceptar = formulario.elements[7];

    /* console.log(formulario); */

    (image.value)?image.value = "": null

    let regExEmail =  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]:+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/
    let regExPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,12}$/
    let regExLetras = /^[a-zA-Z\sñáéíóúü]*$/
    let regExExt = /(.jpg|.jpeg|.png|.gif|.webp)$/i;
    const oneMB = 1048576;

    email.addEventListener('blur',()=>{
        switch (true) {
            case !email.value:
                errorEmail.innerHTML = "El campo email es obligatorio";
                email.classList.add('is-invalid');
                break;
            case !regExEmail.test(email.value) :
                errorEmail.innerHTML = "Ingrese un email válido";
                email.classList.add('is-invalid');
                break;
            default:
                errorEmail.innerHTML = "";
                email.classList.remove('is-invalid');
                email.classList.add('is-valid');
                break;
        }
    })
    nombre.addEventListener('blur',()=>{
        switch (true) {
            case !nombre.value:
                errorName.innerHTML = "El campo nombre es obligatorio";
                nombre.classList.add('is-invalid');
                break;
            case !regExLetras.test(nombre.value) :
                errorName.innerHTML = "Solo letras por favor";
                nombre.classList.add('is-invalid');
                break;
            case nombre.value.length < 2:
                errorName.innerHTML = 'El nombre debe tener al menos dos letras';
                nombre.classList.add('is-invalid');
                break;
            default:
                errorName.innerHTML = "";
                nombre.classList.remove('is-invalid');
                nombre.classList.add('is-valid');
                break;
        }
    })
    apellido.addEventListener('blur',()=>{
        switch (true) {
            case !apellido.value:
                errorLastName.innerHTML = "El campo apellido es obligatorio";
                apellido.classList.add('is-invalid');
                break;
            case !regExLetras.test(apellido.value) :
                errorLastName.innerHTML = "Solo letras por favor";
                apellido.classList.add('is-invalid');
                break;
            case apellido.value.length < 2:
                errorLastName.innerHTML = 'El apellido debe tener al menos dos letras';
                apellido.classList.add('is-invalid');
                break;
            default:
                errorLastName.innerHTML = "";
                apellido.classList.remove('is-invalid');
                apellido.classList.add('is-valid');
                break;
        }
    })
    pass1.addEventListener('blur',()=>{
        switch (true) {
            case !pass1.value:
                errorPass1.innerHTML = "El campo contraseña es obligatorio";
                pass1.classList.add('is-invalid');
                break;
            case !regExPass.test(pass1.value) :
                errorPass1.innerHTML = "La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula y un número";
                pass1.classList.add('is-invalid');
                break;
            default:
                errorPass1.innerHTML = "";
                pass1.classList.remove('is-invalid');
                pass1.classList.add('is-valid');
                break;
        }
    })
    pass2.addEventListener('blur',()=>{
        switch (true) {
            case !pass2.value:
                errorPass2.innerHTML = "Verifique la contraseña";
                pass2.classList.add('is-invalid');
                break;
            case pass2.value != pass1.value:
                errorPass2.innerHTML = "Las contraseñas no coinciden";
                pass2.classList.add('is-invalid');
                break;
            default:
                errorPass2.innerHTML = "";
                pass2.classList.remove('is-invalid');
                pass2.classList.add('is-valid');
                break;
        }
    })
    date.addEventListener('blur',()=>{ /*Revisar*/
        switch (true) {
            case !date.value:
                errorDate.innerHTML = "El campo fecha es obligatorio"
                date.classList.add('is-invalid')
            break;
            case moment(date.value) > moment() :
                errorDate.innerHTML = "La fecha es inválida"
                date.classList.add('is-invalid')
            break;
            case moment().diff(moment(date.value),'years') < 18 :
                errorDate.innerHTML = "Debes ser mayor de 13 años"
                date.classList.add('is-invalid')
            break;
            default:
                errorDate.innerHTML = "";
                date.classList.remove('is-invalid');
                date.classList.add('is-valid');
                break;
        }
    })
    image.addEventListener('blur',function(){
        switch (true) {
            case !image.value:
                errorImage.innerHTML = "Este campo es obligatorio"
                image.classList.add('is-invalid')
            break
            default:
            image.classList.remove('is-invalid');
            image.classList.add('is-valid');
            errorImage.innerHTML = "";
        }
    })
    image.addEventListener('change',(e)=>{
        switch (true) {
            case !regExExt.exec(image.value):
                errorImage.innerHTML = "Solo imágenes con extensión jpg, jpeg, png, gif, webp"
                image.classList.add('is-invalid')
                break;
            case image.files[0].size > oneMB * 2 :
                errorImage.innerHTML = "El archivo debe pesar menos de 2MB"
                image.classList.add('is-invalid')
                vistaPrevia.src = ""
            break
            default:
                image.classList.remove('is-invalid');
                image.classList.add('is-valid');
                errorImage.innerHTML = "";
            break;
        }
    })
    aceptar.addEventListener('change', () => {
        if(!aceptar.checked){
            errorAceptar.innerHTML = 'Para crear una cuenta debes aceptar los términos y condiciones'
        }else{
            errorAceptar.innerHTML = "";
        }
    })
    formulario.addEventListener('submit',(e)=>{
        let error = false;
        e.preventDefault();

        let elementsForm = formulario.elements;

        for (let index = 0; index < elementsForm.length -1; index++) { /* -1 para que no cuente al boton cuando recorre el array */
            if (!elementsForm[index].value) {
                elementsForm[index].classList.add('is-invalid')
                msgError.innerHTML = "Los campos señalados son obligatorios"
                error = true;
            }            
        }
        if(!aceptar.checked){
            msgAceptar.innerHTML = 'Para crear una cuenta debes aceptar los términos y condiciones'
            msgError.innerHTML = "Los campos señalados son obligatorios"
            error = true;
        }else{
            if(!error){
                formulario.submit()
            }
        }
    })   
})