const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O",
                    "P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d",
                    "e","f","g","h","i","j","k","l","m","n","o","p","q","r","s",
                    "t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", 
                    "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_",
                    "-","+","=","{","[","}","]",",","|",":",";","<",">",".","?", "/"];

let firstBox = document.getElementById("first-box")
let secondBox = document.getElementById("second-box")

function getPasswords() {
    // To reset the data when the button is clicked again
    firstBox.textContent=""
    secondBox.textContent=""
    // To generate random characters
    for (let i = 0; i < 15; i++) {
        let randomCharacter1 = Math.floor( Math.random() * characters.length )
        let randomCharacter2 = Math.floor( Math.random() * characters.length )
        firstBox.textContent += characters[randomCharacter1]
        secondBox.textContent += characters[randomCharacter2]
    }
}