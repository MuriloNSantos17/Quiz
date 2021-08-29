var escolha;

function quiz(alternativa)
{
    var verde="#2ECC71";

    
    var spanA = document.getElementById('span-alternativaA');
    var textoA = document.getElementById('txtA');

    if(alternativa=="A")
    {
        spanA.style.backgroundColor=`${verde}`;
        textoA.style.color=`${verde}`;
    }

    escolha=alternativa;
}

function resultado(){
    if(escolha=="B")
    {
        window.alert("Resposta Correta!")
    }
}



