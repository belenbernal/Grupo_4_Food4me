const qs = (e) => document.querySelector(e)

window.addEventListener('load', ()=>{

    let errors = {};
    
    let formulario = qs('.editUser');
    
    let imagen = formulario.elements[0];
    let nombre = formulario.elements[1];
    let apellido = formulario.elements[2];
    let date = formulario.elements[3];

    let regLetras = /^[a-zA-Z\sñáéíóúü]*$/;
    let regExImg = /(.jpg|.jpeg|.png|.gif|.webp)$/i;
    let oneMb = 1048576;

    /* imagen.addEventListener('blur',()=>{
        switch (true) {
            case !user.image.value:
                errorImagen.innerHTML = "Este campo es obligatorio"
                imagen.classList.add('is-invalid')
            break
            default:
            imagen.classList.remove('is-invalid');
            imagen.classList.add('is-valid');
            errorImagen.innerHTML = "";
        }
    }) */

    const validatorImage = ()=>{
        switch (true) {
            case !imagen.value :
                errors.image = false;
                break;
            case !regExImg.exec(imagen.value):
                errorImagen.innerHTML = "Solo imágenes con extensión jpg, jpeg, png, gif, webp"
                errors.image = true;
                imagen.classList.add('is-invalid')
                break;
            case imagen.files[0].size > oneMb * 2:
                errorImagen.innerHTML = "El archivo debe pesar menos de 2Mb"
                errors.image = true;
                imagen.classList.add('is-invalid')
                vistaPrevia.src = ""
                break
            default:
                imagen.classList.remove('is-invalid');
                imagen.classList.add('is-valid');
                errorImagen.innerHTML = "";
                errors.image = false;

                let reader = new FileReader();
                
                reader.readAsDataURL(imagen.files[0])
                reader.onload = () => {
                    vistaPrevia.src = reader.result
                }
                break;
        }
    }

    imagen.addEventListener('change', () => {
        validatorImage();
    })

    nombre.addEventListener('blur', ()=>{
        switch (true) {
            case !nombre.value:
                errorNombre.innerHTML = 'Este campo es obligatorio'
                nombre.classList.add('is-invalid')
                break;
            case !regLetras.test(nombre.value):
                errorNombre.innerHTML = 'Sin caracteres especiales'
                nombre.classList.add('is-invalid')
                break;
            case nombre.value.length < 2:
                errorName.innerHTML = 'El nombre debe tener al menos dos letras';
                nombre.classList.add('is-invalid');
                break;
           
            default:
                errorNombre.innerHTML = ''
                nombre.classList.remove('is-invalid')
                nombre.classList.add('is-valid')
                break;
        }
    })

    apellido.addEventListener('blur', ()=>{
        switch (true) {
            case !apellido.value:
                errorApellido.innerHTML = 'Este campo es obligatorio'
                apellido.classList.add('is-invalid')
                break;
            case !regLetras.test(apellido.value):
                errorApellido.innerHTML = 'Sin caracteres especiales'
                apellido.classList.add('is-invalid')
                break;
            case nombre.value.length < 2:
                errorName.innerHTML = 'El Apellido debe tener al menos dos letras';
                nombre.classList.add('is-invalid');
                break;
          
            default:
                errorApellido.innerHTML = ''
                apellido.classList.remove('is-invalid')
                apellido.classList.add('is-valid')
                break;
        }
    })

    date.addEventListener('blur', () => {
        switch (true) {
            case !date.value:
                errorDate.innerHTML = "El campo fecha es obligatorio"
                date.classList.add('is-invalid')
                break;
            case moment(date.value) > moment() :
                errorDate.innerHTML = "La fecha es invalida"
                date.clasList.add('is-invalid')
                break;
            case moment().diff(moment(date.value),'years') < 13 :
                errorDate.innerHTML = "Debes ser mayor de 13 años"
                date.classList.add('is-invalid')
            break

            default:
                date.classList.remove('is-invalid');
                date.classList.add('is-valid');
                errorDate.innerHTML = "";
                break
        
        }
    })



    formulario.addEventListener('submit',(e)=>{
        let error = false;
        e.preventDefault();

        let elementsForm = formulario.elements;

        validatorImage();
        if(errors.image){
            errorBtn.innerHTML = "Los campos señalados son obligatorios"
        }else{
            formulario.submit() 
        }

        /* for (let index = 1; index < elementsForm.length -1; index++) { 
            if (!elementsForm[index].value) {
                elementsForm[index].classList.add('is-invalid')
                errorBtn.innerHTML = "Los campos señalados son obligatorios"
                error = true;
            }            
        }
        if(!error){
            formulario.submit()
        } */
    })


})