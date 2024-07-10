export const validar = {
  vacio: (...inputs) => { //validación de los campos vacíos
    let result = false;
    inputs.forEach((e) => {
      if (e.trim() === "") {
        result = true;
      }
    });
    return result;
  },
  espacios: (...inputs) => { //validación de espacios
    let result = false;
    inputs.forEach((e) => {
      if (!/^\S*$/.test(e)) {
        result = true;
      }
    });
    return result;
  },
  numeros: (...inputs) => { //validación de números
    let result = false;
    inputs.forEach((e) => {
      if (!/^[0-9]+$/.test(e)) {
        result = true;
      }
    });
    return result;
  },
  email: (...inputs) => { //validación de correo
    let result = false;
    inputs.forEach((e) => {
      if (!/^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/.test(e)) {
        result = true;
      }
    });
    return result;
  },
  username: (input) => { //validación de nombre de usuario
    let result = false;
    if (!/^[A-Za-z0-9._]+$/.test(input)) {
      result = true;
    }
    return result;
  },
};
