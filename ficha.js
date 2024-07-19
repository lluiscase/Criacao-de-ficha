const showButton = document.querySelectorAll(".show")
const visible = document.querySelectorAll(".invisible")
const showFicha = document.querySelectorAll(".tribo")
const buttons = document.querySelectorAll("button");
const container = document.createElement("div")
const submit = document.createElement("button")
submit.setAttribute('id','submit')
const gerador = document.getElementById("gerador")
const pericia = document.getElementById("pericia")
const traco = document.getElementsByName('pericia');
let nacaoatual = 0

function randomizador(soma) {
    const result1 = Math.floor(Math.random() * 6) + 1;
    const result2 = Math.floor(Math.random() * 6) + 1;
    soma = result1 + result2
    console.log(result1, result2,soma); 
    return soma;
}

function calculoponto(e = 0){
    e += randomizador() * 6
    return e
}

function calculonacao(lista = [], e = 0) {
    let selectedValue = null;

    for (const tracos of traco) {
        if (tracos.checked) {
            selectedValue = parseInt(tracos.value);
            break;
        }
    }
    
    if (selectedValue !== null) {
        e += randomizador() * lista[selectedValue];
    }
    
    if (selectedValue !== null) {
        e += randomizador() * lista[selectedValue];
    }
    return e;
}

showButton.forEach(function(item,e){
    item.addEventListener('click',function(){
        if(visible[e].style.display === 'none'){
            visible[e].style.display = 'block'
            item.innerHTML = 'Menos'
        }else{
            visible[e].style.display = 'none'
            item.innerHTML = 'Leia mais'
        }
        
    })
})

submit.addEventListener("click",function(){

    var forca = document.getElementById("força").value
    var vida = document.getElementById("vida").value 
    var carga = (Number(vida) + Number(forca)) / 2;
    document.getElementById("info-vida").innerHTML = "Vida: \n" + vida
    document.getElementById("info-defesa").innerHTML = 'Defesa: \n' +document.getElementById("defesa").value
    document.getElementById("info-forca").innerHTML = 'Força: \n' + forca
    document.getElementById("info-nome").innerHTML = 'Nome: \n' +document.getElementById("nome").value
    document.getElementById("info-idade").innerHTML = 'Idade: \n' +document.getElementById("idade").value
    document.getElementById("info-carga").innerHTML = "Carga: \n" + carga

    document.getElementById("info-vida").innerHTML = "Vida: \n" + document.getElementById("vida").value
    document.getElementById("info-defesa").innerHTML = 'Defesa: \n' +document.getElementById("defesa").value
    document.getElementById("info-forca").innerHTML = 'Força: \n' +document.getElementById("força").value
    document.getElementById("info-nome").innerHTML = 'Nome: \n' +document.getElementById("nome").value
    document.getElementById("info-idade").innerHTML = 'Idade: \n' +document.getElementById("idade").value
    container.innerHTML = '';
})

showFicha.forEach(function(item){
    const nacaoid = item.id;
    item.addEventListener("click", function() {
        if(pericia.style.display === 'none'){
            if(nacaoid === "sangue"){
                if(nacaoid === "sangue"){
                    nacaoatual = 1

                    document.getElementById("info-nacao").innerHTML = "Igneo"
                    document.getElementById("info-tribo").innerHTML = "Tribo: Sangue"
                }
            }else if(nacaoid === "alma"){
                nacaoatual = 1

                document.getElementById("info-nacao").innerHTML = "Igneo"
                document.getElementById("info-tribo").innerHTML = "Tribo: Alma"
                
            }else if(nacaoid === "explo"){
                nacaoatual = 2

                document.getElementById("info-nacao").innerHTML = "Nômades"
                document.getElementById("info-tribo").innerHTML = "Tribo: Exploradores"
            }else if(nacaoid === "ban"){
                nacaoatual = 2

                document.getElementById("info-nacao").innerHTML = "Nômades"
                document.getElementById("info-tribo").innerHTML = "Tribo: Banidos"
                
            }else if(nacaoid === "arte"){
                nacaoatual = 3

                document.getElementById("info-nacao").innerHTML = "Áureo"
                document.getElementById("info-tribo").innerHTML = "Tribo: Arte"
                
            }else if(nacaoid === "auto"){
                nacaoatual = 3

                document.getElementById("info-nacao").innerHTML = "Áureo"
                document.getElementById("info-tribo").innerHTML = "Tribo: Automatas"
            }
            pericia.style.display = 'block'
            container.appendChild(submit)
            document.body.appendChild(container)
    }else{
        pericia.style.display = 'none'
        container.innerHTML = '';
    }
})
})

gerador.addEventListener("click",function(){
    let classAtual;
    let pontnac = []
    switch(nacaoatual){
        case 1:
            pontnac = [5,1,3,4,2,6]
            break
        case 2:
            pontnac = [4,6,4,6,3,3]
            break
        case 3:
            pontnac = [3,2,6,4,4,3]
            break
    }
    console.log(pontnac)
    for (let i = 0; i < traco.length; i++) {
        classAtual = traco[i]
        if (traco[i].checked) {
            let textpericia = document.createElement("p")
            textpericia.setAttribute("class","posficha")
            if(classAtual.classList.contains("nacao")){
                textpericia.innerHTML = traco[i].id + ":" + calculonacao(pontnac) + "%"
            }else{
                textpericia.innerHTML = traco[i].id + ":" + calculoponto() + "%"
            }
            document.body.appendChild(textpericia)
            traco[i].parentNode.removeChild(traco[i])
            break
        }
    }

})



        