// ---------- PRIMEIRO MÉTODO: .reduce() ----------
// FUNÇÃO: esse comando transforma todos os elementos de um array em um só! Para ficar mais fácil de se entender vou dar dois exemplos:
// PRIMEIRO EXEMPLO: Números
let listaNumeros = [13, 64, 38, 32];
// Como podemos ver, ao invés de declararmos cada variável com um valor, declaramos uma só com o valor de várias utilizando o método Array

let total = listaNumeros.reduce((total, todosNumeros) => total + todosNumeros);
// Agora eu declaro uma variável total, onde eu utilizo o .reduce para somar todos os números da lista

// Agora eu exibo o total
// console.log(total);

// Segundo exemplo: preços de mercado

let listaMercadoPrecos = [12.99, 20.99, 100.0, 9.99];
// Novamente com o método Array, declaro uma variável que possuí todos os valore que irei utilizar

let tudo = listaMercadoPrecos.reduce((tudo, precoTotal) => tudo + precoTotal);
// Agora o método .reduce é utilizado para somar todos os valores, e o cáuculo é adicionado a tudo

// Agora eu exibo o resultado
// console.log(tudo);

// Segundo método: .some()
// Esse método serve para vermos se pelo menos um elemento passa por uma condição (true) ou não (false)
// Exemplo 1: verifica se um usuário tem mais de 18 anos

let usuariosIdade = [
  { usuario: "João", idade: 34 },
  { usuario: "Maria", idade: 65 },
  { usuario: "Carlos", idade: 34 },
  { usuario: "Vanessa", idade: 18 }
];
// aqui eu declaro de uma vez todos os usuários que passarão nessa condição, utilizando o Array

let maiorDezoito = usuariosIdade.some(
  (user, index, array) => user.idade === 18
);
// Utilizando o método .some se a condição for true ele me exibe que pelo menos um usuário é maior de idade (true)

// Exibo a mensagem de true
// console.log(maiorDezoito);

// Exemplo 2: verifica se tem algum número par

let listaNum = [1, 34, 3, 7, 9, 5, 5];
// Declaro todos os números que irei utilizar

let numPar = listaNum.some(function (numero) {
  return numero % 2 === 0;
});
// O método .some me ajuda a fazer com que todos os números cujo a divisão por 2 tenha um resto igual a 0 (par) sejam exibidos

// Exibo a mensagem que irá mostrar se tem numeros pares ou não!
// console.log(numPar);

// Agora utilizo o if para se algum número quando for dividido por 2 tiver um resto diferente de 0 não acontecer nada, e caso essa condição estiver correta uma mensagem será exibida
if (numPar % 2 !== 0) {
  // console.log("Tem número par!!");
}

// Terceiro método: .every()
// Função: este comando serve para nos dizer se todos os itens passam por uma condição. Caso eu receba uma mensagem "true" todos os elementos passam pela condição, caso contrário "false"

// Exemplo 1: verifica se todos os usuários possuem mais de R$1,00 e menos de R$1000 em suas contas
let usuariosDinheiro = [
  { usuario: "Alejandra", dinheiro: 500 },
  { usuario: "Thiago", dinheiro: 90000 },
  { usuario: "Tony Stark", dinheiro: 12400000 },
  { usuario: "Vanessa Lopez", dinheiro: 2 }
];
// Declaro os usuários e sua quantia em R$

// No "verificacao1" vemos se todos tem mais que R$1,00 em suas contas
let verificacao1 = usuariosDinheiro.every(
  (user, index, array) => user.dinheiro > 1
);

// No "verificacao2" vemos se todos tem menos de R$1.000 em suas contas
let verificacao2 = usuariosDinheiro.every((user) => user.dinheiro < 1.0);

// Exibo as mensagens
// console.log("Verificando...");
// console.log(verificacao1);
// console.log(verificacao2);

// Exemplo 2: verifica se todos os dias (segunda à sexta) entraram 100 pessoas na loja

let diasSemana = [
  { dia: "segunda-feira", pessoas: 45 },
  { dia: "terça-feira", pessoas: 134 },
  { dia: "quarta-feira", pessoas: 593 },
  { dia: "quinta-feira", pessoas: 2 },
  { dia: "sexta-feira", pessoas: 12 }
];
// Declaro as variáveis que me mostram os dias da semana e a quantidade de pessoas que entraram na loja

// Agora utilizo o comando .every ára ver se mais de 100 pessoas entraram
let entraram1 = diasSemana.every((user, index, array) => user.pessoas > 100);

// Exibo as mensagens apropriadas
// console.log(diasSemana);
// console.log("Verificando se a meta de 100 pessoas todos os dias foi atingida...")
// console.log(entraram1);

// Quarto método: .findIndex()
// Função: serve para mostrar o índice de um item (lembre-se que a ordem é 0-1-2-3...)

// Exemplo 1: mostra a posição (índice) de um usuário quando inserido seu nome
let usuariosIndice = [
  { nome: "Izabela", idade: 15 },
  { nome: "Rafael", idade: 23 },
  { nome: "Amanda", idade: 39 },
  { nome: "Izabel", idade: 20 }
];
// Declaro os usuários

let achar = usuariosIndice.findIndex(
  (user, index, array) => user.nome === "Izabel"
);

// Exibo a mensagem do índice
// console.log(achar);

// Exemplo 2: mostra o índice do andar de cada família
let familiaAndar = [
  { andar: 1, familia: "Moretti" },
  { andar: 2, familia: "Cavalcante" },
  { andar: 3, familia: "Florence" },
  { andar: 4, familia: "Castelo" }
];
// Declaradas as famílias agora eu declaro o let "procurar" com o método .findIndex que quando inserido a palavra chave exibe o índice
let procurar = familiaAndar.findIndex(
  (user, index, array) => user.familia === "Cavalcante"
);

// Exibo a mensagem do Índice
// console.log(procurar);

// Quinto método: .find()
// Função: É parecido com o método 4, porem nesse caso é exibido todo o elemento (no caso do exemplo 1 é exibido o nome, idade e cidade)

// Exemplo 1: Informações pessoais
let peopleList = [
  { nome: "Amanda", idade: 60, cidade: "Parintins" },
  { nome: "Luciana", idade: 23, cidade: "Valinhos" },
  { nome: "Thiago", idade: 1, cidade: "Vinhedo" },
  { nome: "Eduardo", idade: 25, cidade: "Campinas" }
];

// Declarado a lista de pessoas agora eu crio uma variável (people) que com o método .find após ser inserido a palavra chave exibe o elemento respectivo
let people = peopleList.find((user, index, array) => user.nome === "Thiago");

// Exibo o elemento
// console.log(people);

// Exemplo 2: Informações produto

let listaProduto = [
  { nome: "Sabão em Pó", codigo: "294493957", preco: 6.99 },
  { nome: "Fini", codigo: "295729573", preco: 12.99 },
  { nome: "Garrafa Água c/ gás", codigo: "204275394", preco: 7.9 },
  { nome: "Alface", codigo: "027483758", preco: 5.99 }
];
// Esse exemplo é um "projeto" de app de supermercado, que quando inserido o nome do produto aparece todas as suas informações
let informacoes = listaProduto.find(
  (user, index, array) => user.nome === "Fini"
);

// Exibo as informações do produto
// console.log(informacoes);

// Sexto método: .filter()
// Função: serve para filtrarmos os elementos que estão em um Array, os que passarem por esse filtro são exibidos, os que não, serão ignorados
// Exemplo 1: Filtrar pessoas que querem entrar em um brinquedo em um parque de diversões
let tamanhoEntrada = [
  { nome: "Pedro", tamanho: 1.85 },
  { nome: "Felipe", tamanho: 1.34 },
  { nome: "Roberto", tamanho: 1.75 },
  { nome: "Fulano", tamanho: 1.64 }
];
// Declaro as variáveis que serão filtradas

let verificandoTamanho = tamanhoEntrada.filter(
  (user, index, array) => user.tamanho > 1.65
);
// Crio o comando que irá filtra-las

// Exibo as mensagens
// console.log("Esses são os usuários que podem entrar no brinquedo ");
// console.log(verificandoTamanho);
// console.log(" Os outros NÃO podem entrar!!");

// Exemplo 2: Presença de alunos
let alunos = [
  { numero: 1, presenca: "v" },
  { numero: 2, presenca: "v" },
  { numero: 3, presenca: "f" },
  { numero: 4, presenca: "v" },
  { numero: 5, presenca: "f" }
];
// Crio as variáveis com os números respectivos dos alunos, e se vieram (v) ou se faltarsm (f)

let alunospresentes = alunos.filter(
  (user, index, array) => user.presenca === "v"
);
// Com o comando ,filter o comando só irá me exibir os alunos que vieram (v)

// Exibo as mensagens apropriadas
// console.log("Esses são os alunos que vieram:");
// console.log(alunospresentes);
// console.log("Os outros não vieram");

// Sétimo método: .flat()
// Função: esse método serve para quando em um Array temos dentro dele outros Sub-Arrays, assim o método transforma todos esses arrays em um só
// Exemplo 1: nesse exemplo dentro do Array possuem alguns sub-números
let numeros = [1, 2, 3, [4, 5], [6, 7, [8, 9]]];
// Declaro dentro do Array alguns números, e dentro dele alguns outros sub-números

// Utilizo o .flat que irá configurar a profundidade do Array
numeros.flat(); 
numeros.flat(2); 

// Agora exibo o array configurado
// console.log(numeros.flat(2));

// Exemplo 2: Agora eu utilizo desse método para organizar o Array quando eu não tenho ideia do nível de profundidade dos sub-Arrays, mas quero que todos estejam dentro de um só elemento
let arrays1 = ['Luiza', 'Thiago', 'Lírio', ['Chico', 'Xande'], ['Joui', 'Elizabeth', ['Cézar', 'Dara']]];

arrays1.flat(); 
arrays1.flat(2); 
// console.log(arrays.flat(2))

// Exemplo 2: agora eu utilizo letras, e o comando não tem ideia da profundidade dos sub_arrays, mas quer ter certeza de que todos estarão em um único elemento
let arrays = [[[[[[[[[[['a', 'b', 'c']], [[[[[['d']]]]]]]]]]]]]]];

// o Infinity funciona como a propria palavra (infinito), ele representa tudo o que pode estar no Array
arrays.flat(Infinity); 

// Exibo o Array ordenado
// console.log(arrays.flat(Infinity));

// Oitavo método: .reverse()
// Função: serve para revertermos a ordem de um Array. Ex: 1, 2, 3 (com o comando .reverse) 3, 2, 1
// Exemplo 1: cores
let  minhasCores = ["verde", "amarelo", "roxo", "vermelho", "laranja", "preto"];
// Declaro as cores

// Inverto a ordem dos elemtos de minhasCores
minhasCores.reverse();

// Exibo novo elemento invertido
// console.log(minhasCores);

// Exemplo 2: minha família
let  minhaFamilia = ["mãe", "pai", "irmão", "irmã", "cachorro", "eu"];
// Mostro minha família

// Reverto a ordem dos elementos de minha família
minhaFamilia.reverse();

// Exibo os elementos invertidos
// console.log(minhaFamilia);

// Nono método: .concat()
// Função: adiciona novos elementos a um Array
// Exemplo 1: números
let theListNumbers = [1, 2, 3, 4, 5];
// declaro os números iniciais

let newTheListNumbers = theListNumbers.concat([6, 7, 8]);
// Crio uma nova lista com os novos números 

// Exibo a lista antiga e a nova com uma mensagem apropriada
// console.log(theListNumbers);
// console.log("A nova lista de números é: ");
// console.log(newTheListNumbers);

// Exemplo 2: novos usuários
let usersList = ['Robert', 'Tonny', 'Louize', 'Charles', 'Noah'];
// Esses são os usuários iniciais

let newUsersList = usersList.concat(['Liam', 'William', 'James']);
// Esses são os novos usuários, que serão adicionados a usersList com o método .concat()

// Exibo as mensagens e suas informações 
// console.log(usersList);
// console.log("Os novos usuários são: ");
// console.log(newUsersList);

// Décimo método: .join()
// Função: esse método une elementos de um Array em uma única string ou cria uma string
// Exemplo 1: Deixo a estética da lista de frutas melhor
const listFruits = ["🍎", "🍌", "🍊", "🍉", "🥝", "🍑", "🍐", "🍓"];
// Mostro os elementos da lista de frutas (ACHEI MUITO TOP QUE DA PRA COLOCAR EMOJIS)

const all = listFruits.join("-");
// Adiciono uma string que sapara os elementos com um traço

// Exibo as mensagens
// console.log("Os elementos da sua lista são: ")
// console.log(all);

// Exemplo 2: une os itens para formar o desenho
let desenho = ["(", "⌐", "■", "_", "■", ")"];
// Mostro os elementos que formarão o desenho
let juntar = desenho.join("");
// Adiciono uma string que junta tudo

// Exibo as mensagens 
// console.log("Desenho formado:")
// console.log(juntar);

// Método .splice
// Função: esse método adiciona ou altera os elementos de um Array
// Exemplo 1: adiciona mes
let  meses = ['Janeiro', 'Março', 'Abril', 'Junho'];
// Declaro os meses (está faltando um)

let novoMes = meses.splice(1, 0, 'Fevereiro');
// Adiciono o novo mes

// Exibo o novo conjunto de meses 
// console.log(meses);

// Exemplo 2: Adicionando ao carrinho
let  carrinho1 = ['🍫', '🥩', '🥬', '🧅'];
// Todos os itens presentes no carrinho

carrinho1.splice(1, 1, '🍗');
// Não gosto de carne bovina, então troquei por carne de frango

// Exibo a mensagem que mostra que eu troquei a carne
// console.log(carrinho);

// Exemplo 3: Removendo do carrinho
let  carrinho = ['🍫', '🥩', '🥬', '🧅'];
// Todos os itens presentes no carrinho

carrinho.splice(1, 1,);
// Não gosto de carne bovina, entã tiro ela

// Exibo a mensagem que mostra que eu tirei a carne
// console.log(carrinho);