function setData(){
    var data = sessionStorage.getItem("EmailData");
    var json = JSON.parse(data);
    var name = json.first_name + " "+ json.last_name;
    document.getElementById("name").innerHTML = name;
    var desc = json.description;
    document.getElementById("desc").innerHTML = desc;
    var addr = json.address;
    document.getElementById("addr").innerHTML = addr;
    var email = json.email;
    document.getElementById("eml").innerHTML = email;
    var phn = json.phone_numbers.join(" <br/>");
    document.getElementById("phno").innerHTML = phn;
    var rel = json.relatives.join(" <br/>");
    document.getElementById("rel").innerHTML = rel;
}

