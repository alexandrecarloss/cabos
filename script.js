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
   var todososcabos = ["USB", "Paralelo e Serial", "Monomodo", "Multimodo", "Traçado (STP)", "Traçado (UTP)", "Thicknet", "Thinnet"];
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

   //Variáveis dos níveis de hierarquia
   var nivel1 = lista;
   var nivel2 = lista;
   var nivel3 = lista;
   var nivel4 = lista;
   var nivel5;
   var nivel6;
   var final;

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
        delete nivel1[0];
    }
    if(cabo[0] > paralelo[0]) {
        delete nivel1[1];
    }
    if(cabo[0] > monomodo[0]) {
        delete nivel1[2];
    }
    if(cabo[0] > multimodo[0]) {
        delete nivel1[3];
    }
    if(cabo[0] > tracadostp[0]) {
        delete nivel1[4];
    }
    if(cabo[0] > tracadoutp[0]) {
        delete nivel1[5];
    }
    if(cabo[0] > thicknet[0]) {
        delete nivel1[6];
    }
    if(cabo[0] > thinnet[0]) {
        delete nivel1[7];
    }

    //Verificação nível 2: multimodo
    if(cabo[1] == "Multiuso") {
        delete nivel2[2];
        delete nivel2[3];
        delete nivel2[4];
        delete nivel2[5];
        delete nivel2[6];
        delete nivel2[7];
    }

    //Verificação nível 3: distância
    if(cabo[2] > usb[2]) {
        delete nivel3[0];
    }
    if(cabo[2] > paralelo[2]) {
        delete nivel3[1];
    }
    if(cabo[2] > monomodo[2]) {
        delete nivel3[2];
    }
    if(cabo[2] > multimodo[2]) {
        delete nivel3[3];
    }
    if(cabo[2] > tracadostp[2]) {
        delete nivel3[4];
    }
    if(cabo[2] > tracadoutp[2]) {
        delete nivel3[5];
    }
    if(cabo[2] > thicknet[2]) {
        delete nivel3[6];
    }
    if(cabo[2] > thinnet[2]) {
        delete nivel3[7];
    }
    
    //Verificação nível 4: preço
    if(cabo[3] > usb[3]) {
        delete nivel4[0];
    }
    if(cabo[3] > paralelo[3]) {
        delete nivel4[1];
    }
    if(cabo[3] > monomodo[3]) {
        delete nivel4[2];
    }
    if(cabo[3] > multimodo[3]) {
        delete nivel4[3];
    }
    if(cabo[3] > tracadostp[3]) {
        delete nivel4[4];
    }
    if(cabo[3] > tracadoutp[3]) {
        delete nivel4[5];
    }
    if(cabo[3] > thicknet[3]) {
        delete nivel4[6];
    }
    if(cabo[3] > thinnet[3]) {
        delete nivel4[7];
    }

    //Verificação nível 5: Blindagem, cor
    if (cabo[4] == "metal") {  
        nivel5 = {
            "4": "Traçado (STP)",
            "6": "Thicknet",
            "7": "Thinnet"
        }     
    } 
    if (cabo[4] == "vidro") {
        nivel5 = {
            "2": "Monomodo",
            "3": "Multimodo"
        } 
    } 
    if (cabo[4] == "Sem blindagem") {
        nivel5 = {
            "0": "USB",
            "1": "Paralelo e Serial",
            "5": "Traçado (UTP)"
        }  
    }

    //Verificação nível 6: Rigidez
    if (cabo[6] == "Rígido") {
        nivel6 = {
            "4": "Traçado (STP)",
            "6": "Thicknet"
        }
    }
    if (cabo[6] == "Flexível") {
        nivel6 = {
            "0": "USB",
            "1": "Paralelo e Serial",
            "2": "Monomodo",
            "3": "Multimodo",
            "5": "Traçado (UTP)",
            "7": "Thinnet"
        }
    }
    
    //final = nivel1.get("0");

    final = [];
    for (const key of Object.keys(nivel1)) {
        if (final.indexOf(nivel1[key]) == -1) {
            final.push(nivel1[key]);
        }
    }

    if(final.length > 0) {
       todososcabos.forEach(function (item, indice, array) {
            if((final.indexOf(item) != -1) && (item == nivel2[indice])){
                
            };
        });
    }

    if(final.length > 0) {
        todososcabos.forEach(function (item, indice, array) {
             if((final.indexOf(item) != -1) && (item == nivel3[indice])){
                 window.alert("item " + item);
                 window.alert("indice " + indice);
             };
         });
     }
    
    //     }
    //     // window.alert("item " + item);
    //     // window.alert("indice " + indice);
    // });
    // for (const key of Object.keys(nivel2)) {
    //     window.alert(key + ":" + nivel2[key]);
    //     if ((final.indexOf(nivel2[key]) != -1) && (final.indexOf(nivel2[key]) != -1)) {
    //         final.splice(nivel2[key], 1);
    //     }
    //     // if (final.has(nivel2[key]) != -1) {
    //     //     final.push(nivel2[key]);
    //     // }
    // }

    window.alert(final);
    window.alert(typeof(final));
    // i = [1, "a"]
    // i.forEach(function (item, indice, array) {
    //     window.alert("item " + item);
    //     window.alert("indice " + indice);
    // });
    // window.alert(i.indexOf(0));

    // for (const key of Object.keys(nivel1)) {
    //     window.alert(key + ":" + nivel1[key])
    // }
    // for (const key of Object.keys(final)) {
    //     window.alert(key + ":" + final[key])
    // }

    
    //window.alert(nivel1.size);
    // var i = nivel1.has("1");
    // window.alert(i);
    
    
    
    

//comentário
}