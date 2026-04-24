const inputUserName = document.querySelector('input#name-input');
const outputUserName = document.querySelector('span#name-output');
inputUserName.addEventListener('input', onInputChange);

function onInputChange(e) {
    const outputValue = e.currentTarget.value;
    if (outputValue.trim() === ``) {
        outputUserName.textContent = 'Anonymous';
    }else {
        outputUserName.textContent = outputValue.trim();
    }
}