// Lado do select 1 dos herois
const escolhaLider = document.getElementById("escolha-Lider");
const escolhaCoLider = document.getElementById("escolha-CoLider");
const escolhaTanque = document.getElementById("escolha-Tanque");
const escolhaAtacante = document.getElementById("escolha-Atacante");
let button = document.getElementById("botao-Equipe-Herois");
const equipeHero = document.getElementById("equipe-hero");

// Chamando função para botão clicavel com finalidade de mostrar os herois

function MostrarEquipeHerois() {
  equipeHero.innerHTML += `<ul id="equipe-hero" class="lista-Herois">
        <li>Lider:  ${escolhaLider.value}
         <li>CoLíder:  ${escolhaCoLider.value}</li> <li>Tanque:  ${escolhaTanque.value}</li> 
         <li> Atacante:  ${escolhaAtacante.value}</li>
         <div class="button">
        <button id= "editar" onclick= "editar()"><img class="icones" src="/images/icones/botao-editar.png" alt=""></button>
      <button id= "excluir" onclick= "excluir()"><img class="icones" src="/images/icones/excluir.png" alt=""></button>
        <button id= "reset" onclick= "resetar()"><img class="icones" src="/images/icones/reiniciar.png" alt=""></button>
        </div>
      </ul>`;
}

//Mudança rápida para o botão reset

const reset = documentq.getElementById("reset");
reset.forEach((button) => {
  button.addEventListener("click", excluir);
});
function resetar() {
  equipeHero.innerHTML = "";
}
// Area para tornar os botões criados pelo DOM, botões clicáveis de maneira que dê para interagir de forma funcional

const editarButtons = document.getElementById("editar");
editarButtons.forEach((button) => {
  button.addEventListener("click", editar);
});

//Aqui é a parte de por lógica de como o botão de editar vai funcionar

function editar() {
  equipeHero.innerHTML += `    <div class="edit-herois">
      <button id="button-edit-herois-lider" class="button-edit-herois" onclick="editLider()">
        Alterar Lider
      </button>
      <button id="id="button-edit-herois-Colider"" class="button-edit-herois" onclick="editCoLider()">
        Alterar CoLider
      </button>
      <button id="id="button-edit-herois-atacante"" class="button-edit-herois" onclick="editAtacante()">
        Alterar Atacante
      </button>
      <button id="id="button-edit-herois-tanque"" class="button-edit-herois" onclick="editTanque()">
        Alterar Tanque
      </button>
    </div>`;
}

//Validando mais botões criados pelo DOM

const editarButtonsEquipeHeroisLider = document.getElementById(
  "button-edit-herois-lide"
);
editarButtonsEquipeHeroisLider.forEach((button) => {
  button.addEventListener("click", editar);
});
const editarButtonsEquipeHeroisCoLider = document.getElementById(
  "button-edit-herois-Colide"
);
editarButtonsEquipeHeroisCoLider.forEach((button) => {
  button.addEventListener("click", editar);
});
const editarButtonsEquipeHeroisAtacante = document.getElementById(
  "button-edit-herois-atacante"
);
editarButtonsEquipeHeroisAtacante.forEach((button) => {
  button.addEventListener("click", editar);
});
const editarButtonsEquipeHeroisTanque = document.getElementById(
  "button-edit-herois-tanque"
);
editarButtonsEquipeHeroisTanque.forEach((button) => {
  button.addEventListener("click", editar);
});

//Danto função aos botões

function editLider() {
  const lider = prompt("Digite o Líder:");
  equipeHero.innerHTML = `<ul id="equipe-hero" class="lista-Herois">
        <li>Lider:  ${lider}
         <li>CoLíder:  ${escolhaCoLider.value}</li> <li>Tanque:  ${escolhaTanque.value}</li> 
         <li> Atacante:  ${escolhaAtacante.value}</li>
        <button id= "editar" onclick= "editar()"><img class="icones" src="/images/icones/botao-editar.png" alt=""></button>
      <button id= "excluir" onclick= "excluir()"><img class="icones" src="/images/icones/excluir.png" alt=""></button>
        <button id= "reset" onclick= "resetar()"><img class="icones" src="/images/icones/reiniciar.png" alt=""></button>
        </div>
      </ul>`;
}
function editCoLider() {
  const CoLider = prompt("Digite o Co-Líder: ");
  equipeHero.innerHTML = `<ul id="equipe-hero" class="lista-Herois">
        <li>Lider:  ${escolhaLider.value}
         <li>CoLíder:  ${CoLider}</li> <li>Tanque:  ${escolhaTanque.value}</li> 
         <li> Atacante:  ${escolhaAtacante.value}</li>
         <div class="button">
        <button id= "editar" onclick= "editar()"><img class="icones" src="/images/icones/botao-editar.png" alt=""></button>
      <button id= "excluir" onclick= "excluir()"><img class="icones" src="/images/icones/excluir.png" alt=""></button>
        <button id= "reset" onclick= "resetar()"><img class="icones" src="/images/icones/reiniciar.png" alt=""></button>
        </div>
      </ul>`;
}
function editAtacante() {
  const Atacante = prompt("Digite o Atacante: ");
  equipeHero.innerHTML = `<ul id="equipe-hero" class="lista-Herois">
        <li>Lider:  ${escolhaLider.value}
         <li>CoLíder:  ${escolhaCoLider.value}</li> <li>Tanque:  ${Atacante}</li> 
         <li> Atacante:  ${escolhaAtacante.value}</li>
          <div class="button">
        <button id= "editar" onclick= "editar()"><img class="icones" src="/images/icones/botao-editar.png" alt=""></button>
      <button id= "excluir" onclick= "excluir()"><img class="icones" src="/images/icones/excluir.png" alt=""></button>
        <button id= "reset" onclick= "resetar()"><img class="icones" src="/images/icones/reiniciar.png" alt=""></button>
        </div>
      </ul>`;
}
function editTanque() {
  const Tanque = prompt("Digite o Tanque: ");
  equipeHero.innerHTML = `<ul id="equipe-hero" class="lista-Herois">
        <li>Lider:  ${escolhaLider.value}
         <li>CoLíder:  ${escolhaCoLider.value}</li> <li>Tanque:  ${Tanque}</li> 
         <li> Atacante:  ${escolhaAtacante.value}</li>
         <div class="button">
        <button id= "editar" onclick= "editar()"><img class="icones" src="/images/icones/botao-editar.png" alt=""></button>
      <button id= "excluir" onclick= "excluir()"><img class="icones" src="/images/icones/excluir.png" alt=""></button>
        <button id= "reset" onclick= "resetar()"><img class="icones" src="/images/icones/reiniciar.png" alt=""></button>
        </div>
      </ul>`;
}
//Aqui é par fazer o mesmo com o botão de deletar
const excluirButtons = document.getElementById("excluir");
excluirButtons.forEach((button) => {
  button.addEventListener("click", excluir);
});

function excluir() {
  equipeHero.innerHTML += `<div class="edit-herois">
  <button id="button-delet-herois-lider" class="button-edit-herois" onclick="deletLider()">
    Deletar Lider
  </button>
  <button id="button-delet-herois-Colider" class="button-edit-herois" onclick="deletCoLider()">
    Deletar CoLider
  </button>
  <button id="button-delet-herois-atacante" class="button-edit-herois" onclick="deletAtacante()">
    Deletar Atacante
  </button>
  <button id="button-delet-herois-tanque" class="button-edit-herois" onclick="deletTanque()">
    Deletar Tanque
  </button>
</div>`;
}
const buttondeletLider = document.getElementById("button-delet-herois-lider");
buttondeletLider.forEach((button) => {
  button.addEventListener("click", excluir);
});
function deletLider() {
  equipeHero.innerHTML = `<ul id="equipe-hero" class="lista-Herois">
        <li>Lider: 
         <li>CoLíder:  ${escolhaCoLider.value}</li> <li>Tanque:  ${escolhaTanque.value}</li> 
         <li> Atacante:  ${escolhaAtacante.value}</li>
   <div class="button">
        <button id= "editar" onclick= "editar()"><img class="icones" src="/images/icones/botao-editar.png" alt=""></button>
      <button id= "excluir" onclick= "excluir()"><img class="icones" src="/images/icones/excluir.png" alt=""></button>
        <button id= "reset" onclick= "resetar()"><img class="icones" src="/images/icones/reiniciar.png" alt=""></button>
        </div>
</ul>`;
}
const buttondeletCoLider = document.getElementById(
  "button-delet-herois-Colider"
);
buttondeletLider.forEach((button) => {
  button.addEventListener("click", excluir);
});
function deletCoLider() {
  equipeHero.innerHTML = `<ul id="equipe-hero" class="lista-Herois">
        <li>Lider:  ${escolhaLider.value}
         <li>CoLíder:  </li> <li>Tanque:  ${escolhaTanque.value}</li> 
         <li> Atacante:  ${escolhaAtacante.value}</li>
    <div class="button">
        <button id= "editar" onclick= "editar()"><img class="icones" src="/images/icones/botao-editar.png" alt=""></button>
      <button id= "excluir" onclick= "excluir()"><img class="icones" src="/images/icones/excluir.png" alt=""></button>
        <button id= "reset" onclick= "resetar()"><img class="icones" src="/images/icones/reiniciar.png" alt=""></button>
        </div>
</ul>`;
}
const buttondeletAtacante = document.getElementById(
  "button-delet-herois-atacante"
);
buttondeletAtacante.forEach((button) => {
  button.addEventListener("click", excluir);
});
function deletAtacante() {
  equipeHero.innerHTML = `<ul id="equipe-hero" class="lista-Herois">
        <li>Lider:  ${escolhaLider.value}
         <li>CoLíder:  ${escolhaCoLider.value}</li> <li>Tanque:  ${escolhaTanque.value}</li> 
         <li> Atacante:  </li>
    <div class="button">
        <button id= "editar" onclick= "editar()"><img class="icones" src="/images/icones/botao-editar.png" alt=""></button>
      <button id= "excluir" onclick= "excluir()"><img class="icones" src="/images/icones/excluir.png" alt=""></button>
        <button id= "reset" onclick= "resetar()"><img class="icones" src="/images/icones/reiniciar.png" alt=""></button>
        </div>
</ul>`;
}
const buttondeletTanque = document.getElementById("button-delet-herois-Tanque");
buttondeletTanque.forEach((button) => {
  button.addEventListener("click", excluir);
});
function deletTanque() {
  equipeHero.innerHTML = `<ul id="equipe-hero" class="lista-Herois">
        <li>Lider:  ${escolhaLider.value}
         <li>CoLíder:  ${escolhaCoLider.value}</li> <li>Tanque:  </li> 
         <li> Atacante:  ${escolhaAtacante.value}</li>
    <div class="button">
        <button id= "editar" onclick= "editar()"><img class="icones" src="/images/icones/botao-editar.png" alt=""></button>
      <button id= "excluir" onclick= "excluir()"><img class="icones" src="/images/icones/excluir.png" alt=""></button>
        <button id= "reset" onclick= "resetar()"><img class="icones" src="/images/icones/reiniciar.png" alt=""></button>
        </div>
</ul>`;
}
