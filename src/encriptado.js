function encryptRules(letter){
    switch(letter){
        case "e":
            return "enter";
        case "i":
            return "imes"
        case "a":
            return "ai"
        case "o":
            return "ober"
        case "u":
            return "ufat"
        default:
            return letter;
    }
    
  }
  
  const encrypt = {
    encode: function (inputValue) { // parámetros (offset,string)
      let password = ""; // regresar valor vacio
      for (let i = 0; i < inputValue.length; i++) { // recorrer todas las letras ingresadas
        const unicodeValue = inputValue.charCodeAt(i); // convertir a ascii
        if (unicodeValue >= 97 && unicodeValue <= 122){ // código ASCII de letras minusculas
          const character = encryptRules(inputValue[i]); //unir los caracteres encriptados en un string
          password += character; // regresar la union de caracteres
        }
        else{
          alert ("El texto ingresado no es válido");
          break
        }
      }
      return password;
    },
    decode: function (inputValue) {
      let encryptedWord = Array.from(inputValue)
      let rules = {'enter':"e",'imes':'i','ai':'a','ober':'o','ufat':'u'};
      Object.entries(rules).forEach(([key, value]) => { 
          let position = 0;
          while(true){
              let subArray = encryptedWord.slice(position).join('');
              let index = subArray.indexOf(key);
              if(index ===-1){
                break;
              }
              position+=index; 
              encryptedWord.splice(position,key.length,value);
              position += value.length;
          }
      });
      return encryptedWord.join('');
    }
  };
  
  export default encrypt; // exportar archivo de funciones al index