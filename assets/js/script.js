let email = document.querySelector("#email")
let emailOk = false
let opiniao =document.querySelector("#opiniao")
let opiniaoOk = false

function validaOpiniao(){
    let txtOpiniao = document.querySelector('#txtOpiniao')

    if(opiniao.value.length <= 19){
        txtOpiniao.innerHTML = "O comentário é muito pequeno, digite no minimo 20 caracteres "
        txtOpiniao.style.color = "red"
        txtOpiniao.style.display = "block"
    }else{
        txtOpiniao.style.display = "none"
        opiniaoOk =true
    }
}

function validaEmail() {
    let txtEmail = document.querySelector("#txtEmail")

    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        txtEmail.innerHTML = "E-mail inválido"
        txtEmail.style.color = "red"
    } else {
        txtEmail.style.display = "none"
        emailOk = true
    }
}

function enviar() {
    if (emailOk && opiniaoOk) {
        alert ("Formulário enviado com Sucesso !!")
        window.location.href = 'index.html'
    } else if(emailOk == false) {
        alert ("Preencha o campo de E-mail corretamente antes de enviar !!")
    } else {
        alert ("Preencha o campo de comentário corretamente antes de enviar !!")
    }
}