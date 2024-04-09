const form = document.querySelector("#form");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const passwordConfirmation = document.querySelector("#password-confirmation");

/* adicinando um evento ao formulário do tipo submit */
//lembre-se que como o evento é do tipo submit, iremos receber um event (event) do próprio submit

form.addEventListener('submit', (event) => {
    /* prevenindo o evento padrão que seria enviar o formulário */
    event.preventDefault()
    /* alert("cadastrado com sucesso") */
    checkInputUsername()
    checkInputEmail()
    checkInputPassword()
    checkInputPasswordConfirmation()

})



function checkInputUsername() {
    const usernameValue = username.value;

    if (usernameValue === "") {
        errorInput(username, "Preencha um nome de usuário")
    } else {
        const formItem = username.parentElement
        formItem.classList = 'form-content'
    }
}

username.addEventListener('blur', () => {
    checkInputUsername()
})

function checkInputEmail() {
    const emailValue = email.value;

    if (emailValue === "") {
        errorInput(email, "Preencha um email válido!")
    } else {
        const formItem = email.parentElement
        formItem.classList = 'form-content'
    }
}

//blur = representa a perda de foco do campo 
email.addEventListener('blur', () => {
    checkInputEmail()
})

function checkInputPassword() {
    const passwordValue = password.value;

    if (passwordValue === "") {
        errorInput(password, "Preencha uma senha!")
    } else if (passwordValue.length < 8) {
        errorInput(password, "A senha deve conter no minímo 8 caracteres")
    }
    else {
        const formItem = password.parentElemetent
        formItem.classList = 'form-content'
    }
}

//blur = representa a perda de foco do campo 
password.addEventListener('blur', () => {
    checkInputPassword()
})

function checkInputPasswordConfirmation() {
    const passwordConfirmationValue = passwordConfirmation.value;

    if (passwordConfirmationValue === "") {
        errorInput(passwordConfirmation, "Preencha uma senha!")
    } else if (passwordConfirmationValue.length < 8) {
        errorInput(passwordConfirmation, "A senha deve conter no minímo 8 caracteres!")
    }

    else {
        const formItem = passwordConfirmation.parentElemetent
        formItem.classList = 'form-content'
    }

}

passwordConfirmation.addEventListener('blur', () => {
    checkInputPasswordConfirmation()
})

function verPassword() {
    const passwordValue = passwordConfirmation.value;
    if (passwordValue === passwordConfirmation.value)
        errorInput(passwordConfirmation, "Senha não confere")
    }else{
        (passwordConfirmation.value === passwordValue)
        errorInput(passwordValue);
    }
}



function errorInput(input, message) {
    //parentElement = seleciona o pai direto de um elemento 
    const formItem = input.parentElement
    const textMessage = formItem.querySelector("span");
    //innerText = va até o texto do elemento e altera para o conteúdo especificado 
    textMessage.innerText = message;
    formItem.className = "form-content error"
}
