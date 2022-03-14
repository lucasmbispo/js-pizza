'use strict';
//Variáveis

let somaMarguerita = 0;
let somaShitake = 0;
let somaCalabresa =0;
let vendaMarguerita = 0.00;
let vendaShitake = 0.00;
let vendaCalabresa = 0.00;

let btnVendas = document.getElementById('vendas');
let btnEstorno = document.getElementById('estorno');
let btnPlanilha = document.getElementById('export');

//Eventos

btnVendas.addEventListener("click", venda, false);
btnEstorno.addEventListener("click", estorno, false);
btnPlanilha.addEventListener("click", planilha, false);

//Funções

function venda(e) {
  if (document.getElementById('marguerita').checked) {
    somaMarguerita = somaMarguerita + 1;
    vendaMarguerita = vendaMarguerita = +25.00;
    document.getElementById('resultadoMarguerita').innerHTML = somaMarguerita;
    document.getElementById('vendaMarguerita').innerHTML = vendaMarguerita.toFixed(2);

  } else if (document.getElementById('shitake').checked) {
    somaShitake = somaShitake + 1;
    vendaShitake = vendaShitake + 25.00;
    document.getElementById('resultadoShitake').innerHTML = somaShitake;
    document.getElementById('vendaShitake').innerHTML = vendaShitake.toFixed(2);

  } else if (document.getElementById('calabresa').checked) {
    somaCalabresa = somaCalabresa + 1;
    vendaCalabresa = vendaCalabresa + 25.00;
    document.getElementById('resultadoCalabresa').innerHTML = somaCalabresa;
    document.getElementById('vendaCalabresa').innerHTML = vendaCalabresa.toFixed(2);

  }
}


function estorno(e)

  {
    if(document.getElementById('marguerita').checked)
    {
      somaMarguerita = somaMarguerita - 1;
      vendaMarguerita = vendaMarguerita = - 25.00;
      if(somaMarguerita < 0)
      {
        somaMarguerita = 0;
        vendaMarguerita = 0;
      }
      document.getElementById('resultadoMarguerita').innerHTML = somaMarguerita;
      document.getElementById('vendaMarguerita').innerHTML = vendaMarguerita.toFixed(2);

    }else if(document.getElementById('shitake').checked)
    {
      somaShitake = somaShitake - 1;
      vendaShitake = vendaShitake - 25.00;
      if(somaShitake < 0)
      {
        somaShitake = 0;
        vendaShitake = 0;
      }
      document.getElementById('resultadoShitake').innerHTML = somaShitake;
      document.getElementById('vendaShitake').innerHTML = vendaShitake.toFixed(2);

    }else if(document.getElementById('calabresa').checked)
    {
      somaCalabresa = somaCalabresa - 1;
      vendaCalabresa = vendaCalabresa - 25.00;
      if(somaCalabresa < 0)
      {
        somaCalabresa = 0;
        vendaCalabresa = 0;
      }
      document.getElementById('resultadoCalabresa').innerHTML = somaCalabresa;
      document.getElementById('vendaCalabresa').innerHTML = vendaCalabresa.toFixed(2);

    }
}

function planilha(e)
{
  TableToExcel.convert(document.getElementById('table'));
}

