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
    var espessura = document.querySelector('input[name="espessura"]:checked').value;

    //Vetor que vai conter as características
    var cabo = []; 

    //Lista dos tipos de cabo
   var lista = ["USB", "Paralelo e Serial", "Monomodo", "Multimodo", "Traçado (STP)", "Traçado (UTP)", "Thicknet", "Thinnet"];

   //Variáveis dos níveis de hierarquia
    var nivel1 = [];
    var nivel2 = [];
    var nivel3 = [];
    var nivel4 = [];
    var nivel5 = [];
    var nivel6 = [];
    var nivel7 = [];
    // Níveis de hierarquia primeiramente recebem todos os cabos da lista
   for (var i = 0; i <= 7; i++) {
        nivel1[i] = lista[i];
        nivel2[i] = lista[i];
        nivel3[i] = lista[i];
        nivel4[i] = lista[i];
        nivel5[i] = lista[i];
        nivel6[i] = lista[i];
        nivel7[i] = lista[i];
   }
   
   //Lista final, se tiver deve conter os cabos que passaram por todas as características
   var final = [];
    
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
    var usb = [480, "Multiuso", 2, 10, "Sem blindagem", cor, "Flexível", "Fino"];
    var paralelo = [0.45, "Multiuso", 1.5, 5, "Sem blindagem", cor, "Flexível", "Médio"];
    var monomodo = [40000, "Sem multiuso", 100000, 8, "Vidro", cor, "Flexível", "Fino"];
    var multimodo = [100, "Sem multiuso", 2000, 7, "Vidro", cor, "Flexível", "Fino"];
    var tracadostp = [10000, "Sem multiuso", 100, 14, "Metal", cor, "Rígido", "Fino"];
    var tracadoutp = [10000, "Sem multiuso", 100, 9, "Sem blindagem", cor, "Flexível", 0.5];
    var thicknet = [10, "Sem multiuso", 500, 13, "Metal", cor, "Rígido", "Médio"];
    var thinnet = [10, "Sem multiuso", 185, 15, "Metal", cor, "Flexível", "Fino"];

    //Substituição das variáveis de valor numérico nulas por 0
    if(isNaN(velocidade)) {
        velocidade = 0;
    }
    if(isNaN(distancia)) {
        distancia = 0;
    }
    if(isNaN(preco)) {
        preco = 0;
    }
    
    //Atribuição das características para o vetor cabo que vai ser usado para comparar com cada um dos cabos
    cabo[0] = velocidade;
    cabo[1] = multiuso;
    cabo[2] = distancia;
    cabo[3] = preco;
    cabo[4] = blindagem;
    cabo[5] = cor;
    cabo[6] = rigidez;
    cabo[7] = espessura;

    //Verificação nível 1: velocidade os que não atendem saem da lista nivel1 
    if(cabo[0] > usb[0]) {
        nivel1.splice(nivel1.indexOf("USB"), 1);
    }
    if(cabo[0] > paralelo[0]) {
        nivel1.splice(nivel1.indexOf("Paralelo e Serial"), 1);
    }
    if(cabo[0] > monomodo[0]) {
        nivel1.splice(nivel1.indexOf("Monomodo"), 1);
    }
    if(cabo[0] > multimodo[0]) {
        nivel1.splice(nivel1.indexOf("Multimodo"), 1);
    }
    if(cabo[0] > tracadostp[0]) {
        nivel1.splice(nivel1.indexOf("Traçado (STP)"), 1);
    }
    if(cabo[0] > tracadoutp[0]) {
        nivel1.splice(nivel1.indexOf("Traçado (UTP)"), 1);
    }
    if(cabo[0] > thicknet[0]) {
        nivel1.splice(nivel1.indexOf("Thicknet"), 1);
    }
    if(cabo[0] > thinnet[0]) {
        nivel1.splice(nivel1.indexOf("Thinnet"), 1);
    }

    //Verificação nível 2: multimodo
    if(cabo[1] == "Multiuso") {
        nivel2.splice(nivel2.indexOf("Monomodo"), 1);
        nivel2.splice(nivel2.indexOf("Multimodo"), 1);
        nivel2.splice(nivel2.indexOf("Traçado (STP)"), 1);
        nivel2.splice(nivel2.indexOf("Traçado (UTP)"), 1);
        nivel2.splice(nivel2.indexOf("Thicknet"), 1);
        nivel2.splice(nivel2.indexOf("Thinnet"), 1)
    }
    if (cabo[1] == "Sem multiuso") {
        nivel2.splice(nivel2.indexOf("USB"), 1);
        nivel2.splice(nivel2.indexOf("Paralelo e Serial"), 1);
    }
   
    //Verificação nível 3: distância
    if(cabo[2] > usb[2]) {
        nivel3.splice(nivel3.indexOf("USB"), 1);
    }
    if(cabo[2] > paralelo[2]) {
        nivel3.splice(nivel3.indexOf("Paralelo e Serial"), 1);
    }
    if(cabo[2] > monomodo[2]) {
        nivel3.splice(nivel3.indexOf("Monomodo"), 1);
    }
    if(cabo[2] > multimodo[2]) {
        nivel3.splice(nivel3.indexOf("Multimodo"), 1);
    }
    if(cabo[2] > tracadostp[2]) {
        nivel3.splice(nivel3.indexOf("Traçado (STP)"), 1);
    }
    if(cabo[2] > tracadoutp[2]) {
        nivel3.splice(nivel3.indexOf("Traçado (UTP)"), 1);
    }
    if(cabo[2] > thicknet[2]) {
        nivel3.splice(nivel3.indexOf("Thicknet"), 1);
    }
    if(cabo[2] > thinnet[2]) {
        nivel3.splice(nivel3.indexOf("Thinnet"), 1)
    }

    //Verificação nível 4: preço
    if(cabo[3] > usb[3]) {
        nivel4.splice(nivel4.indexOf("USB"), 1);
    }
    if(cabo[3] > paralelo[3]) {
        nivel4.splice(nivel4.indexOf("Paralelo e Serial"), 1);
    }
    if(cabo[3] > monomodo[3]) {
        nivel4.splice(nivel4.indexOf("Monomodo"), 1);
    }
    if(cabo[3] > multimodo[3]) {
        nivel4.splice(nivel4.indexOf("Multimodo"), 1);
    }
    if(cabo[3] > tracadostp[3]) {
        nivel4.splice(nivel4.indexOf("Traçado (STP)"), 1);
    }
    if(cabo[3] > tracadoutp[3]) {
        nivel4.splice(nivel4.indexOf("Traçado (UTP)"), 1);
    }
    if(cabo[3] > thicknet[3]) {
        nivel4.splice(nivel4.indexOf("Thicknet"), 1);
    }
    if(cabo[3] > thinnet[3]) {
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
        nivel5.splice(nivel5.indexOf("Thinnet"), 1)
    } 
    if (cabo[4] == "Sem blindagem") {
        nivel5.splice(nivel5.indexOf("Monomodo"), 1);
        nivel4.splice(nivel5.indexOf("Multimodo"), 1);
        nivel5.splice(nivel5.indexOf("Traçado (STP)"), 1);
        nivel5.splice(nivel5.indexOf("Thicknet"), 1);
        nivel5.splice(nivel5.indexOf("Thinnet"), 1)
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
    
    //Teste dos níveis
    // window.alert("1: " + nivel1);
    // window.alert("2: " + nivel2);
    // window.alert("3: " + nivel3);
    // window.alert("4: " + nivel4);
    // window.alert("5: " + nivel5);
    // window.alert("6: " + nivel6);
    // window.alert("7: " + nivel7);

    //Verificação dos cabos presentes em todos os níveis, se o índice for diferente de -1 em todos o valor é adicionado à lista final
    if(((nivel1.indexOf("USB")) != -1) && ((nivel2.indexOf("USB")) != -1) && ((nivel3.indexOf("USB")) != -1) && ((nivel4.indexOf("USB")) != -1) && ((nivel5.indexOf("USB")) != -1) && ((nivel6.indexOf("USB")) != -1) && ((nivel7.indexOf("USB")) != -1)) {
        final.push("USB");
    }
    if(((nivel1.indexOf("Paralelo e Serial")) != -1) && ((nivel2.indexOf("Paralelo e Serial")) != -1) && ((nivel3.indexOf("Paralelo e Serial")) != -1) && ((nivel4.indexOf("Paralelo e Serial")) != -1) && ((nivel5.indexOf("Paralelo e Serial")) != -1) && ((nivel6.indexOf("Paralelo e Serial")) != -1) && ((nivel7.indexOf("Paralelo e Serial")) != -1)) {
        final.push("Paralelo e Serial");
    }
    if(((nivel1.indexOf("Monomodo")) != -1) && ((nivel2.indexOf("Monomodo")) != -1) && ((nivel3.indexOf("Monomodo")) != -1) && ((nivel4.indexOf("Monomodo")) != -1) && ((nivel5.indexOf("Monomodo")) != -1) && ((nivel6.indexOf("Monomodo")) != -1) && ((nivel7.indexOf("Monomodo")) != -1)) {
        final.push("Monomodo");
    }
    if(((nivel1.indexOf("Multimodo")) != -1) && ((nivel2.indexOf("Multimodo")) != -1) && ((nivel3.indexOf("Multimodo")) != -1) && ((nivel4.indexOf("Multimodo")) != -1) && ((nivel5.indexOf("Multimodo")) != -1) && ((nivel6.indexOf("Multimodo")) != -1) && ((nivel7.indexOf("Multimodo")) != -1)) {
        final.push("Multimodo");
    }
    if(((nivel1.indexOf("Traçado (STP)")) != -1) && ((nivel2.indexOf("Traçado (STP)")) != -1) && ((nivel3.indexOf("Traçado (STP)")) != -1) && ((nivel4.indexOf("Traçado (STP)")) != -1) && ((nivel5.indexOf("Traçado (STP)")) != -1) && ((nivel6.indexOf("Traçado (STP)")) != -1) && ((nivel7.indexOf("Traçado (STP)")) != -1)) {
        final.push("Traçado (STP)");
    }
    if(((nivel1.indexOf("Traçado (UTP)")) != -1) && ((nivel2.indexOf("Traçado (UTP)")) != -1) && ((nivel3.indexOf("Traçado (UTP)")) != -1) && ((nivel4.indexOf("Traçado (UTP)")) != -1) && ((nivel5.indexOf("Traçado (UTP)")) != -1) && ((nivel6.indexOf("Traçado (UTP)")) != -1) && ((nivel7.indexOf("Traçado (UTP)")) != -1)) {
        final.push("Traçado (UTP)");
    }
    if(((nivel1.indexOf("Thicknet")) != -1) && ((nivel2.indexOf("Thicknet")) != -1) && ((nivel3.indexOf("Thicknet")) != -1) && ((nivel4.indexOf("Thicknet")) != -1) && ((nivel5.indexOf("Thicknet")) != -1) && ((nivel6.indexOf("Thicknet")) != -1) && ((nivel7.indexOf("Thicknet")) != -1)) {
        final.push("Thicknet");
    }
    if(((nivel1.indexOf("Thinnet")) != -1) && ((nivel2.indexOf("Thinnet")) != -1) && ((nivel3.indexOf("Thinnet")) != -1) && ((nivel4.indexOf("Thinnet")) != -1) && ((nivel5.indexOf("Thinnet")) != -1) && ((nivel6.indexOf("Thinnet")) != -1) && ((nivel7.indexOf("Thinnet")) != -1)) {
        final.push("Thinnet");
    }
    window.alert(final);
    // window.alert(nivel1.indexOf("USB"));
    // window.alert(nivel2.indexOf("USB"));
    // window.alert(nivel3.indexOf("USB"));
    // window.alert(nivel4.indexOf("USB"));
    // window.alert(nivel5.indexOf("USB"));
    // window.alert(nivel6.indexOf("USB"));
    // window.alert(nivel7.indexOf("USB"));


    //window.alert(typeof(nivel1));
    // i = [1, "a"]
    // i.forEach(function (item, indice, array) {
    //     window.alert("item " + item);
    //     window.alert("indice " + indice);
    // });
    // window.alert(i.indexOf(0));
}
