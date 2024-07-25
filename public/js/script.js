class Login {
    constructor() {
      this.messageEror =  document.querySelector('#Login-messageError')
    }
    validarCampo () {
      const email = document.querySelector('#login-email').value.trim();
      const password = document.querySelector('#login-password').value.trim();

      const conditions = [
        {condition: email === '', message: 'Por preencha os campos'},
        {condition: password === '', message: 'Campo de senha incorreto'}
      ]

      for (let  i = 0; i < conditions.length; i++) {
        if(conditions[i].condition) {
          this.messageEror.textContent = conditions[i].message;
          return false
        }
        this.messageEror.textContent=  '';
        return true;
      }
    }
}
const login = new Login();