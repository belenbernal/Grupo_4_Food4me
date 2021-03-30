const qs = (e) => document.querySelector(e)

window.addEventListener('load', () => {
    console.log('Javascript vinculado correctamente')
    let formulario = qs('.formAdd');

    let nombre = formulario.elements[0];
    let categoria = formulario.elements[1];
    let check1 = formulario.elements[2];
    let check2 = formulario.elements[3];
    let check3 = formulario.elements[4];
    let check4 = formulario.elements[5];
    let precio = formulario.elements[6];
    let descripcion = formulario.elements[7];
    let imagen = formulario.elements[8];

    console.log(formulario)

    let regLetras = /^[a-zA-Z\sñáéíóúü]*$/;
    let regExImg = /(.jpg|.jpeg|.png|.gif|.webp)$/i;
    let oneMb = 1048576;

    nombre.addEventListener('blur', () => {
        switch (true) {
            case !nombre.value:
                errorNombre.innerHTML = 'El nombre es obligatorio'
                nombre.classList.add('is-invalid')
                break;
            case !regLetras.test(nombre.value):
                errorNombre.innerHTML = 'Ingrese solo letras'
                nombre.classList.add('is-invalid')
                break;
            default:
                errorNombre.innerHTML = ''
                nombre.classList.remove('is-invalid')
                nombre.classList.add('is-valid')
                break;
        }
    })

    categoria.addEventListener('blur', () => {
        switch (true) {
            case categoria.value == 'Seleccione la categoría':
                errorCategoria.innerHTML = "Seleccione la categoría"
                categoria.classList.add('is-invalid')
                break;
            default:
                categoria.classList.remove('is-invalid');
                categoria.classList.add('is-valid');
                errorCategoria.innerHTML = "";
        }
    })

    const checks =()=>{
        switch (true) {
            case ((check1.checked || check2.checked || check3.checked) && check4.checked):
                errorCheck.innerHTML = "Si selecciono el ultimo no puede seleccionar los demás"
                check1.classList.add('is-invalid')
                check2.classList.add('is-invalid')
                check3.classList.add('is-invalid')
                check4.classList.add('is-invalid')
                break;
            case ((!check1.checked && !check2.checked && !check3.checked && !check4.checked)):
                errorCheck.innerHTML = "Seleccione al menos un check"
                check1.classList.add('is-invalid')
                check2.classList.add('is-invalid')
                check3.classList.add('is-invalid')
                check4.classList.add('is-invalid')
                break;
            default:
                check1.classList.remove('is-invalid');
                check2.classList.remove('is-invalid');
                check3.classList.remove('is-invalid');
                check4.classList.remove('is-invalid');
                check1.classList.add('is-valid');
                check2.classList.add('is-valid');
                check3.classList.add('is-valid');
                check4.classList.add('is-valid');
                errorCheck.innerHTML = "";
                break;
        }
    }

    check1.addEventListener('change', () => {
        checks();
    })
    check2.addEventListener('change', () => {
        checks();
    })
    check3.addEventListener('change', () => {
        checks();
    })
    check4.addEventListener('change', () => {
        checks();
    })

    precio.addEventListener('blur', () => {
        switch (true) {
            case !precio.value:
                errorPrecios.innerHtml = "Este campo es obligatorio"
                precio.classList.add('is-invalid');
                break;

            default:
                precio.classList.remove('is-invalid');
                precio.classList.add('is-valid');
                errorPrecios.innerHTML = "";
                break;
        }
    })

    descripcion.addEventListener('blur', () => {
        switch (true) {
            case !descripcion.value:
                errorDescripcion.innerHTML = 'Campo obligatorio'
                descripcion.classList.add('is-invalid')
                break;
            default:
                errorDescripcion.innerHTML = ''
                descripcion.classList.remove('is-invalid')
                descripcion.classList.add('is-valid')
                break;
        }
    })

    imagen.addEventListener('change', (e) => {
        switch (true) {
            case !regExImg.exec(imagen.value):
                errorImagen.innerHTML = "Solo imágenes con extensión jpg, jpeg, png, gif, webp"
                imagen.classList.add('is-invalid')
                break;
            case imagen.files[0].size > oneMb * 2:
                errorImagen.innerHTML = "El archivo debe pesar menos de 2Mb"
                imagen.classList.add('is-invalid')
                break;
            case imagen.files[0]:
                errorImagen.innerHTML = ""
                imagen.classList.add('is-valid')
                break;
            default:
                imagen.classList.remove('is-invalid');
                imagen.classList.add('is-valid');
                errorImagen.innerHTML = "";
                break;
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
        if(!error){
            formulario.submit()
        }
    })
});