var escolha;

function quiz(alternativa)
{
    var verde="#2ECC71";
    var vermelho="#CB2127";
    
    var spanA = document.getElementById('span-alternativaA');
    var textoA = document.getElementById('txtA');

    var textoB = document.getElementById('txtB');
    var spanB = document.getElementById('span-alternativaB');

    
    var textoC = document.getElementById('txtC');
    var spanC = document.getElementById('span-alternativaC');

    var textoD = document.getElementById('txtD');
    var spanD = document.getElementById('span-alternativaD');
    

    if(alternativa=="A")
    {
        spanA.style.backgroundColor=`${verde}`;
        textoA.style.color=`${verde}`;

        spanB.style.backgroundColor=`${vermelho}`;
        textoB.style.color=`${vermelho}`;        

        spanC.style.backgroundColor=`${vermelho}`;
        textoC.style.color=`${vermelho}`;

        spanD.style.backgroundColor=`${vermelho}`;
        textoD.style.color=`${vermelho}`;
    }
    else if(alternativa=="B")
    {
        spanA.style.backgroundColor=`${vermelho}`;
        textoA.style.color=`${vermelho}`;

        spanB.style.backgroundColor=`${verde}`;
        textoB.style.color=`${verde}`;

        spanC.style.backgroundColor=`${vermelho}`;
        textoC.style.color=`${vermelho}`;

        spanD.style.backgroundColor=`${vermelho}`;
        textoD.style.color=`${vermelho}`;
    }
    else if(alternativa=="C")
    {
        spanA.style.backgroundColor=`${vermelho}`;
        textoA.style.color=`${vermelho}`;

        spanB.style.backgroundColor=`${vermelho}`;
        textoB.style.color=`${vermelho}`;

        spanC.style.backgroundColor=`${verde}`;
        textoC.style.color=`${verde}`;

        spanD.style.backgroundColor=`${vermelho}`;
        textoD.style.color=`${vermelho}`;
    }
    else
    {
        spanA.style.backgroundColor=`${vermelho}`;
        textoA.style.color=`${vermelho}`;

        spanB.style.backgroundColor=`${vermelho}`;
        textoB.style.color=`${vermelho}`;

        spanC.style.backgroundColor=`${vermelho}`;
        textoC.style.color=`${vermelho}`;

        spanD.style.backgroundColor=`${verde}`;
        textoD.style.color=`${verde}`;
    }

    escolha=alternativa;
}

function resultado(){
    if(escolha=="B")
    {
        window.alert("Resposta Correta!")
    }
    else{
        window.alert("Resposta Errada!");
    }
}



