document.getElementByld('registrationForm').addEventListener('submit',
    function(event) {
     eventpreventDefault();
     //impede o envio do formulário por padrão
       const username = document.querySelector('input[name = "username"]').value;
       const email = document.querySelector('input[name = "email"]').value;
       const password = document.querySelector('input[name = "password"]').value;
       let valid = true;
       let message = "";
       
      //validação do nome do usuário

      if(username.trim() === "") {
      valid = false;
      message +='O nome do usuário é obrigatótio.\n';
      }
      
      //validação do email
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
      valid = false;
      message += 'Por favor,insira um email válido.\n';
      }

      //validação da senha
      
      if(password.length<6){
        valid = false;
        message += 'A senha deve ter pelo menos 6 caracteres.\n';
      }
      
      if(valid){
         alert("Cadastro realizado com sucesso!");
         this.submit();   //Envia o formulário se tudo estiver válido
      }

      else {
        alert(message);  //exibe mensagem de erro
      }
      });