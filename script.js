function handleGetFormData(){
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const city = document.getElementById("city").value;
    const zipCode = document.getElementById("zip-code").value;
    const status = document.getElementById("status").checked;
    return {
        name,
        email,
        city,
        zipCode,
        status,
    }
}

function isNumber(zipCode){
    if (zipCode && !isNaN(zipCode)){
        return true;
    } else{
        return false;
    }
}

function checkboxIsChecked(){
    const check = document.getElementById('status')
    if(check.checked){
        return true;
    } else{
        return false
    }
}

// function checkboxIsChecked() {
//     const statusCheckbox = document.getElementById("status");
//     return statusCheckbox.checked;
// }


function validateFormData(data) {

    if (data.name !== "" && data.email !== "" && data.city !== "" && isNumber(data.zipCode) && checkboxIsChecked()) {
        return true;
    } else {
        return false;
    }
}



function submit(){
    
    if(validateFormData(handleGetFormData()) == false){
        document.getElementById("warning").innerHTML = "Periksa form anda sekali lagi"
    } else {
        document.getElementById("warning").innerHTML =  ""
        // saveDataToLocalStorage(formData)
    }
}

// function saveDataToLocalStorage(data) {
//     localStorage.setItem("formData", JSON.stringify(data));
// }

document.getElementById("submit-form").addEventListener("click", function(event) {
    submit();
    event.preventDefault();
});
