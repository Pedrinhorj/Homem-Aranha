// Apresentação de constantes dos vilões
const VilaoLider = document.getElementById("Vilao-Lider");
const vilaoCoLider = document.getElementById("Vilao-CoLider");
const vilaoAtacante = document.getElementById("Vilao-Atacante");
const vilaoTanque = document.getElementById("Vilao-Tanque");
let BotaoEquipeViloes = document.getElementById("botao-Equipe-Viloes");
const equipeViloes = document.getElementById("equipeViloes");

//Area da equipe de vilões

function MostrarEquipeViloes() {
  equipeViloes.innerHTML += ` <li>
          <ul id="equipeViloes">
         <li>Líder: ${VilaoLider.value} </li>
        <li>Colider: ${vilaoCoLider.value} </li>
         <li> Atacante: ${vilaoAtacante.value} </li> 
         <li> Tanque: ${vilaoTanque.value} </li>
         <div class = "div-viloes-buttons">
         <button id= "vilao-edit" onclick= "EditarEquipesViloes()"><img src="/images/icones/botao-editar.png" alt="" class="icones"></button>
         <button id= "vilao-delet"  onclick= "DeletarEquipesViloes()"><img src="/images/icones/excluir.png" alt="" class="icones"></button>
         <button id= "vilao-reset" onclick= "resetarvilao()"><img src="/images/icones/reiniciar.png" alt="" class="icones"></button>
         </div>
         </ul>
        </li>
        `;
}

//mudança rápida para criação de um botão de reset

const resetvilao = document.querySelectorAll("vilao-reset");
resetvilao.forEach((button) => {
  button.addEventListener("click", excluir);
});

function resetarvilao() {
  equipeViloes.innerHTML = "";
}

const editarButtonViloes = document.querySelectorAll("vilao-edit");
editarButtonViloes.forEach((button) => {
  button.addEventListener("click", editar);
});

function EditarEquipesViloes() {
  equipeViloes.innerHTML += ` <div class="edit-herois">
        <button id="button-edit-Vilao-lider" class="button-edit-herois" onclick="editLiderVilao()">
          Alterar Lider
        </button>
        <button id="button-edit-Vilao-Colider" class="button-edit-herois" onclick="editCoLiderVilao()">
          Alterar CoLider
        </button>
        <button id="button-edit-Vilao-atacante" class="button-edit-herois" onclick="editAtacanteVilao()">
          Alterar Atacante
        </button>
        <button id="button-edit-Vilao-tanque" class="button-edit-herois" onclick="editTanqueVilao()">
          Alterar Tanque
        </button>
      </div>`;
}

//Validando e aplicando função nos botões do DOM

//Area de edição

const buttoneditVilaoLider = document.querySelectorAll(
  "button-edit-Vilao-lider"
);
buttoneditVilaoLider.forEach((button) => {
  button.addEventListener("click", editar);
});

function editLiderVilao() {
  const lider = prompt("Digite o líder:");
  equipeViloes.innerHTML = `  <li>
          <ul id="equipeViloes">
         <li>Líder: ${lider} </li>
        <li>Colider: ${vilaoCoLider.value} </li>
         <li> Atacante: ${vilaoAtacante.value} </li> 
         <li> Tanque: ${vilaoTanque.value} </li>
         <div class = "div-viloes-buttons">
         <button id= "vilao-edit" onclick= "EditarEquipesViloes()"><img src="/images/icones/botao-editar.png" alt="" class="icones"></button>
         <button id= "vilao-delet"  onclick= "DeletarEquipesViloes()"><img src="/images/icones/excluir.png" alt="" class="icones"></button>
         <button id= "vilao-reset" onclick= "resetarvilao()"><img src="/images/icones/reiniciar.png" alt="" class="icones"></button>
         </div>
         </ul>
        </li>
        `;
}

const buttoneditVilaoCoLider = document.querySelectorAll(
  "button-edit-Vilao-CoLider"
);
buttoneditVilaoCoLider.forEach((button) => {
  button.addEventListener("click", editar);
});

function editCoLiderVilao() {
  const CoLider = prompt("Digite o CoLider");
  equipeViloes.innerHTML = `  <li>
          <ul id="equipeViloes">
         <li>Líder: ${VilaoLider.value} </li>
        <li>Colider: ${CoLider} </li>
         <li> Atacante: ${vilaoAtacante.value} </li> 
         <li> Tanque: ${vilaoTanque.value} </li>
         <div class = "div-viloes-buttons">
         <button id= "vilao-edit" onclick= "EditarEquipesViloes()"><img src="/images/icones/botao-editar.png" alt="" class="icones"></button>
         <button id= "vilao-delet"  onclick= "DeletarEquipesViloes()"><img src="/images/icones/excluir.png" alt="" class="icones"></button>
         <button id= "vilao-reset" onclick= "resetarvilao()"><img src="/images/icones/reiniciar.png" alt="" class="icones"></button>
         </div>
         </ul>
        </li>
        `;
}

const buttoneditVilaoAtacante = document.querySelectorAll(
  "button-edit-Vilao-atacante"
);
buttoneditVilaoAtacante.forEach((button) => {
  button.addEventListener("click", editar);
});
function editAtacanteVilao() {
  const Atacante = prompt("Digite o Atacante");
  equipeViloes.innerHTML = `  <li>
          <ul id="equipeViloes">
         <li>Líder: ${VilaoLider.value} </li>
        <li>Colider: ${vilaoCoLider.value} </li>
         <li> Atacante: ${Atacante} </li> 
         <li> Tanque: ${vilaoTanque.value} </li>
         <div class = "div-viloes-buttons">
         <button id= "vilao-edit" onclick= "EditarEquipesViloes()"><img src="/images/icones/botao-editar.png" alt="" class="icones"></button>
         <button id= "vilao-delet"  onclick= "DeletarEquipesViloes()"><img src="/images/icones/excluir.png" alt="" class="icones"></button>
         <button id= "vilao-reset" onclick= "resetarvilao()"><img src="/images/icones/reiniciar.png" alt="" class="icones"></button>
         </div>
         </ul>
        </li>
        `;
}
const buttoneditVilaoTanque = document.querySelectorAll(
  "button-edit-Vilao-tanque"
);
buttoneditVilaoTanque.forEach((button) => {
  button.addEventListener("click", editar);
});

function editTanqueVilao() {
  const Tanque = prompt("Digite o Tanque");
  equipeViloes.innerHTML = `  <li>
          <ul id="equipeViloes">
         <li>Líder: ${VilaoLider.value} </li>
        <li>Colider: ${vilaoCoLider.value} </li>
         <li> Atacante: ${vilaoAtacante.value} </li> 
         <li> Tanque: ${Tanque} </li>
         <div class = "div-viloes-buttons">
         <button id= "vilao-edit" onclick= "EditarEquipesViloes()"><img src="/images/icones/botao-editar.png" alt="" class="icones"></button>
         <button id= "vilao-delet"  onclick= "DeletarEquipesViloes()"><img src="/images/icones/excluir.png" alt="" class="icones"></button>
         <button id= "vilao-reset" onclick= "resetarvilao()"><img src="/images/icones/reiniciar.png" alt="" class="icones"></button>
         </div>
         </ul>
        </li>
        `;
}

//area de botões de delete

const vilaodelet = document.querySelectorAll("vilao-delet");
vilaodelet.forEach((button) => {
  button.addEventListener("click", excluir);
});

function DeletarEquipesViloes() {
  equipeViloes.innerHTML += ` <div class="edit-herois">
  <button id="button-delet-Vilao-lider" class="button-edit-herois" onclick="deletLiderVilao()">
    Deletar Lider
  </button>
  <button id="button-delet-Vilao-Colider" class="button-edit-herois" onclick="deletCoLiderVilao()">
    Deletar CoLider
  </button>
  <button id="button-delet-Vilao-atacante" class="button-edit-herois" onclick="deletAtacanteVilao()">
    Deletar Atacante
  </button>
  <button id="button-delet-Vilao-tanque" class="button-edit-herois" onclick="deletTanqueVilao()">
    Deletar Tanque
  </button>
</div>`;
}
//deletar vilão líder
let buttondeletLiderVilao = document.querySelectorAll(
  "button-delet-Vilao-lider"
);
buttondeletLiderVilao.forEach((button) => {
  button.addEventListener("click", deletLiderVilao);
});

function deletLiderVilao() {
  equipeViloes.innerHTML = `  <li>
          <ul id="equipeViloes">
         <li>Líder:                        </li>
        <li>Colider: ${vilaoCoLider.value} </li>
         <li> Atacante: ${vilaoAtacante.value} </li> 
         <li> Tanque: ${vilaoTanque.value} </li>
         <div class = "div-viloes-buttons">
         <button id= "vilao-edit" onclick= "EditarEquipesViloes()"><img src="/images/icones/botao-editar.png" alt="" class="icones"></button>
         <button id= "vilao-delet"  onclick= "DeletarEquipesViloes()"><img src="/images/icones/excluir.png" alt="" class="icones"></button>
         <button id= "vilao-reset" onclick= "resetarvilao()"><img src="/images/icones/reiniciar.png" alt="" class="icones"></button>
         </div>
         </ul>
        </li>
`;
}

//deletar Colídeer

let buttondeletCoLiderVilao = document.querySelectorAll(
  "button-delet-Vilao-Colider"
);
buttondeletCoLiderVilao.forEach((button) => {
  button.addEventListener("click", excluir);
});

function deletCoLiderVilao() {
  equipeViloes.innerHTML = `  <li>
          <ul id="equipeViloes">
         <li>Líder: ${VilaoLider.value} </li>
        <li>Colider:                    </li>
         <li> Atacante: ${vilaoAtacante.value} </li> 
         <li> Tanque: ${vilaoTanque.value} </li>
         <div class = "div-viloes-buttons">
         <button id= "vilao-edit" onclick= "EditarEquipesViloes()"><img src="/images/icones/botao-editar.png" alt="" class="icones"></button>
         <button id= "vilao-delet"  onclick= "DeletarEquipesViloes()"><img src="/images/icones/excluir.png" alt="" class="icones"></button>
         <button id= "vilao-reset" onclick= "resetarvilao()"><img src="/images/icones/reiniciar.png" alt="" class="icones"></button>
         </div>
         </ul>
        </li>
`;
}
let buttondeletAtacanteVilao = document.querySelectorAll(
  "button-delet-Vilao-atacante"
);
buttondeletAtacanteVilao.forEach((button) => {
  button.addEventListener("click", excluir);
});

function deletAtacanteVilao() {
  equipeViloes.innerHTML = `  <li>
          <ul id="equipeViloes">
         <li>Líder: ${VilaoLider.value} </li>
        <li>Colider: ${vilaoCoLider.value} </li>
         <li> Atacante:                    </li> 
         <li> Tanque: ${vilaoTanque.value} </li>
         <div class = "div-viloes-buttons">
         <button id= "vilao-edit" onclick= "EditarEquipesViloes()"><img src="/images/icones/botao-editar.png" alt="" class="icones"></button>
         <button id= "vilao-delet"  onclick= "DeletarEquipesViloes()"><img src="/images/icones/excluir.png" alt="" class="icones"></button>
         <button id= "vilao-reset" onclick= "resetarvilao()"><img src="/images/icones/reiniciar.png" alt="" class="icones"></button>
         </div>
         </ul>
        </li>
</li>
`;
}
let buttondeletTanqueVilao = document.querySelectorAll(
  "button-delet-Vilao-tanque"
);
buttondeletTanqueVilao.forEach((button) => {
  button.addEventListener("click", excluir);
});

function deletTanqueVilao() {
  equipeViloes.innerHTML = `  <li>
          <ul id="equipeViloes">
         <li>Líder: ${VilaoLider.value} </li>
        <li>Colider: ${vilaoCoLider.value} </li>
         <li> Atacante: ${vilaoAtacante.value} </li> 
         <li> Tanque:                          </li>
         <div class = "div-viloes-buttons">
         <button id= "vilao-edit" onclick= "EditarEquipesViloes()"><img src="/images/icones/botao-editar.png" alt="" class="icones"></button>
         <button id= "vilao-delet"  onclick= "DeletarEquipesViloes()"><img src="/images/icones/excluir.png" alt="" class="icones"></button>
         <button id= "vilao-reset" onclick= "resetarvilao()"><img src="/images/icones/reiniciar.png" alt="" class="icones"></button>
         </div>
         </ul>
        </li>
`;
}
