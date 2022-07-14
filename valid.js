function valid(){
    var name=document.form.name.value;
    var password=document.form.password.value;
if(name=="" && password.length<6){
    alert("enter name and password again");
    return false;
}
else if(name=="" ){
    alert("Name cannot be empty");
    return false;
}
else if(password.length<6){
    alert(" password is too short");
    return false;
}
}