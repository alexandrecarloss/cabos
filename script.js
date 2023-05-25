// Objetivo: criar um sistema que receba as características de cabo do usuário e identifique quais cabos da lista atendem aos requisitos
function cabo() {
    //Função que é ativada ao clicar no botão verificar, ela deve receber as características e identificar o cabo.
    
    //Declaração de variáveis das características dadas pelo usuário
    var velocidade = parseFloat(document.getElementById("ivelocidade").value);
    var multiuso = document.querySelector('input[name="multiuso"]:checked').value;
    var distancia = parseFloat(document.getElementById("idistancia").value);
    var preco = parseFloat(document.getElementById("ipreco").value);
    var blindagem = document.querySelector('input[name="blindagem"]:checked').value;
    var cor = document.querySelector('input[name="cor"]:checked').value;
    var rigidez = document.querySelector('input[name="rigidez"]:checked').value;
    var espessura = parseFloat(document.getElementById("iespessura").value);

    //Vetor que vai conter as características
    var cabo = [8]; 

    //Lista dos tipos de cabo
   // var lista = ["USB", "Paralelo e Serial", "Monomodo", "Multimodo", "Traçado (STP)", "Traçado (UTP)", "Thicknet", "Thinnet"];

   //var lista = new Map();
   let lista = {
    "0": "USB",
    "1": "Paralelo e Serial",
    "2": "Monomodo",
    "3": "Multimodo",
    "4": "Traçado (STP)",
    "5": "Traçado (UTP)",
    "6": "Thicknet",
    "7": "Thinnet"
   }
    // lista.set("0", "USB");
    // lista.set("1", "Paralelo e Serial");
    // lista.set("2", "Monomodo");
    // lista.set("3", "Multimodo");
    // lista.set("4", "Traçado (STP)");
    // lista.set("5", "Traçado (UTP)");
    // lista.set("6", "Thicknet");
    // lista.set("7", "Thinnet");
    //delete lista[1];
    // for (let [key, value] of lista) {
    //    window.alert(key + " tem valor " + value);
    // }
    
    //Listas de cada cabo
    var usb = [480, "Multiuso", 2, 10, "Sem blindagem", cor, "Flexível", 0.8];
    var paralelo = [0.45, "Multiuso", 1.5, 5, "Sem blindagem", cor, "Flexível", 1.3];
    var monomodo = [40000, "Sem multiuso", 100000, 8, "Vidro", cor, "Flexível", 0.001];
    var multimodo = [100, "Sem multiuso", 2000, 7, "Vidro", cor, "Flexível", 0.0062];
    var tracadostp = [10000, "Sem multiuso", 100, 14, "Metal", cor, "Rígido", 0.7];
    var tracadoutp = [10000, "Sem multiuso", 100, 9, "Sem blindagem", cor, "Flexível", 0.5];
    var thicknet = [10, "Sem multiuso", 500, 13, "Metal", cor, "Rígido", 1];
    var thinnet = [10, "Sem multiuso", 185, 15, "Metal", cor, "Flexível", 0.64];

    

    //Substituição das variáveis nulas por 0
    if(isNaN(velocidade)) {
        velocidade = 0;
    }
    if(isNaN(distancia)) {
        distancia = 0;
    }
    if(isNaN(preco)) {
        preco = 0;
    }
    if(isNaN(espessura)) {
        espessura = 0;
    }
    
    //Atribuição das características para o vetor cabo
    cabo[0] = velocidade;
    cabo[1] = multiuso;
    cabo[2] = distancia;
    cabo[3] = preco;
    cabo[4] = blindagem;
    cabo[5] = cor;
    cabo[6] = rigidez;
    cabo[7] = espessura;

    //Verificação nível 1: velocidade
    if(cabo[0] > usb[0]) {
        delete lista[0];
    }
    if(cabo[0] > paralelo[0]) {
        delete lista[1];
    }
    if(cabo[0] > monomodo[0]) {
        delete lista[2];
    }
    if(cabo[0] > multimodo[0]) {
        delete lista[3];
    }
    if(cabo[0] > tracadostp[0]) {
        delete lista[4];
    }
    if(cabo[0] > tracadoutp[0]) {
        delete lista[5];
    }
    if(cabo[0] > thicknet[0]) {
        delete lista[6];
    }
    if(cabo[0] > thinnet[0]) {
        delete lista[7];
    }

    

    for (const key of Object.keys(lista)) {
        window.alert(key + ":" + lista[key])
    }
    
    
    window.alert(length(lista));
    
    


}