class Login{
    constructor() {
      this.messageEror =  document.querySelector('#Login-messageError')
    }
    validarCampo () {
     const email = document.querySelector('#login-email').value;
     const password = document.querySelector('#login-password').value;
        if (email == '' || password == '' ) {
            this.messageEror.textContent = 'Preencha os campos!!'
        }
     }
}
let login = new Login();