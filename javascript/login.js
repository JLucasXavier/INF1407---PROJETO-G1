const re = /(^\\((b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|x|w|y|z)+\[((b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|x|w|y|z)+\|)+(b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|x|w|y|z)+]))/

onload = function(){
    this.document.getElementById("singinUsername").addEventListener("click", verifyUser)
}

function verifyUser() {
    console.log("Verify User")
    var user = document.getElementById("IDusername").value
    if (!re.test(user)){
        alert("Login errado!")
    }else{
        window.location.replace('game.html')
    }
    console.log(user)
}
