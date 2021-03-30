const qs = (e)=> document.querySelector(e)

window.addEventListener('load',()=>{
    console.log('Javascript está vinculado correctamente');

    let formulario = qs('form.form-login')
    let email = formulario.elements[0];
    let pass = formulario.elements[1];
    /* console.log(formulario); */

    let regExEmail =  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]:+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/

    email.addEventListener('blur',()=>{
        switch (true) {
            case !email.value:
                errorEmail.innerHTML = "El email es obligatorio";
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
    pass.addEventListener('blur',()=>{
        switch (true) {
            case !pass.value:
                errorPass.innerHTML = "La contraseña es obligatorio";
                pass.classList.add('is-invalid');
                break;
            default:
                errorPass.innerHTML = "";
                pass.classList.remove('is-invalid');
                pass.classList.add('is-valid');
                break;
        }
    })
    formulario.addEventListener('submit',(e)=>{
        let error = false;
        e.preventDefault();

        let elementsForm = formulario.elements;

        for (let index = 0; index < elementsForm.length -2; index++) { /* -1 para que no cuente al boton cuando recorre el array */
            if (!elementsForm[index].value) {
                elementsForm[index].classList.add('is-invalid')
                msgError.innerHTML = "Los campos señalados son obligatorios"
                error = true;
            }            
        }
        if(!error){
            formulario.submit()
        }
    })
})