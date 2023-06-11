const form = document.getElementById("form");
const vel = document.getElementById("velocidade");
const comp = document.getElementById("comprimento");
const prc = document.getElementById("preco");
const mult = document.getElementById("multiuso");
const blind = document.getElementById("blindagem");
const rig = document.getElementById("rigidez");
const esp = document.getElementById("espessura");
const cores = document.getElementById("cor");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();

  if (checkInputs()) {
    //Caso a validação dos dados retorne true, ele executa a função de busca dos cabos
    verificarCabo();
  }
});

//Faz a validação dos dados inputados
function checkInputs() {
  let velocidade = parseFloat(vel.value);
  let comprimento = parseFloat(comp.value);
  let preco = parseFloat(prc.value);
  let inputs = [];

  if (velocidade > 40000 || velocidade < 0) {
    setErrorFor(vel);
    inputs.push(0);
  } else {
    inputs.push(1);
    setSuccessFor(vel);
  }

  if (comprimento > 100000 || comprimento < 0) {
    inputs.push(0);
    setErrorFor(comp);
  } else {
    inputs.push(1);
    setSuccessFor(comp);
  }

  if (preco > 16 || preco < 5) {
    inputs.push(0);
    setErrorFor(prc);
  } else {
    inputs.push(1);
    setSuccessFor(prc);
  }

  const dataValid = inputs.every((el) => el === 1);

  return dataValid;
}

//Define uma classe de erro caso os dados inputados estejam incorretos
function setErrorFor(input) {
  const formTyped = input.parentElement;

  formTyped.className = "form-typed error";
}

//Define uma classe de sucesso caso os dados inputados estejam corretos
function setSuccessFor(input) {
  const formTyped = input.parentElement;

  formTyped.className = "form-typed success";
}

//Modal utilizada para exibir os resultados
function abrirModal(cabos) {
  const modal = document.getElementById("modal");
  const resultados = document.getElementById("resultados");
  modal.classList.add("abrir");

  function addElementos(obj) {
    let div = document.createElement("div");
    div.classList.add("result");

    let estrutura = `
      <h2 class = "result-title">${obj.cabo}<h2/>
      <img class = "result-img" src = "${obj.img}"/>
    `;

    div.innerHTML = estrutura;
    resultados.appendChild(div);
  }

  resultados.innerHTML = "";
  if (cabos == null) {
    resultados.innerHTML =
      "<div style='color: #f0f0f0'>Nenhum resultado encontrado :( <div/>";
  } else {
    cabos.map((item) => addElementos(item));
  }

  modal.addEventListener("click", (e) => {
    if (e.target.id == "fechar-modal" || e.target.id == "modal") {
      modal.classList.remove("abrir");
    }
  });
}

//lógica para encontrar o cabo

function verificarCabo() {
  let velocidade = parseInt(vel.value);
  let comprimento = parseFloat(comp.value);
  let preco = parseFloat(prc.value);
  let multiuso = mult.options[mult.selectedIndex].value;
  let blindagem = blind.options[blind.selectedIndex].value;
  let rigidez = rig.options[rig.selectedIndex].value;
  let espessura = esp.options[esp.selectedIndex].value;
  let cor = cores.options[cores.selectedIndex].value;

  let cabo = [];

  let lista = [
    "USB",
    "Paralelo e Serial",
    "Monomodo",
    "Multimodo",
    "Traçado (STP)",
    "Traçado (UTP)",
    "Thicknet",
    "Thinnet",
  ];

  //Variáveis dos níveis de hierarquia
  let nivel1 = [];
  let nivel2 = [];
  let nivel3 = [];
  let nivel4 = [];
  let nivel5 = [];
  let nivel6 = [];
  let nivel7 = [];
  // Níveis de hierarquia primeiramente recebem todos os cabos da lista
  for (let i = 0; i <= 7; i++) {
    nivel1[i] = lista[i];
    nivel2[i] = lista[i];
    nivel3[i] = lista[i];
    nivel4[i] = lista[i];
    nivel5[i] = lista[i];
    nivel6[i] = lista[i];
    nivel7[i] = lista[i];
  }

  //Lista final, se tiver deve conter os cabos que passaram por todas as características
  let final = [];

  /*Listas de cada cabo com suas características na ordem
   Velocidade 
   Multiuso
   Comprimento
   Preço
   Blindagem
   cor: a cor não é calculada, pois o cabo assume qualquer cor que o usuário escolher
   Rigidez
   Espessura
    */
  let usb = [480, "Multiuso", 2, 10, "Sem blindagem", cor, "Flexível", "Fino"];

  let thicknet = [10, "Sem multiuso", 500, 13, "Metal", cor, "Rígido", "Médio"];

  let thinnet = [10, "Sem multiuso", 185, 15, "Metal", cor, "Flexível", "Fino"];

  let paralelo = [
    0.45,
    "Multiuso",
    1.5,
    5,
    "Sem blindagem",
    cor,
    "Flexível",
    "Médio",
  ];

  let monomodo = [
    40000,
    "Sem multiuso",
    100000,
    8,
    "Vidro",
    cor,
    "Flexível",
    "Fino",
  ];

  let multimodo = [
    100,
    "Sem multiuso",
    2000,
    7,
    "Vidro",
    cor,
    "Flexível",
    "Fino",
  ];

  let tracadostp = [
    10000,
    "Sem multiuso",
    100,
    14,
    "Metal",
    cor,
    "Rígido",
    "Fino",
  ];

  let tracadoutp = [
    10000,
    "Sem multiuso",
    100,
    9,
    "Sem blindagem",
    cor,
    "Flexível",
    0.5,
  ];

  //Substituição das variáveis de valor numérico nulas por 0
  if (isNaN(velocidade)) {
    velocidade = 0;
  }
  if (isNaN(comprimento)) {
    comprimento = 0;
  }
  if (isNaN(preco)) {
    preco = 0;
  }

  //Atribuição das características para o vetor cabo que vai ser usado para comparar com cada um dos cabos
  cabo[0] = velocidade;
  cabo[1] = multiuso;
  cabo[2] = comprimento;
  cabo[3] = preco;
  cabo[4] = blindagem;
  cabo[5] = cor;
  cabo[6] = rigidez;
  cabo[7] = espessura;

  //Verificação nível 1: velocidade os que não atendem saem da lista nivel1
  if (cabo[0] > usb[0]) {
    nivel1.splice(nivel1.indexOf("USB"), 1);
  }
  if (cabo[0] > paralelo[0]) {
    nivel1.splice(nivel1.indexOf("Paralelo e Serial"), 1);
  }
  if (cabo[0] > monomodo[0]) {
    nivel1.splice(nivel1.indexOf("Monomodo"), 1);
  }
  if (cabo[0] > multimodo[0]) {
    nivel1.splice(nivel1.indexOf("Multimodo"), 1);
  }
  if (cabo[0] > tracadostp[0]) {
    nivel1.splice(nivel1.indexOf("Traçado (STP)"), 1);
  }
  if (cabo[0] > tracadoutp[0]) {
    nivel1.splice(nivel1.indexOf("Traçado (UTP)"), 1);
  }
  if (cabo[0] > thicknet[0]) {
    nivel1.splice(nivel1.indexOf("Thicknet"), 1);
  }
  if (cabo[0] > thinnet[0]) {
    nivel1.splice(nivel1.indexOf("Thinnet"), 1);
  }

  //Verificação nível 2: multimodo
  if (cabo[1] == "Multiuso") {
    nivel2.splice(nivel2.indexOf("Monomodo"), 1);
    nivel2.splice(nivel2.indexOf("Multimodo"), 1);
    nivel2.splice(nivel2.indexOf("Traçado (STP)"), 1);
    nivel2.splice(nivel2.indexOf("Traçado (UTP)"), 1);
    nivel2.splice(nivel2.indexOf("Thicknet"), 1);
    nivel2.splice(nivel2.indexOf("Thinnet"), 1);
  }
  if (cabo[1] == "Sem multiuso") {
    nivel2.splice(nivel2.indexOf("USB"), 1);
    nivel2.splice(nivel2.indexOf("Paralelo e Serial"), 1);
  }

  //Verificação nível 3: distância
  if (cabo[2] > usb[2]) {
    nivel3.splice(nivel3.indexOf("USB"), 1);
  }
  if (cabo[2] > paralelo[2]) {
    nivel3.splice(nivel3.indexOf("Paralelo e Serial"), 1);
  }
  if (cabo[2] > monomodo[2]) {
    nivel3.splice(nivel3.indexOf("Monomodo"), 1);
  }
  if (cabo[2] > multimodo[2]) {
    nivel3.splice(nivel3.indexOf("Multimodo"), 1);
  }
  if (cabo[2] > tracadostp[2]) {
    nivel3.splice(nivel3.indexOf("Traçado (STP)"), 1);
  }
  if (cabo[2] > tracadoutp[2]) {
    nivel3.splice(nivel3.indexOf("Traçado (UTP)"), 1);
  }
  if (cabo[2] > thicknet[2]) {
    nivel3.splice(nivel3.indexOf("Thicknet"), 1);
  }
  if (cabo[2] > thinnet[2]) {
    nivel3.splice(nivel3.indexOf("Thinnet"), 1);
  }

  //Verificação nível 4: preço
  if (cabo[3] > usb[3]) {
    nivel4.splice(nivel4.indexOf("USB"), 1);
  }
  if (cabo[3] > paralelo[3]) {
    nivel4.splice(nivel4.indexOf("Paralelo e Serial"), 1);
  }
  if (cabo[3] > monomodo[3]) {
    nivel4.splice(nivel4.indexOf("Monomodo"), 1);
  }
  if (cabo[3] > multimodo[3]) {
    nivel4.splice(nivel4.indexOf("Multimodo"), 1);
  }
  if (cabo[3] > tracadostp[3]) {
    nivel4.splice(nivel4.indexOf("Traçado (STP)"), 1);
  }
  if (cabo[3] > tracadoutp[3]) {
    nivel4.splice(nivel4.indexOf("Traçado (UTP)"), 1);
  }
  if (cabo[3] > thicknet[3]) {
    nivel4.splice(nivel4.indexOf("Thicknet"), 1);
  }
  if (cabo[3] > thinnet[3]) {
    nivel4.splice(nivel4.indexOf("Thinnet"), 1);
  }

  //Verificação nível 5: Blindagem, cor
  if (cabo[4] == "metal") {
    nivel5.splice(nivel5.indexOf("USB"), 1);
    nivel5.splice(nivel5.indexOf("Paralelo e Serial"), 1);
    nivel5.splice(nivel5.indexOf("Monomodo"), 1);
    nivel5.splice(nivel5.indexOf("Multimodo"), 1);
    nivel5.splice(nivel5.indexOf("Traçado (UTP)"), 1);
  }
  if (cabo[4] == "vidro") {
    nivel5.splice(nivel5.indexOf("USB"), 1);
    nivel5.splice(nivel5.indexOf("Paralelo e Serial"), 1);
    nivel5.splice(nivel5.indexOf("Traçado (STP)"), 1);
    nivel5.splice(nivel5.indexOf("Traçado (UTP)"), 1);
    nivel5.splice(nivel5.indexOf("Thicknet"), 1);
    nivel5.splice(nivel5.indexOf("Thinnet"), 1);
  }
  if (cabo[4] == "Sem blindagem") {
    nivel5.splice(nivel5.indexOf("Monomodo"), 1);
    nivel4.splice(nivel5.indexOf("Multimodo"), 1);
    nivel5.splice(nivel5.indexOf("Traçado (STP)"), 1);
    nivel5.splice(nivel5.indexOf("Thicknet"), 1);
    nivel5.splice(nivel5.indexOf("Thinnet"), 1);
  }

  //Verificação nível 6: Rigidez
  if (cabo[6] == "Rígido") {
    nivel6.splice(nivel6.indexOf("USB"), 1);
    nivel6.splice(nivel6.indexOf("Paralelo e Serial"), 1);
    nivel6.splice(nivel6.indexOf("Monomodo"), 1);
    nivel6.splice(nivel6.indexOf("Multimodo"), 1);
    nivel6.splice(nivel6.indexOf("Traçado (UTP)"), 1);
    nivel6.splice(nivel6.indexOf("Thinnet"), 1);
  }
  if (cabo[6] == "Flexível") {
    nivel6.splice(nivel6.indexOf("Traçado (STP)"), 1);
    nivel6.splice(nivel6.indexOf("Thicknet"), 1);
  }

  if (cabo[7] == "Fino") {
    nivel7.splice(nivel7.indexOf("Paralelo e Serial"), 1);
    nivel7.splice(nivel7.indexOf("Thicknet"), 1);
  }
  if (cabo[7] == "Médio") {
    nivel7.splice(nivel7.indexOf("USB"), 1);
    nivel7.splice(nivel7.indexOf("Monomodo"), 1);
    nivel7.splice(nivel7.indexOf("Multimodo"), 1);
    nivel7.splice(nivel7.indexOf("Traçado (UTP)"), 1);
    nivel7.splice(nivel7.indexOf("Traçado (STP)"), 1);
    nivel7.splice(nivel7.indexOf("Thinnet"), 1);
  }

  //Verificação dos cabos presentes em todos os níveis, se o índice for diferente de -1 em todos o valor é adicionado à lista final
  if (
    nivel1.indexOf("USB") != -1 &&
    nivel2.indexOf("USB") != -1 &&
    nivel3.indexOf("USB") != -1 &&
    nivel4.indexOf("USB") != -1 &&
    nivel5.indexOf("USB") != -1 &&
    nivel6.indexOf("USB") != -1 &&
    nivel7.indexOf("USB") != -1
  ) {
    final.push({
      cabo: "USB",
      img: "imgs/cabo-usb.jpg",
    });
  }
  if (
    nivel1.indexOf("Paralelo e Serial") != -1 &&
    nivel2.indexOf("Paralelo e Serial") != -1 &&
    nivel3.indexOf("Paralelo e Serial") != -1 &&
    nivel4.indexOf("Paralelo e Serial") != -1 &&
    nivel5.indexOf("Paralelo e Serial") != -1 &&
    nivel6.indexOf("Paralelo e Serial") != -1 &&
    nivel7.indexOf("Paralelo e Serial") != -1
  ) {
    final.push({
      cabo: "Paralelo e Serial",
      img: "imgs/cabo-paralelo.jpg",
    });
  }
  if (
    nivel1.indexOf("Monomodo") != -1 &&
    nivel2.indexOf("Monomodo") != -1 &&
    nivel3.indexOf("Monomodo") != -1 &&
    nivel4.indexOf("Monomodo") != -1 &&
    nivel5.indexOf("Monomodo") != -1 &&
    nivel6.indexOf("Monomodo") != -1 &&
    nivel7.indexOf("Monomodo") != -1
  ) {
    final.push({
      cabo: "Monomodo",
      img: "imgs/cabo-monomodo.jpg",
    });
  }
  if (
    nivel1.indexOf("Multimodo") != -1 &&
    nivel2.indexOf("Multimodo") != -1 &&
    nivel3.indexOf("Multimodo") != -1 &&
    nivel4.indexOf("Multimodo") != -1 &&
    nivel5.indexOf("Multimodo") != -1 &&
    nivel6.indexOf("Multimodo") != -1 &&
    nivel7.indexOf("Multimodo") != -1
  ) {
    final.push({
      cabo: "Multimodo",
      img: "imgs/cabo-multimodo.jpg",
    });
  }
  if (
    nivel1.indexOf("Traçado (STP)") != -1 &&
    nivel2.indexOf("Traçado (STP)") != -1 &&
    nivel3.indexOf("Traçado (STP)") != -1 &&
    nivel4.indexOf("Traçado (STP)") != -1 &&
    nivel5.indexOf("Traçado (STP)") != -1 &&
    nivel6.indexOf("Traçado (STP)") != -1 &&
    nivel7.indexOf("Traçado (STP)") != -1
  ) {
    final.push({
      cabo: "Trançado (STP)",
      img: "imgs/cabo-trançado-stp.jpg",
    });
  }
  if (
    nivel1.indexOf("Traçado (UTP)") != -1 &&
    nivel2.indexOf("Traçado (UTP)") != -1 &&
    nivel3.indexOf("Traçado (UTP)") != -1 &&
    nivel4.indexOf("Traçado (UTP)") != -1 &&
    nivel5.indexOf("Traçado (UTP)") != -1 &&
    nivel6.indexOf("Traçado (UTP)") != -1 &&
    nivel7.indexOf("Traçado (UTP)") != -1
  ) {
    final.push({
      cabo: "Trançado (UTP)",
      img: "imgs/cabo-trançado-utp.jpg",
    });
  }
  if (
    nivel1.indexOf("Thicknet") != -1 &&
    nivel2.indexOf("Thicknet") != -1 &&
    nivel3.indexOf("Thicknet") != -1 &&
    nivel4.indexOf("Thicknet") != -1 &&
    nivel5.indexOf("Thicknet") != -1 &&
    nivel6.indexOf("Thicknet") != -1 &&
    nivel7.indexOf("Thicknet") != -1
  ) {
    final.push({
      cabo: "Thicknet",
      img: "imgs/cabo-thicknet.jpg",
    });
  }
  if (
    nivel1.indexOf("Thinnet") != -1 &&
    nivel2.indexOf("Thinnet") != -1 &&
    nivel3.indexOf("Thinnet") != -1 &&
    nivel4.indexOf("Thinnet") != -1 &&
    nivel5.indexOf("Thinnet") != -1 &&
    nivel6.indexOf("Thinnet") != -1 &&
    nivel7.indexOf("Thinnet") != -1
  ) {
    final.push({
      cabo: "Thinnet",
      img: "imgs/cabo-thinnet.jpg",
    });
  }

  //Alerta com o possível cabo formado pelas características
  if (final.length == 0) {
    abrirModal(null);
  } else if (final.length >= 1) {
    abrirModal(final);
  }
}
