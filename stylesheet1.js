const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const dataNonCrypte = "yzoo";
const cryptedTest = [];
let crypted = '';
const dataCrypted = (data) => {
    const string = data.split("");
    string.forEach((lettre) => {
        if(lettre === 'z'){
            crypted = alphabet[0];
        }else{
            let index = alphabet.indexOf(lettre);
            crypted = alphabet[index + 1];
        }
        cryptedTest.push(crypted);
    });
    return cryptedTest.join('');
};
console.log(dataCrypted(dataNonCrypte));