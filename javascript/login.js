const re = /((b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|x|w|y|z)+\[((b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|x|w|y|z)+\|)+(b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|x|w|y|z)+])/

onload = function(){
    this.document.getElementById("singinUsername").addEventListener("click", verifyUser)
}

function verifyUser() {
    console.log("Verify User")
    var user = document.getElementById("IDusername").value
    if (!re.test(user)){
        myFunction()
    }else{
        window.open('game.html')
    }
    console.log(user)
}

function myFunction() {
    var txt;
    if (confirm("Login errado!")) {
        txt = "You pressed OK!";
    }
}