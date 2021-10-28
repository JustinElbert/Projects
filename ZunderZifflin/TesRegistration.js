function validate(){
    var name = document.getElementById("name")
    var email = document.getElementById("email")
    var radio = document.getElementsByName("gender")
    var adr = document.getElementById("address")
    var city = document.getElementById("city")
    var checkValid = false;
    
    if(name.value == '' || name.value == null){
        alert("Name is required");
        return false;
    }else{
        true;
    }

    if(email.value == '' || email.value == null){
        alert("Email is required");
        return false;
    }else{
        true;
    }

    if (!(radio[0].checked || radio[1].checked)) {
        alert("Gender is required");    
        return false;
    }else{
        true;
    }

    if(adr.value == '' || adr.value == null){
        alert("Address is required");
        return false;
    }else{
        true;
    }

    if(city.value == '' || city.value == null){
        alert("City is required");
        return false;
    }else{
        true;
    }

    if(document.getElementById("aggrement").checked){
        checkValid = true;
    }
    if(checkValid){
        true;
    }else{
        alert("Accept to the terms and services");
        return false;
    }


}


