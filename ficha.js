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
<<<<<<< HEAD
    
=======

>>>>>>> 349fbfb6285a2fc0778919f1e5e72f455824492e
    for (const tracos of traco) {
        if (tracos.checked) {
            selectedValue = parseInt(tracos.value);
            break;
        }
    }
<<<<<<< HEAD
    
    if (selectedValue !== null) {
        e += randomizador() * lista[selectedValue];
    }
    
=======

    if (selectedValue !== null) {
        e += randomizador() * lista[selectedValue];
    }

>>>>>>> 349fbfb6285a2fc0778919f1e5e72f455824492e
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
<<<<<<< HEAD
    var forca = document.getElementById("força").value
    var vida = document.getElementById("vida").value 
    var carga = (Number(vida) + Number(forca)) / 2;
    document.getElementById("info-vida").innerHTML = "Vida: \n" + vida
    document.getElementById("info-defesa").innerHTML = 'Defesa: \n' +document.getElementById("defesa").value
    document.getElementById("info-forca").innerHTML = 'Força: \n' + forca
    document.getElementById("info-nome").innerHTML = 'Nome: \n' +document.getElementById("nome").value
    document.getElementById("info-idade").innerHTML = 'Idade: \n' +document.getElementById("idade").value
    document.getElementById("info-carga").innerHTML = "Carga: \n" + carga
    

=======
    document.getElementById("info-vida").innerHTML = "Vida: \n" + document.getElementById("vida").value
    document.getElementById("info-defesa").innerHTML = 'Defesa: \n' +document.getElementById("defesa").value
    document.getElementById("info-forca").innerHTML = 'Força: \n' +document.getElementById("força").value
    document.getElementById("info-nome").innerHTML = 'Nome: \n' +document.getElementById("nome").value
    document.getElementById("info-idade").innerHTML = 'Idade: \n' +document.getElementById("idade").value
    
>>>>>>> 349fbfb6285a2fc0778919f1e5e72f455824492e
    container.innerHTML = '';
})

showFicha.forEach(function(item){
    const nacaoid = item.id;
    item.addEventListener("click", function() {
        if(pericia.style.display === 'none'){
            if(nacaoid === "sangue"){
                if(nacaoid === "sangue"){
                    nacaoatual = 1
<<<<<<< HEAD
=======
                    /*let title = document.createElement("h3")
                    let sangue = document.createTextNode("Sistema de sangue")
                    title.classList.add('box');
                    title.appendChild(sangue)
                    
                    var bene = document.createElement("P");
                    var sistemabene = document.createTextNode("Passiva: regenera 2 pontos de vida entre combates, sangramentos não causam efeito");
                    var puni = document.createElement("P");
                    var sistemapuni = document.createTextNode("Punições: Ambientes gelados podem te matar");
                    puni.appendChild(sistemapuni);
                    puni.classList.add('box');
                    bene.appendChild(sistemabene);
                    bene.classList.add('box');
                    
                    let defesa = document.createElement("INPUT");
                    defesa.setAttribute("type", "radio");
                    defesa.setAttribute("name", "sangue");
                    defesa.setAttribute("value", "Simbolo de defesa")
                    defesa.classList.add('box');
                    let imgdef = document.createElement("img")
                    imgdef.setAttribute("src", "./img/Simbolo defesa.png");
                    imgdef.classList.add('box');
                    var infodef = document.createElement("P");
                    var textdef = document.createTextNode("Símbolo de defesa: permite reforçar seu sangue e criar uma camada de defesa ganhando +5 de defesa. Pode reforçar a defesa de um aliado, porém custa pontos de vida em até 3pv, valor ganho de defesa sendo o mesmo que o gasto. pré-definido: 40 de vida");
                    infodef.appendChild(textdef);
                    infodef.classList.add('box');
                    
                    
                    let ataque = document.createElement("INPUT");
                    ataque.setAttribute("type", "radio");
                    ataque.setAttribute("name", "sangue");
                    ataque.setAttribute("value", "Simbolo de ataque")
                    ataque.classList.add('box');
                    let imgata = document.createElement("img")
                    imgata.setAttribute("src", "./img/Simbolo de ataque.png");
                    imgata.classList.add('box');
                    var infoata = document.createElement("P");
                    var textata = document.createTextNode("Símbolo de ataque: permite reforçar seus ataques com sangue, porém gasta 3pv por ataque e ganha mais 5 de força. pré-definido: 30 de vida");
                    infoata.appendChild(textata);
                    infoata.classList.add('box');
                    
                    
                    container.appendChild(title)
                    container.appendChild(bene)
                    container.appendChild(puni)
                    container.appendChild(defesa)
                    container.appendChild(imgdef)
                    container.appendChild(infodef)
                    container.appendChild(ataque)
                    container.appendChild(imgata)
                    container.appendChild(infoata)*/
>>>>>>> 349fbfb6285a2fc0778919f1e5e72f455824492e
                    document.getElementById("info-nacao").innerHTML = "Igneo"
                    document.getElementById("info-tribo").innerHTML = "Tribo: Sangue"
                }
            }else if(nacaoid === "alma"){
                nacaoatual = 1
<<<<<<< HEAD
                
=======
                /*let title = document.createElement("h3")
                let alma = document.createTextNode("Sistema de alma")
                title.appendChild(alma)
                title.classList.add('box');
                
                var bene= document.createElement("P");
                var sistemabene = document.createTextNode("Passiva: Não pode ser possuído por inimigos e pode restaurar o mental em 50% caso encontre uma alma amigável, porém quanto mais baixo o mental mais fácil de invocar uma alma mais forte e mais fácil de ter transtornos. Você tem pré-definido 40 de mental");
                var puni = document.createElement("P");
                var sistemapuni = document.createTextNode("Punições: seu mental é maior, porém ele decai a cada combate (perde 5 de mental), todas suas habilidades têm chance de te causar algum tipo de transtorno (caso tire menos que 9 no dado em qualquer habilidade e tenha mental abaixo de 20)");
                puni.appendChild(sistemapuni);
                puni.classList.add('box');
                bene.appendChild(sistemabene);
                bene.classList.add('box');
                
                let listamagias = document.createElement("P")
                magias = document.createTextNode("Pessoas que seguem os rituais desta tribo, conseguem usufruir de almas dos mortos no local de batalha, inicialmente tendo 2 habilidades, 1° consegue escutar as vozes das almas e invocá-las baseado em seu mental (Caso seu mental seja de 0-10, pode trazer monstros, assassinos, justiceiros. Caso seu mental seja de 11-20, pode trazer animais de grande porte, guerreiros sem vontade. Caso seu mental seja de 21-40, pode trazer animais de pequeno porte, aldeões), 2° consegue possuir o inimigo caso tire 15 no dado")
                listamagias.appendChild(magias)
                listamagias.classList.add('box');
                
                
                container.appendChild(title)
                container.appendChild(bene)
                container.appendChild(puni)
                container.appendChild(listamagias)*/
>>>>>>> 349fbfb6285a2fc0778919f1e5e72f455824492e
                document.getElementById("info-nacao").innerHTML = "Igneo"
                document.getElementById("info-tribo").innerHTML = "Tribo: Alma"
                
            }else if(nacaoid === "explo"){
                nacaoatual = 2
<<<<<<< HEAD
                
=======
                /*let title = document.createElement("h3")
                let artefato = document.createTextNode("Sistema dos exploradores")
                title.classList.add('box');
                title.appendChild(artefato)
                
                var bene = document.createElement("P");
                var sistemabene = document.createTextNode("Passiva: Pode carregar um artefato inicialmente e outros caso encontre");
                var puni = document.createElement("P");
                var sistemapuni = document.createTextNode("Punições: Não tem nenhuma resistência ");
                puni.appendChild(sistemapuni);
                puni.classList.add('box');
                bene.appendChild(sistemabene);
                bene.classList.add('box');
                
                let bola = document.createElement("INPUT");
                bola.setAttribute("type", "radio");
                bola.setAttribute("id", "bola");
                bola.setAttribute("name","artefatos")
                bola.setAttribute("value","bola")
                bola.classList.add('box');
                let imgbola = document.createElement("img")
                imgbola.setAttribute("src", "./img/bola.gif");
                imgbola.classList.add('box');
                var infobola = document.createElement("P");
                var textbola = document.createTextNode("Uma bola? **********************************************************");
                infobola.appendChild(textbola);
                infobola.classList.add('box');
                
                let espelho = document.createElement("INPUT");
                espelho.setAttribute("type", "radio");
                espelho.setAttribute("id", "espelho");
                espelho.setAttribute("name","artefatos")
                espelho.setAttribute("value","espelho")
                espelho.classList.add('box');
                let imgespelho = document.createElement("img")
                imgespelho.setAttribute("src", "./img/Espelho.png");
                imgespelho.classList.add('box');
                var infoespelho = document.createElement("P");
                var textespelho = document.createTextNode("Espelho, em combate cria um clone seu com 1 de vida podendo alternar em defesa e ataque, se colocado no modo de defesa defende o dano por completo, no ataque ele se joga no inimigo e atordoa.");
                infoespelho.appendChild(textespelho);
                infoespelho.classList.add('box');
                
                let mascara = document.createElement("INPUT");
                mascara.setAttribute("type", "radio");
                mascara.setAttribute("id", "mascara");
                mascara.setAttribute("name","artefatos")
                mascara.setAttribute("value","mascara")
                mascara.classList.add('box');
                let imgmascara = document.createElement("img")
                imgmascara.setAttribute("src", "./img/mascara.png");
                imgmascara.classList.add('box');
                var infomascara = document.createElement("P");
                var textmascara = document.createTextNode("Máscara, pode ser usado para pegar informações forçando o alvo contar a verdade. Pode direcionar ações ao inimigo quanto mais forte a palavra maior a chance de te causar um transtorno");
                infomascara.appendChild(textmascara);
                infomascara.classList.add('box');
                
                
                container.appendChild(title)
                container.appendChild(bene)
                container.appendChild(puni)
                container.appendChild(mascara)
                container.appendChild(imgmascara)
                container.appendChild(infomascara)
                container.appendChild(espelho)
                container.appendChild(imgespelho)
                container.appendChild(infoespelho)
                container.appendChild(bola)
                container.appendChild(imgbola)
                container.appendChild(infobola)*/
>>>>>>> 349fbfb6285a2fc0778919f1e5e72f455824492e
                document.getElementById("info-nacao").innerHTML = "Nômades"
                document.getElementById("info-tribo").innerHTML = "Tribo: Exploradores"
            }else if(nacaoid === "ban"){
                nacaoatual = 2
<<<<<<< HEAD
                
=======
                /*let title = document.createElement("h3")
                let banido = document.createTextNode("Sistema dos banidos")
                title.classList.add('box');
                title.appendChild(banido)
                
                var bene = document.createElement("P");
                var sistemabene = document.createTextNode("Passiva: conseguem consertar armas");
                var puni = document.createElement("P");
                var sistemapuni = document.createTextNode("Punições: São mais fracos a rituais, podendo afetar seu mental ");
                puni.appendChild(sistemapuni);
                puni.classList.add('box');
                bene.appendChild(sistemabene);
                bene.classList.add('box');
                
                let samurai = document.createElement("INPUT");
                samurai.setAttribute("type", "radio");
                samurai.setAttribute("name", "banidos");
                samurai.setAttribute("value", "samurai");
                samurai.classList.add('box');
                var infosamurai = document.createElement("P");
                var textsamurai = document.createTextNode("Samurai, tem uma armadura e uma katana, armadura da mais 3 de defesa. Ataques cortantes não surtem efeito");
                infosamurai.appendChild(textsamurai);
                infosamurai.classList.add('box');
                
                let pistoleiro = document.createElement("INPUT");
                pistoleiro.setAttribute("type", "radio");
                pistoleiro.setAttribute("name", "banidos");
                pistoleiro.setAttribute("value", "pistoleiro");
                pistoleiro.classList.add('box');
                var infopistoleiro = document.createElement("P");
                var textpistoleiro = document.createTextNode("Pistoleiro, carrega duas pistolas, todo ataque é multiplicado por 2 pela quantidade do dado");
                infopistoleiro.appendChild(textpistoleiro);
                infopistoleiro.classList.add('box');
                
                let assassino = document.createElement("INPUT");
                assassino.setAttribute("type", "radio");
                assassino.setAttribute("name", "banidos");
                assassino.setAttribute("value", "assassino");
                assassino.classList.add('box');
                var infoassassino = document.createElement("P");
                var textassassino = document.createTextNode("Assassino, consegue causar sangramento se tirar no dado mais que 10, se o assassino tiver mais vida que o inimigo ele executa(tirando 20 no dado), este efeito só se aplica a inimigos simples, inimigos denominados como boss NÃO funciona. Resistente a venenos");
                infoassassino.appendChild(textassassino);
                infoassassino.classList.add('box');
                
                
                container.appendChild(title)
                container.appendChild(bene)
                container.appendChild(puni)
                container.appendChild(assassino)
                container.appendChild(infoassassino)
                container.appendChild(pistoleiro)
                container.appendChild(infopistoleiro)
                container.appendChild(samurai)
                container.appendChild(infosamurai)*/
>>>>>>> 349fbfb6285a2fc0778919f1e5e72f455824492e
                document.getElementById("info-nacao").innerHTML = "Nômades"
                document.getElementById("info-tribo").innerHTML = "Tribo: Banidos"
                
            }else if(nacaoid === "arte"){
                nacaoatual = 3
<<<<<<< HEAD
                
=======
                /*let title = document.createElement("h3")
                let arte = document.createTextNode("Sistema de arte")
                title.classList.add('box');
                title.appendChild(arte)
                
                var bene = document.createElement("P");
                var sistemabene = document.createTextNode("Passiva: Carrega consigo uma lanterna (gasta 5 de energia a cada vez usada, para reabastecer precisará de runa da luz (não pode desenhar ou molda-lá), a runa de luz nada mais é uma pedra com poderes você carrega 2 inicialmente) que regenera seu mental em 1 e da equipe em 0.5. Lanterna tem combustível inicial 50");
                var puni = document.createElement("P");
                var sistemapuni = document.createTextNode("Punições: Precisa de uma lanterna para pintar e não perder o mental (são medrosos por natureza, facilmente seu mental cai)");
                puni.appendChild(sistemapuni);
                puni.classList.add('box');
                bene.appendChild(sistemabene);
                bene.classList.add('box');
                
                let Moldes = document.createElement("INPUT");
                Moldes.setAttribute("type", "radio");
                Moldes.setAttribute("name", "arte");
                Moldes.setAttribute("value", "moldes");
                Moldes.classList.add('box');
                var infoMoldes = document.createElement("P");
                var textMoldes = document.createTextNode("Moldes (moldes de argila, pedra, mármore, marionetes), carrega consigo uma bolsa que tem várias matérias primas para fazer seus moldes(Crie o que quiser(NENHUMA ARMA DE FOGO OU BRANCA), contanto que pergunte ao mestre e ele aceite)");
                infoMoldes.appendChild(textMoldes);
                infoMoldes.classList.add('box');
                
                let pincel = document.createElement("INPUT");
                pincel.setAttribute("type", "radio");
                pincel.setAttribute("name", "arte");
                pincel.setAttribute("value", "pincel");
                pincel.classList.add('box');
                var infopincel = document.createElement("P");
                var textpincel = document.createTextNode("Pincel, crie o que quiser (NENHUMA ARMA DE FOGO OU BRANCA), contanto que pergunte ao mestre e ele aceite), com tinta de pedras rúnicas");
                infopincel.appendChild(textpincel);
                infopincel.classList.add('box');
                
                
                container.appendChild(title)
                container.appendChild(bene)
                container.appendChild(puni)
                container.appendChild(Moldes)
                container.appendChild(infoMoldes)
                container.appendChild(pincel)
                container.appendChild(infopincel)*/
>>>>>>> 349fbfb6285a2fc0778919f1e5e72f455824492e
                document.getElementById("info-nacao").innerHTML = "Áureo"
                document.getElementById("info-tribo").innerHTML = "Tribo: Arte"
                
            }else if(nacaoid === "auto"){
                nacaoatual = 3
<<<<<<< HEAD
                
=======
                /*let title = document.createElement("h3")
                let automata = document.createTextNode("Sistema de automata")
                title.classList.add('box');
                title.appendChild(automata)
                
                var bene = document.createElement("P");
                var sistemabene = document.createTextNode("Passiva: seu personagem está dentro de um automata, podendo consertar, os atributos definidos por essa classe serão para o robo. Atributo base de quem está dentro: 10 de vida 0 nos atributos restantes");
                var puni = document.createElement("P");
                var sistemapuni = document.createTextNode("Punições: se o automata quebrar seu personagem sai, ele é indefeso e não ataca apenas corre");
                puni.appendChild(sistemapuni);
                puni.classList.add('box');
                bene.appendChild(sistemabene);
                bene.classList.add('box');
                
                let listamodificadores = document.createElement("P")
                modificador = document.createTextNode("1º modo armadura, todo seu ponto de força vira defesa. 2º garra extensora, dispara uma garra para pegar criaturas ou objetos. 3º canhão elétrico, dispara uma explosão de choque")
                listamodificadores.appendChild(modificador)
                listamodificadores.classList.add('box');
                
                
                container.appendChild(title)
                container.appendChild(bene)
                container.appendChild(puni)
                container.appendChild(listamodificadores)*/
>>>>>>> 349fbfb6285a2fc0778919f1e5e72f455824492e
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
<<<<<<< HEAD

=======
>>>>>>> 349fbfb6285a2fc0778919f1e5e72f455824492e
})



        