const formElem = document.querySelector(`.login-form`);

formElem.addEventListener(`submit`, (e)=>{
    e.preventDefault();

    const inputValues = new FormData(formElem);
    const formValues = {
        email: inputValues.get(`email`).trim(),
        password: inputValues.get(`password`).trim(),
    };

    if (formValues.email === `` || formValues.password === ``) {
        alert('All form fields must be filled in');
    }else {
        console.log(formValues);
    }

    formElem.reset();
});
