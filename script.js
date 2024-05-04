function logar(){
    var login = document.getElementById('login').value
    var senha = document.getElementById('senha').value

  if(login != 'admin' || senha != '1234'){
    document.getElementById('mensagem-erro').style.display = "block"
    document.getElementById('campos-erro').style.display = "none"
    
  }
  else{
    document.getElementById('mensagem-erro').style.display = "none"
    location.href = "sucesso.html";  
}

  if (login == '' || senha ==''){
    document.getElementById('campos-erro').style.display = "block"
    document.getElementById('mensagem-erro').style.display = "none"
  }


}
  





