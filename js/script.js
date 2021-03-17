
function validateForm() {
    let form = document.empForm;

    if (form.employeeID.value === "") {
        alert("Please provide your Employee ID");
        form.employeeID.focus();
        return false;
    }
    if (form.fullName.value === "") {
        alert("Please provide your Full name");
        form.fullName.focus();
        return false;
    }
    if (form.extension.value === "") {
        alert("Please provide your Extension");
        form.extension.focus();
        return false;
    }   
    if (form.email.value === "") {
        alert("Please provide your Email");
        form.email.focus();
        return false;
    }
    if (form.department.value === "") {
        alert("Please provide your Deparment");
        form.department.focus();
        return false;
    }
    if( form.employeeID.value.length != 8 ) {
        alert("Please provide a Employee ID in the format: ########");
        form.employeeID.focus();
        return false;
    }
    if( form.extension.value.length != 4 ) {
        alert("Please provide an Extension in the format: ####");
        form.extension.focus();
        return false;
    }
    
};

let btn = document.getElementById('addEmployee'); //ELEMENT LISTENER
btn.addEventListener('click', (e) => {
    e.preventDefault();
    validateForm();

    console.log(document.empForm.employeeID.value);
    console.log(document.empForm.fullName.value);
    console.log(document.empForm.extension.value);
    console.log(document.empForm.email.value);
    console.log(document.empForm.department.value);
});

