export const characterValidation = (name, payload, minSize, maxSize) => {
    if(payload===''){
        return false;
    }
    else if(payload.length<minSize){
        alert(`El campo ${name} debe contener minimo ${minSize} caracteres.`);
        return false;
    }
    else if(payload.length>maxSize){
        alert(`El campo ${name} debe contener maximo ${maxSize} caracteres.`);
        return false;
    }
    else
        return true;
};

export const isNumber = value => {
    if(isNaN(value)){
        alert("Ingresa solo numeros");
        return false;
    }
    else
        return true;
};

export const numberValidation = (name, number, minSize, maxSize) => {
    if(number===''){
        return false;
    }
    else if(number.length<=minSize){
        alert(`El campo ${name} debe contener minimo ${minSize} numeros.`);
        return false;
    }
    else if(number.length>=maxSize){
        alert(`El campo ${name} debe contener maximo ${maxSize} numeros.`);
        return false;
    }
    else
        return true;
};