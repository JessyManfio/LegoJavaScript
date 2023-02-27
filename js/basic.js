console.log('Olá, Javascript!')

var userName = 'Jessica Manfio'

document.getElementById('user-name').innerHTML = userName

// Variáveis //

//var nome = 'Mestre Yoda'
//var idade = 100
//var jedi = true

//console.log(typeof nome)
//console.log(typeof idade)
//console.log(typeof jedi)

// Operadores Matemáticos //

//var n1 = 5
//var n2 = 5

//var total = n1 - n2
//console.log(total)

//var n1 = 5
//var n2 = 5

//var total = n1 * n2
//console.log(total)

//var n1 = 5
//var n2 = 5

//var total = n1 + n2
//console.log(total)//

//Operadores de comparação ===//

var v1 = 2
var v2 = 2

var resultado = v1 === v2 
console.log(resultado)

/* * /Igual (==)//
Retorna verdadeiro se os valores comparados forem iguais.
1=='1' //true

Não igual (!=)
Retorna verdadeiro se os valores comparados não forem iguais. Esse operador também pode ser chamado de diferente de.
4!=1 //true

Igual estrito (===)
Esse operador é mais severo, só retorna verdadeiro se o valor e o tipo comparados forem iguais.
3==='3' //false
3===3 //true

Não igual estrito (!==)
Não se engane, esse operador vai retornar verdadeiro se os valores e ou os tipos forem diferentes
3!=='3' //true
3!==3 //false
3!==4 //true

Maior que (>)
Compara se o operador da esquerda é maior que o da direita. Caso seja retorna verdadeiro
1>2 //false
5>3 //true
4>'1' //true

Maior ou igual que (>=)
Compara se o operador da esquerda é maior ou igual ao da direita. Caso seja retorna verdadeiro
1>=2 //false
5>=3 //true
4>='1' //true
2>=2 // true

Menor que (<)
Compara se o operador da esquerda é menor que o da direita. Caso seja retorna verdadeiro

1<2 //true
5<3 //false
4<'1' //false    

Menor ou igual que (<=)
Compara se o operador da esquerda é menor ou igual ao da direita. Caso seja retorna verdadeiro/*  */

//1<=2 //true
//5<=3 //false
//4<='1' //false
//2<=2 // true


//Funções //

//function soma(n1, n2){
//    console.log(n1 + n2)
//}

//soma (5,5)

//function boasVindas(nome){
//    alert(nome + ',Seja bem vindo(a)')
//}

//boasVindas()

// controle de fluxos BDD //

// Sendo um cliente correntista do banco
//posso sacar dinheiro em caixas eletronicos
//para poder comprar em lugar que nao aceitam o cartao de debito ou credito

//var saldo = 1000
//function saque (valor){
 //   saldo = saldo - valor 

//}
//saque(500)
//console.log(saldo)


//Cenario 1: Saque com sucesso
//Dado que meu saldo é de 1000 reais 
//Quando faço um saque de 500 reias 
//Então o valor do saque deve ser deduzido do meu saldo

//var saldo = 1000
//function saque (valor){

  //  if (valor> saldo){
  //      console.log('Valor do saque superior ao saldo')

  //  } else{
  //  saldo = saldo - valor 
 //   }
//}
//saque(1001)
//console.log(saldo)

//cenario 2 Saque com valor superior ao saldo
// Dado que meu saldo é de 1000 reais
// Quando faço um saque de 1001 reais 
//Então não deve deduzir do meu saldo
//E deve mostrar uma mensagem de alerta informando que o valor é superior ao saldo


//var saldo = 1000
//function saque (valor) {

 //   if (valor> saldo){
       // console.log('Valor do saque superior ao saldo')

   // } else if ( valor > 700){
       // console.log('Valor do saque é superior ao max permitido por operação')
   // } else {
   // saldo = saldo - valor 
   // }
//}
//saque(701)
//console.log(saldo)


//cenario 3: Saque com valor maximo
// Dado que meu saldo é de 1000 reais
// E o valor maximo por operação é de 700
//Quando faço um saque no valor de 701 reias
//Então não deve deduzir do meu saldo
//E deve mostrar uma msg de alerta informando nque o valor é superior ao max permitido


//Arrays tipo de dados, consegue armazenar um conjunto de dados//
// primeira array ex: meia é sempre 0 //
//podemos chamar array de listas

//var gaveteiro = ['Meias', 'Gravatas', 'Documentos', 'Salgadinhos']
//console.log(gaveteiro[2])


//var personagens = ['Mestre Yoda','Luke']
 
//personagens.push('R2D2') //adiciona mais um item na lista(sempre o ultimo da lista)
//personagens.pop('Luke') //remove mais um item na lista(sempre o ultimo da lista)

//personagens = personagens.filter(function(p) {  //Filtro para ignorar item
 //   return p !== 'Mestre Yoda'
    
//})

//console.log(personagens)


// Controles de repetição(loops)


//var personagens = ['Mestre Yoda','Luke','Princesa','Darth Vader']

//personagens.forEach(function(p){
  //  console.log(p)
//})






















