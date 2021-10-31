const fs = require('fs')

let arquivo_main = './teste.txt'
let nomes = ['Jefferson Alves', 'Gabriel Fernandes', 'Diego P', 'william filpes', 'Vinicius', 'Paulo', 'Bianca dell','Sara Ferreira', 'Raquel santos', 'Fabio akita']
let erro_escrever_mensagem = false;


function dataGenerate() {
    let date = new Date();
    let d = date.getDay();
    let m = date.getMonth()
    let a = date.getFullYear();
    let h = date.getHours();
    let mi = date.getMinutes();
    return d+"-"+"-"+m+"-"+a+"_"+h+"_"+mi;

}
let arquivo_de_log = dataGenerate();

fs.open(`./logs/${arquivo_de_log}.txt`, 'w', function() {
     console.log('1- INICIANDO ARQUIVO DE LOG!!')
     fs.appendFile(`${arquivo_de_log}.txt`, '1- INICIANDO ARQUIVO DE LOG!! \n');
})

function ler_arquivo() {
    fs.readFile(arquivo_main, 'utf-8', function (err, data) {
        console.log(data);
    });
    
}

for(let i = 0; i <= 10; i++) {
    console.log("2 - ESCREVENDO DADOS!!");
    fs.appendFile(`./logs/${arquivo_de_log}.txt`,'2 - ESCREVENDO DADOS!!')
    fs.appendFile(arquivo_main, nomes[i]+'\n', function(err, data) {
        if(err) {
            erro_escrever_mensagem = false;
        } else {
            erro_escrever_mensagem = true;
        }
    });
    
}

if (erro_escrever_mensagem == false) {
    console.log('3 - DADOS SALVOS COM SUCESSO!')
    fs.appendFile(`./logs/${arquivo_de_log}.txt`, '3 - DADOS SALVOS COM SUCESSO!')
} else {
    console.log('3 - FALHA AO SALVAR DADOS')
    fs.appendFile(`./logs/${arquivo_de_log}.txt`, '3 - FALHA AO SALVAR DADOS')
}

// ler_arquivo();

