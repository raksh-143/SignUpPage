function checkpword(form){
    let pword = form.pword.value;
    if(pword.length < 5 && pword.length != 0){
        alert("Password length is less than 5")
    }
}