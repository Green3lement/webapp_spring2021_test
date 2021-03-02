function updateCountryView() {
    var ddCountry = document.getElementById("ddCountry");
    var divCountry = document.getElementById("divCountry");

    if(ddCountry.value == "Yes"){
        divCountry.classList.remove("invisible");
    }
    else{
        divCountry.classList.add("invisible");
    }
}

function validateForm() {
    var DoB = document.getElementById("#txtDoB");
    var DoBerrorr = document.getElementById("divDoBError");
    var formIsValid = true;
    if(DoB.value == ""){
        /* show an error */
        divDoBError.classList.remove("invisible");
        divDoBError.innerHTML = "The Date of Birth cannot be empty.";
        DoB.classList.add("hasError");
        formIsValid = false;
    }
    else {
        var DoBDate = new Date(DoB.value);
        var todayDate =  new Date();
        if(DoBDate >= todayDate){
            /* show an error*/ 
            divDoBError.classList.remove("invisible");
            divDoBError.innerHTML = "The Date of Birth must be before today's date.";
            DoB.classList.add("hasError");
            formIsValid = false;
        }
        else {
            divDoBError.classList.add("invisible");
            divDoBError.innerHTML = "";
            DoB.classList.remove("hasError");
        }
    }

    var ddCountry = document.querySelector("#addCountry");
    if (ddCountry.value == "Yes"){
        var txtCountry = document.querySelector("#txtCountry");
        if (ddCountry.value == ""){
            document.querySelector("#divCountryError").classList.remove("invisible");
            document.querySelector("#divCountryError").classList.add("visible");
            txtCountry.classList.add("hasError");
            formIsValid = false;
        }
    
        else{
            document.querySelector("#divCountryError").classList.add("invisible");
            txtCountry.classList.remove("hasError");
        }
    }

    var elements = document.getElementsByTagName("input")
    var invalidChars = ['#', '!', '~', '&', '<', '>', '`','"'];
    for(let i=0; i < elements.length; i++){
        for(let j=0; j < invalidChars.length; j++){
            if(elements[i].value.indexOf(invalidChars[j]) != -1){
                elements[i].classList.add("hasError");
                formIsValid = false;
            }
        }
    }


    return formIsValid;
}