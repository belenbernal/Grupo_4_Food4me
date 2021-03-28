const qs = (e) => document.querySelector(e)

window.addEventListener('load', () => {
    console.log('java script esta vinculado correctamente')
    let formulario = qs('.formAdd');
    console.log(formulario)

    let nombre = formulario.elements[0];
    let categoria = formulario.elements[1];
    let check = formulario.elements[2];
    let precio = formulario.elements[3];
    let descripcion = formulario.elements[4];
    let imagen = formulario.elements[5];

    let regLetras = /^[a-zA-Z\sñáéíóúü]*$/;
    let regExImg = /(.jpg|.jpeg|.png|.gif|.webp)$/i;
    let oneMb = 1048576;

    nombre.addEventListener('blur', () => {
        switch (true) {
            case !nombre.value:
                errorNombre.innerHTML = 'campo obligatrio'
                nombre.classList.add('is-invalid')
                break;
            case !regLetras.test(nombre.value):
                errorNombre.innerHTML = 'solo se permiten letras'
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
                errorCategoria.innerHTML = "Este campo es obligatorio"
                categoria.classList.add('is-invalid')
                break
            default:
                categoria.classList.remove('is-invalid');
                categoria.classList.add('is-valid');
                errorCategoria.innerHTML = "";
        }
    })


    precio.addEventListener('blur', () => {
        switch (true) {
            case !precio.value:
                errorPrecio.innerHtml = "Este campo es obligatorio"
                precio.classList.add('is-invalid');
                break;

            default:
                precio.classList.remove('is-invalid');
                precio.classList.add('is-valid');
                errorPrecio.innerHTML = "";
                break;
        }
    })

    descripcion.addEventListener('blur', () => {
        switch (true) {
            case !descripcion.value:
                errorDescripcion.innerHTML = 'campo obligatrio'
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
                vistaPrevia.src = ""
                break
            default:
                imagen.classList.remove('is-invalid');
                imagen.classList.add('is-valid');
                errorImagen.innerHTML = "";

                let reader = new FileReader();
                
                reader.readAsDataURL(e.target.files[0])
                reader.onload = () => {
                    vistaPrevia.src = reader.result
                }
                break;
        }
    })

    formulario.addEventListener('submit',(event)=>{
        event.preventDefault()

        let error = false
        let element = formulario.elements;

        for (let i = 0; i < element.length -1; i++) {
           
            if (element[i].value) {
                element[i].classList.add('is-invalid')
                msgError.innerHTML = ('Los campos señalados son requeridos')
                error = true
            }
        }

        if (!error) {
            formulario.submit()
        }
    })



});