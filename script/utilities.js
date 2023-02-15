function getValue(id, isValue) {
    const element = document.getElementById(id);
    if (isValue) {
        const inputValue = element.value;
        return inputValue;
    }
    else {
        const innerTextValue = element.innerText;
        return innerTextValue;
    }
}

// validation
function inputValidation(value, id, message) {
    // declar small text area
    const small = document
		.getElementById(id)
        .parentElement.querySelector("small");
    
    // check validation
    if (isNaN(value) || value === '') {
        document.getElementById(id).classList.add('error');
        
        small.style.visibility = "visible";
        small.innerText = message;

    } else {
        document.getElementById(id).classList.add("success");
        document.getElementById(id).classList.remove("error");
        small.style.visibility = "hidden";

        const validValue = getValue(id, true);
        return parseInt(validValue);
    }
}