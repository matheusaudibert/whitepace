//Menu hambúrguer - adiciona ou retira a classe 'open' da 'ul'
let ul = document.querySelector('nav .ul');
//Abre menu
function openMenu(){
  ul.classList.add('open');
}

//Fecha Menu
function closeMenu(){
  ul.classList.remove('open');
}


//Relógio - exibi um rélogio constante
function updateClock() {
  const clockElement = document.getElementById('clock'); //Pega o id do elemento
  const now = new Date(); //Cria um objeto 'Date' que contém a data e hora atual
  //Extrai as horas, minutos e segundos do objeto 'Date' e converte para strings
  const hours = String(now.getHours()).padStart(2, '0'); //Retorna as horas (0 - 23)
  const minutes = String(now.getMinutes()).padStart(2, '0'); //Retorna os minutos (0 - 59) 
  const seconds = String(now.getSeconds()).padStart(2, '0'); //Retorna os segundos (0 - 59)

  //O método 'padStart(2, '0') é usado para garantir que cada valor tenha 2 dígitos, adicionando um zero à esquerda se necessário

  clockElement.textContent = `${hours}:${minutes}:${seconds}`; //Formata para 'hh:mm:ss' e insere no html
}

// Atualiza o relógio a cada segundo
setInterval(updateClock, 1000);

// Inicializa o relógio
updateClock();

//Calendário - exibi um calendário constante
function getCurrentDate() {
  const now = new Date(); //Cria um objeto 'Date' que contém a data e hora atual
  //Extrai as o dia, o mês e o ano do objeto 'Date' e converte para strings
  const day = String(now.getDate()).padStart(2, '0'); //Retorna o dia (1 - 31)
  const month = String(now.getMonth() + 1).padStart(2, '0'); //Retorna o mês (0 - 11)
  const year = now.getFullYear(); //Retorna o ano (4 dígitos)
  
  return `${day}/${month}/${year}`; //Formata para 'dd/mm/yyyy'
}

document.getElementById('date').textContent = getCurrentDate(); //Insere no html

//Cumprimenta usuário
function getGreeting() {
  const now = new Date(); //Cria um objeto 'Date' que contém a data e hora atual
    //Extrai as horas 'Date' e converte para string
  const hours = now.getHours(); //Retorna as horas (0 - 23)
  if (hours < 6) { //Verifica se é madrugada (0 - 6)
    return "Boa madrugada!";
  } 
    else if (hours < 12) { //Verifica se é manhã (6 - 12)
      return "Bom dia!";
  } else if (hours < 18) { //Verifica se é tarde (12 - 18)
      return "Boa tarde!";
  } else { //Verifica se é noite (18 - 23)
      return "Boa noite!";
  }
}

document.getElementById('greeting').textContent = getGreeting(); //Insere no html

//Valida formulário
function validateForm() {
  const name = document.getElementById('name').value.trim(); //Obtém o valor do campo, sem espaços.
  const email = document.getElementById('email').value.trim(); //Obtém o valor do campo, sem espaços.
  const message = document.getElementById('message').value.trim(); //Obtém o valor do campo, sem espaços.
  const assunto = document.getElementById('assunto').value.trim(); //Obtém o valor do campo, sem espaços.

  //Verifica se os campos estão vazios
  if (name === "" || email === "" || message === "" || assunto === "") {
      showError(); //Chama a função 'showError'
  } else {
      showSuccess(); //Chama a função 'showSuccess'
  }
}

function showSuccess() {
  alert("Mensagem enviada"); //Exibi uma mensagem na tela
}

function showError() {
  alert("Por favor, preencha todos os campos."); //Exibi uma mensagem na tela
}