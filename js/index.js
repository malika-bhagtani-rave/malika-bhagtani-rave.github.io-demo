function ValidateEmail() {
    const email = document.getElementById("email").value;
    document.getElementById("email").style.border = "2px solid #F6BC25";
    document.getElementById("errorDiv").style.display="none"
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)) {
        document.getElementById("lblEmail").innerHTML = "Email";
        document.getElementById("lblEmail").classList.remove("label-error");
        document.getElementById("email").style.border = "2px solid #F6BC25";
        return (true)
    }
    document.getElementById("lblEmail").innerHTML = "Please Enter a valid Email";
    document.getElementById("lblEmail").classList.add("label-error");
    document.getElementById("email").style.border = "2px solid red";
    return (false)
}

function resetTxt()
{
    // document.getElementById("email").style.border = "transparent"
}


function sendEmailData() {
    const myParam = document.getElementById("email").value;
    if (myParam != "") {
        const url = "https://api.allorigins.win/get?url=" + encodeURIComponent("https://ltv-data-api.herokuapp.com/api/v1/records.json?email=" + myParam);
        fetch(url).then(data => { return data.json() })
            .then(res => {
                document.getElementById("email").style.border = "2px solid #F6BC25";
                document.getElementById("errorDiv").style.display="none"
                const retData = JSON.parse(res.contents);
                if (retData.length != 0) {
                    const jsonData = res.contents;
                    sessionStorage.setItem("EmailData", jsonData)
                    window.location.href = "email_details.html";
                }
                else {
                    document.getElementById("errorDiv").style.display="block"
                    document.getElementById("validate-msg").innerHTML = "**The email does not match. Please search again with correct email";
                    document.getElementById("email").style.border = "2px solid red";
                }
            })
    }
    else {
        document.getElementById("errorDiv").style.display="block"
        document.getElementById("validate-msg").innerHTML = "**The email cannot be empty. Please enter email and search again";
        document.getElementById("email").style.border = "2px solid red";
    }

}