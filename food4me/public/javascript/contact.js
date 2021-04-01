const qs = (e) => document.querySelector(e)

window.addEventListener('load', () => {
    console.log('Javascript está vinculado correctamente');

    let formulario = qs('form.contactForm')
    let nombre = formulario.elements[0];
    let apellido = formulario.elements[1];
    let email = formulario.elements[2];
    let asunto = formulario.elements[3];
    let mensaje = formulario.elements[4];

    /* console.log(formulario); */


    let regExEmail = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]:+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/
    let regExLetras = /^[a-zA-Z\sñáéíóúü]*$/

    nombre.addEventListener('blur', () => {
        switch (true) {
            case !nombre.value:
                nameError.innerHTML = "El campo nombre es obligatorio";
                nombre.classList.add('is-invalid');
                break;
            case !regExLetras.test(nombre.value):
                nameError.innerHTML = "Solo letras por favor";
                nombre.classList.add('is-invalid');
                break;
            default:
                nameError.innerHTML = "";
                nombre.classList.remove('is-invalid');
                nombre.classList.add('is-valid');
                break;
        }
    })
    apellido.addEventListener('blur', () => {
        switch (true) {
            case !apellido.value:
                lastNameError.innerHTML = "El campo apellido es obligatorio";
                apellido.classList.add('is-invalid');
                break;
            case !regExLetras.test(apellido.value):
                lastNameError.innerHTML = "Solo letras por favor";
                apellido.classList.add('is-invalid');
                break;
            default:
                lastNameError.innerHTML = "";
                apellido.classList.remove('is-invalid');
                apellido.classList.add('is-valid');
                break;
        }
    })
    email.addEventListener('blur', () => {
        switch (true) {
            case !email.value:
                emailError.innerHTML = "El campo email es obligatorio";
                email.classList.add('is-invalid');
                break;
            case !regExEmail.test(email.value):
                emailError.innerHTML = "Ingrese un email válido";
                email.classList.add('is-invalid');
                break;
            default:
                emailError.innerHTML = "";
                email.classList.remove('is-invalid');
                email.classList.add('is-valid');
                break;
        }
    })
    asunto.addEventListener('blur', () => {
        switch (true) {
            case !asunto.value:
                asuntoError.innerHTML = "El campo apellido es obligatorio";
                asunto.classList.add('is-invalid');
                break;
            case !regExLetras.test(asunto.value):
                asuntoError.innerHTML = "Solo letras por favor";
                asunto.classList.add('is-invalid');
                break;
            default:
                asuntoError.innerHTML = "";
                asunto.classList.remove('is-invalid');
                asunto.classList.add('is-valid');
                break;
        }
    })
    mensaje.addEventListener('blur', function () {
        switch (true) {
            case !mensaje.value:
                mensajeError.innerHTML = "Este campo es obligatorio"
                mensaje.classList.add('is-invalid')
                break
            default:
                mensaje.classList.remove('is-invalid');
                mensaje.classList.add('is-valid');
                mensajeError.innerHTML = "";
        }
    })
    formulario.addEventListener('submit', (e) => {
        let error = false;
        e.preventDefault();

        let elementsForm = formulario.elements;

        for (let index = 0; index < elementsForm.length - 1; index++) { /* -1 para que no cuente al boton cuando recorre el array */
            if (!elementsForm[index].value) {
                elementsForm[index].classList.add('is-invalid')
                msgError.innerHTML = "Por favor complete los campos obligatorios"
                error = true;
            }
        }
        if (!error) {
            formulario.submit()
        }
    })
})