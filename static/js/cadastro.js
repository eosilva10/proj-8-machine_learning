let btn = document.querySelector('#verSenha')
let btnConfirmSenha = document.querySelector('#verConfirmSenha')

let nome = document.querySelector('#nome')
let labelNome = document.querySelector('#labelNome')
let validNome = false

let usuario = document.querySelector('#usuario')
let labelUsuario = document.querySelector('#labelUsuario')
let validUsuario = false

let senha = document.querySelector('#senha')
let labelSenha = document.querySelector('#labelSenha')
let validSenha = false

let confirmSenha = document.querySelector('#confirmSenha')
let labelConfirmSenha = document.querySelector('#labelConfirmSenha')
let validConfirmSenha = false

let msgError = document.querySelector('#msgError')
let msgSuccess = document.querySelector('#msgSuccess')

// VERIFICA O NOME
nome.addEventListener('keyup', () => {
  if(nome.value.length <= 2 ){
    labelNome.setAttribute('style', 'color: #ff4242')
    labelNome.innerHTML = 'Insira no mínimo 3 caracteres'
    nome.setAttribute('style', 'border-color: #ff4242')
    validNome = false
  }else{
    labelNome.setAttribute('style' , 'color: #41c56d')
    labelNome.innerHTML = 'Email'
    nome.setAttribute('style', 'border-color: #41c56d')
    validNome = true
  }
})

// VERIFICA O USUARIO
usuario.addEventListener('keyup', () => {
  if(usuario.value.length <= 4 ){
    labelUsuario.setAttribute('style', 'color: #ff4242')
    labelUsuario.innerHTML = 'Insira no mínimo 5 caracteres'
    usuario.setAttribute('style', 'border-color: #ff4242')
    validUsuario = false
  }else{    
    labelUsuario.setAttribute('style' , 'color: #41c56d')
    labelUsuario.innerHTML = 'Usuário'
    usuario.setAttribute('style', 'border-color: #41c56d')
    validUsuario = true
  }
})

// VERIFICA A SENHA
senha.addEventListener('keyup', () => {
  if(senha.value.length <= 5 ){
    labelSenha.setAttribute('style', 'color: #ff4242')
    labelSenha.innerHTML = 'Insira no mínimo 6 caracteres'
    senha.setAttribute('style', 'border-color: #ff4242')
    validSenha = false
  }else{
    labelSenha.setAttribute('style' , 'color: #41c56d')
    labelSenha.innerHTML = 'Senha'
    senha.setAttribute('style', 'border-color: #41c56d')
    validSenha = true
  }
})

// VERIFICA A CONFIRMAÇÃO DE SENHA
confirmSenha.addEventListener('keyup', () => {
  if(senha.value != confirmSenha.value){
    labelConfirmSenha.setAttribute('style', 'color: #ff4242')
    labelConfirmSenha.innerHTML = 'As senhas não conferem'
    confirmSenha.setAttribute('style', 'border-color: #ff4242')
    validConfirmSenha = false
  }else{
    labelConfirmSenha.setAttribute('style' , 'color: #41c56d')
    labelConfirmSenha.innerHTML = 'Confirmar Senha'
    confirmSenha.setAttribute('style', 'border-color: #41c56d')
    validConfirmSenha = true
  }
})


// VALIDANDO O CADASTRO
function cadastrar() {
  if(validNome && validUsuario && validSenha && validConfirmSenha){
  
    // PEGA O localStorege - listaUser OU ARRAY VAZIO
    let listaUser = JSON.parse(localStorage.getItem('listaUser') || ' []')

    listaUser.push(
      { nomeCad: nome.value,
        userCad: usuario.value,
        senhaCad: senha.value
    }
    )

    // CRIA UM NOVO REGISTRO NO localStorege
    localStorage.setItem('listaUser', JSON.stringify(listaUser))

    msgSuccess.setAttribute('style', 'display: block')
    msgSuccess.innerHTML = 'Cadastrando Usuário - Aguarde'
    msgError.setAttribute('style' , 'display: none')
    msgError.innerHTML = ''

    // ESPERA 3s 
    setTimeout(()=>{
      window.location.href = '/login'
    },3000)

  }else{
    msgError.setAttribute('style' , 'display: block')
    msgError.innerHTML = 'Preencha todos os campos corretamente antes de cadastrar'
    msgSuccess.setAttribute('style', 'display: none')
    msgSuccess.innerHTML = ''
    
  }

}

// CONFIRMA SENHA
btnConfirmSenha.addEventListener('click', ()=>{  

  let inputConfirmSenha = document.querySelector('#confirmSenha')

  if(inputConfirmSenha.getAttribute('type') == 'password'){
    inputConfirmSenha.setAttribute('type', 'text')
  }else{
    inputConfirmSenha.setAttribute('type' , 'password')
  }
})



// ------------------------------------------------
// https://www.youtube.com/watch?v=THQujIyE7Tg

// https://www.youtube.com/watch?v=jze3TasX5DA&t=800s&ab_channel=ThiCode



