var passwordOptions = document.getElementsByClassName("password_type");
var passwordLength = document.getElementById("password_length");
var password = document.getElementById("password");
var generateButton = document.getElementById("generate");
var copyButton = document.getElementById("copy");
var specialCharacters = "!#$%&()*+-./:;<=>?@^_{|}~";

// console.log(passwordLength, passwordOptions, password, generateButton, copyButton);
generateButton.onclick = generatePassword;

function validate(){
    if(passwordLength.value >= 8 && passwordLength.value < 129){
        
        for (var i=0; i < passwordOptions.length; i++){
            if(passwordOptions[i].checked == true){
                console.log("all good",passwordOptions[i],passwordLength.value); 
                return true;           
            }
        }

        alert("There is nothing checked");
        console.log("within range but nothing selected",passwordLength.value);
        return false;
    } else{
        alert("Password length should be between 8-128 characters");
        console.log("Numbers were not in range",passwordLength.value);
        return false;
    }
}

function generatePassword(){
    if(validate()){
        var firstPwd = []
        var characterType = []
        for (var i=0; i < passwordOptions.length; i++){
            if(passwordOptions[i].checked == true){
               characterType.push(passwordOptions[i].value)    
            }
        }
        for (var i=0; i < passwordLength.value; i++){
            var index = Math.floor(Math.random() * characterType.length);
            firstPwd.push(getrandomcharacter(characterType[index]));
        }
        password.value=firstPwd.join("");
        console.log(this)
    } else{
        password.value="";
        return;
    }
}
function getrandomcharacter(type){
    if(type === "numeric"){
        return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
    } else if(type === "special"){
        var index = Math.floor(Math.random() * specialCharacters.length); 
        console.log(index, specialCharacters.length, specialCharacters)
        return specialCharacters[index];
    }
    else if(type === "upper"){
        return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
    }
    else if(type ==="lower"){
        return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
    }
    else{
        return undefined
    }
}