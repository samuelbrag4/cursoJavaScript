/*
Funções:

OBS: os conceitos de uma função já foram estudados e entendidos. Este arquivo, é somente uma prática mais complexa deste assunto.

Serão feitas 4 atividades, onde nas 2 primeiras, eu terei ajuda. Nas 2 últimas eu farei sozinho.

1º Exercício: Sistema de Reservas de Hotel
Você deve criar um sistema simples de reservas para um hotel. O hotel tem um número limitado de quartos e aceita reservas se houver disponibilidade.
*/

let quartos = [
    {quarto: 1, ocupado: true},
    {quarto: 2, ocupado: true},
    {quarto: 3, ocupado: false},
    {quarto: 4, ocupado: false},
    {quarto: 5, ocupado: true},
    {quarto: 6, ocupado: false},
    {quarto: 7, ocupado: false},
    {quarto: 8, ocupado: true},
    {quarto: 9, ocupado: false},
    {quarto: 10, ocupado: false}
]

function exibirQuartos() {
    for (let i = 0; i < quartos.length; i++) {
        console.log(`Quarto ${quartos[i].quarto} - Status: ${quartos[i].ocupado}`);
    }
}

exibirQuartos();

function reservarQuarto() {
    let reservarQuarto = prompt('Digite o número do quarto que deseja reservar: ');

    if (reservarQuarto < 1 || reservarQuarto > 10) {
        console.log('Quarto inexistente');
        alert('Quarto inexistente');
    } else if (quartos[reservarQuarto - 1].ocupado) {
        console.log('Quarto ocupado');
        alert('Quarto ocupado');
    } else {
        quartos[reservarQuarto - 1].ocupado = true;
        console.log('Quarto reservado com sucesso');
        alert('Quarto reservado com sucesso');
    }
}

reservarQuarto();

function liberarQuarto() {
    let liberarQuarto = prompt('Digite o número do quarto que deseja liberar: ');

    if (reservarQuarto < 1 || reservarQuarto > 10) {
        console.log('Quarto inexistente');
        alert('Quarto inexistente');
    } else if (!quartos[liberarQuarto - 1].ocupado) {
        console.log('Quarto já está livre');
        alert('Quarto já está livre');
    } else {
        quartos[liberarQuarto - 1].ocupado = false;
        console.log('Quarto liberado com sucesso');
        alert('Quarto liberado com sucesso');
    }
}

liberarQuarto();

function contarDisponiveis() {
    let disponiveis = 0;

    for (let i = 0; i < quartos.length; i++) {
        if (!quartos[i].ocupado) {
            disponiveis++;
        }
    }

    console.log(`Há ${disponiveis} quartos disponíveis`);
}

contarDisponiveis();

/*
2º Exercicio: Gerenciamento de Estoque - Hortifruti

Crie um sistema simples para gerenciar o estoque. Cada produto tem um nome, quantidade e um preço.
*/

let produtos = [
    {nome: 'Maçã', quantidade: 350, preco: 2.50},
    {nome: 'Banana', quantidade: 200, preco: 1.50},
    {nome: 'Laranja', quantidade: 300, preco: 3.00},
    {nome: 'Uva', quantidade: 150, preco: 5.00},
    {nome: 'Abacaxi', quantidade: 100, preco: 4.00},
    {nome: 'Melancia', quantidade: 50, preco: 10.00},
    {nome: 'Morango', quantidade: 400, preco: 6.00},
    {nome: 'Pera', quantidade: 250, preco: 3.50},
    {nome: 'Manga', quantidade: 150, preco: 4.50},
    {nome: 'Pêssego', quantidade: 40, preco: 5.50},
];

function removerAcentos(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

function exibirEstoque() {
    for (let i = 0; i < produtos.length; i++) {
        if (produtos[i].quantidade < 50) {
            console.log(`Produto: ${produtos[i].nome} - Quantidade: ${produtos[i].quantidade} - Preço: ${produtos[i].preco} - Estoque baixo`);
        } else {
            console.log(`Produto: ${produtos[i].nome} - Quantidade: ${produtos[i].quantidade} - Preço: ${produtos[i].preco}`);
        }
    }
}

function adicionarEstoque() {
    let nomeProduto = prompt('Digite o nome do produto que deseja adicionar ao estoque: ');
    let quantidadeAdicionar = parseInt(prompt('Digite a quantidade que deseja adicionar ao estoque: '));

    nomeProduto = removerAcentos(nomeProduto);

    if (isNaN(quantidadeAdicionar) || quantidadeAdicionar <= 0) {
        console.log('Quantidade inválida');
        alert('Quantidade inválida');
        return;
    }

    let produtoEncontrado = false;

    for (let i = 0; i < produtos.length; i++) {
        if (removerAcentos(produtos[i].nome) === nomeProduto) {
            produtos[i].quantidade += quantidadeAdicionar;
            console.log('Produto adicionado ao estoque com sucesso');
            alert('Produto adicionado ao estoque com sucesso');
            produtoEncontrado = true;
            break;
        }
    }

    if (!produtoEncontrado) {
        console.log('Produto não encontrado');
        alert('Produto não encontrado');
    }

    exibirEstoque();
}

function venderProduto() {
    let produtoEscolhido = prompt('Digite o nome do produto que deseja vender: ');
    let quantidadeVendida = parseInt(prompt('Digite a quantidade do produto que deseja vender: '));

    produtoEscolhido = removerAcentos(produtoEscolhido);

    let produtoEncontrado = false;

    for (let i = 0; i < produtos.length; i++) {
        if (removerAcentos(produtos[i].nome) === produtoEscolhido) {
            if (produtos[i].quantidade < quantidadeVendida) {
                console.log('Quantidade insuficiente em estoque');
                alert('Quantidade insuficiente em estoque');
            } else {
                produtos[i].quantidade -= quantidadeVendida;
                console.log('Venda realizada com sucesso');
                alert('Venda realizada com sucesso');
            }
            produtoEncontrado = true;
            break;
        }
    }

    if (!produtoEncontrado) {
        console.log('Produto não encontrado');
        alert('Produto não encontrado');
    }

    exibirEstoque();
}

function calcularValorDoEstoque() {
    let valorTotal = 0;
    for (let i = 0; i < produtos.length; i++) {
        valorTotal += produtos[i].quantidade * produtos[i].preco;
    }
    console.log(`Valor total do estoque: R$ ${valorTotal.toFixed(2)}`);
}

adicionarEstoque();
venderProduto();
calcularValorDoEstoque();
console.table(produtos);

/*
3º Exercício: Controle de Tarefas (To-Do List)

Crie um sistema de gerenciamento de tarefas onde o usuário pode adicionar, remover e marcar tarefas como concluídas.
*/

let tarefas = [];

function exibirTarefas() {
    for (let i = 0; i < tarefas.length; i++) {
        console.log(`Tarefa ${i + 1}: ${tarefas[i].nome} - Descrição: ${tarefas[i].descricao} - Concluída: ${tarefas[i].concluida}`);
    }
}

function adicionarTarefa() {
    let nomeTarefa = prompt('Digite o nome da tarefa que deseja adicionar: ');
    let descricaoTarefa = prompt('Digite a descrição da tarefa: ');

    let novaTarefa = {
        nome: nomeTarefa,
        descricao: descricaoTarefa,
        concluida: false
    };

    tarefas.push(novaTarefa);

    console.log('Tarefa adicionada com sucesso');

    exibirTarefas();
}

adicionarTarefa();

function removerTarefa() {
    let nomeTarefa = prompt('Digite o nome da tarefa que deseja remover: ');

    let tarefaEncontrada = false;

    for (let i = 0; i < tarefas.length; i++) {
        if (tarefas[i].nome === nomeTarefa) {
            tarefas.splice(i, 1);
            console.log('Tarefa removida com sucesso');
            tarefaEncontrada = true;
            break;
        } else {
            console.log('Tarefa não encontrada');
        }

        exibirTarefas();
    }
}

removerTarefa();

function marcarConcluida() {
    let nomeTarefa = prompt('Digite o nome da tarefa que deseja marcar como concluída: ');

    let tarefaEncontrada = false;

    for (let i = 0; i < tarefas.length; i++) {
        if (tarefas[i].nome === nomeTarefa) {
            tarefas[i].concluida = true;
            console.log('Tarefa marcada como concluída com sucesso');
            tarefaEncontrada = true;
            break;
        } else {
            console.log('Tarefa não encontrada');
        }
    }

    exibirTarefas();
}

marcarConcluida();

/* 
4º Exercício: Biblioteca Virtual
Crie um sistema para gerenciar um catálogo de livros.

OBS: Esta será feita com maior dificuldade e complexidade.

Requisitos:

- Deverá ser possível verificar quais livros estão disponíveis para empréstimo e quais estão emprestados;
- Deverá ser possível listar os livros;
- Deverá ser possível pesquisar por um livro;
- Deverá ser possível adicionar um livro; 
- Deverá ser possível remover um livro;
- Deverá ser possível emprestar um livro;
- Deverá ser possível devolver um livro;
- Deverá ser possível listar os funcionários da biblioteca;
- Deverá ser possível listar os usuários da biblioteca;
- Deverá ser possível listar a localização da biblioteca.
- Deverá ser possível adicionar funcionários;
- Deverá ser possível remover funcionários;
- Deverá ser possível adicionar usuários;
- Deverá ser possível remover usuários;
- Deverá ser possível mudar algo em específico de um livro, funcionário ou usuário.
- Deverá ser possível "imprimir" um recibo, que contém as seguintes informações:
    nome do funcionario que emprestou o livro;
    nome do usuário que pegou o livro emprestado;
    título do livro;
    autor do livro;
    data de empréstimo;
    data de devolução.
*/

let biblioteca = {
    livros: [
        {titulo: 'O Senhor dos Anéis', autor: 'J.R.R. Tolkien', genero: 'Fantasia', emprestado: false},
        {titulo: '1984', autor: 'George Orwell', genero: 'Distopia', emprestado: true},
        {titulo: 'Dom Quixote', autor: 'Miguel de Cervantes', genero: 'Clássico', emprestado: false},
        {titulo: 'O Pequeno Príncipe', autor: 'Antoine de Saint-Exupéry', genero: 'Infantil', emprestado: true},
        {titulo: 'A Metamorfose', autor: 'Franz Kafka', genero: 'Ficção', emprestado: false},
        {titulo: 'A Revolução dos Bichos', autor: 'George Orwell', genero: 'Distopia', emprestado: false},
        {titulo: 'O Hobbit', autor: 'J.R.R. Tolkien', genero: 'Fantasia', emprestado: true},
        {titulo: 'A Menina que Roubava Livros', autor: 'Markus Zusak', genero: 'Drama', emprestado: false},
        {titulo: 'O Código Da Vinci', autor: 'Dan Brown', genero: 'Suspense', emprestado: false},
        {titulo: 'O Iluminado', autor: 'Stephen King', genero: 'Terror', emprestado: true},
        {titulo: 'A Culpa é das Estrelas', autor: 'John Green', genero: 'Romance', emprestado: false},
        {titulo: 'O Nome do Vento', autor: 'Patrick Rothfuss', genero: 'Fantasia', emprestado: false},
        {titulo: 'A Guerra dos Tronos', autor: 'George R.R. Martin', genero: 'Fantasia', emprestado: true},
        {titulo: 'O Guia do Mochileiro das Galáxias', autor: 'Douglas Adams', genero: 'Ficção Científica', emprestado: false},
        {titulo: 'O Apanhador no Campo de Centeio', autor: 'J.D. Salinger', genero: 'Clássico', emprestado: true},
        {titulo: 'Moby Dick', autor: 'Herman Melville', genero: 'Aventura', emprestado: false},
        {titulo: 'Orgulho e Preconceito', autor: 'Jane Austen', genero: 'Romance', emprestado: true},
        {titulo: 'O Grande Gatsby', autor: 'F. Scott Fitzgerald', genero: 'Clássico', emprestado: false},
        {titulo: 'Crime e Castigo', autor: 'Fiódor Dostoiévski', genero: 'Drama', emprestado: true},
        {titulo: 'O Sol é Para Todos', autor: 'Harper Lee', genero: 'Drama', emprestado: false},
        {titulo: 'A Divina Comédia', autor: 'Dante Alighieri', genero: 'Poesia', emprestado: true},
        {titulo: 'O Retrato de Dorian Gray', autor: 'Oscar Wilde', genero: 'Ficção', emprestado: false},
        {titulo: 'Drácula', autor: 'Bram Stoker', genero: 'Terror', emprestado: true},
        {titulo: 'Frankenstein', autor: 'Mary Shelley', genero: 'Terror', emprestado: false},
        {titulo: 'O Conde de Monte Cristo', autor: 'Alexandre Dumas', genero: 'Aventura', emprestado: true},
        {titulo: 'Os Miseráveis', autor: 'Victor Hugo', genero: 'Drama', emprestado: false},
        {titulo: 'O Morro dos Ventos Uivantes', autor: 'Emily Brontë', genero: 'Romance', emprestado: true},
        {titulo: 'Jane Eyre', autor: 'Charlotte Brontë', genero: 'Romance', emprestado: false},
        {titulo: 'A Ilha do Tesouro', autor: 'Robert Louis Stevenson', genero: 'Aventura', emprestado: true},
        {titulo: 'O Velho e o Mar', autor: 'Ernest Hemingway', genero: 'Clássico', emprestado: false},
        {titulo: 'O Senhor das Moscas', autor: 'William Golding', genero: 'Ficção', emprestado: true}
    ],

    funcionarios: [
        { nome: 'Ana', idade: 30, cargo: 'Bibliotecária' },
        { nome: 'João', idade: 35, cargo: 'Assistente' },
        { nome: 'Carlos', idade: 40, cargo: 'Auxiliar de Biblioteca' }
    ],

    usuarios: [
        { nome: 'Pedro', idade: 20, endereco: 'Rua A, 123', telefone: '1234-5678' },
        { nome: 'Lucas', idade: 22, endereco: 'Rua B, 456', telefone: '8765-4321' },
        { nome: 'Mariana', idade: 24, endereco: 'Rua C, 789', telefone: '4321-5678' },
        { nome: 'Juliana', idade: 26, endereco: 'Rua D, 987', telefone: '5678-4321' },
        { nome: 'Rafael', idade: 28, endereco: 'Rua E, 654', telefone: '9876-5432' }
    ],

    localizacao: {
        rua: 'Rua X',
        numero: 123,
        bairro: 'Centro',
        cidade: 'São Paulo',
        estado: 'SP'
    }
};

// Funções - Livros

// Exibir livros
function exibirLivros() {
    for (let i = 0; i < biblioteca.livros.length; i++) {
        console.log(`Livro: ${biblioteca.livros[i].titulo} - Autor: ${biblioteca.livros[i].autor} - Gênero: ${biblioteca.livros[i].genero} - Disponível: ${biblioteca.livros[i].emprestado ? 'Não' : 'Sim'}`);
    }

    document.getElementById('verificarLivro').onclick = exibirLivros;
}

exibirLivros();

// Verificar emprestimo
function verificarEmprestimo() {
    let nomeLivro = prompt('Digite o nome do livro que deseja verificar: ');

    let livroEncontrado = false;

    for (let i = 0; i < biblioteca.livros.length; i++) {
        if (biblioteca.livros[i].titulo === nomeLivro) {
            if (biblioteca.livros[i].emprestado) {
                console.log('Livro emprestado');
                alert('Livro emprestado');
            } else {
                console.log('Livro disponível');
                alert('Livro disponível');
            }
            livroEncontrado = true;
            break;
        }
    }
}

verificarEmprestimo();

// Pesquisar Livro
function pesquisarLivro() {
    let nomeLivro = promt('Digite o nome do Livro que deseja pesquisar: ');

    let livroEncontrado = false;

    for (let i = 0; i < biblioteca.livros.length; i++) {
        if (biblioteca.livros[i].titulo === nomeLivro) {
            console.log(`Livro: ${biblioteca.livros[i].titulo} - Autor: ${biblioteca.livros[i].autor} - Gênero: ${biblioteca.livros[i].genero} - Disponível: ${biblioteca.livros[i].emprestado ? 'Não' : 'Sim'}`);
            livroEncontrado = true;
        } else {
            console.log('Livro não encontrado');
        }
    }
}

pesquisarLivro();

// Adicionar Livro
function adicionarLivro() {
    let nomeLivro = prompt('Digite o nome do livro que deseja adicionar: ');
    let autorLivro = prompt('Digite o autor do livro: ');
    let generoLivro = prompt('Digite o gênero do livro: ');

    let novoLivro = {
        titulo: nomeLivro,
        autor: autorLivro,
        genero: generoLivro,
        emprestado: false
    };

    biblioteca.livros.push(novoLivro);

    console.log('Livro adicionado com sucesso');
    alert('Livro adicionado com sucesso');

    exibirLivros();
}

adicionarLivro();

// Remover Livro
function removerLivro() {
    let nomeLivro = prompt('Digite o nome do livro que deseja remover: ');

    let livroEncontrado = false;

    for (let i = 0; i < biblioteca.livros.length; i++) {
        if (biblioteca.livros[i].titulo === nomeLivro) {
            biblioteca.livros.splice(i, 1);
            console.log('Livro removido com sucesso');
            alert('Livro removido com sucesso');
            livroEncontrado = true;
            break;
        } else {
            console.log('Livro não encontrado');
        }
    }

    exibirLivros();
}

removerLivro();

// Emprestar Livro
function emprestarLivro() {
    let nomeLivro = prompt('Digite o nome do livro que deseja emprestar: ');

    let livroEncontrado = false;

    for (let i = 0; i < biblioteca.livros.length; i++) {
        if (biblioteca.livros[i].titulo === nomeLivro) {
            if (biblioteca.livros[i].emprestado) {
                console.log('Livro já emprestado');
                alert('Livro já emprestado');
            } else {
                biblioteca.livros[i].emprestado = true;
                console.log('Livro emprestado com sucesso');
                alert('Livro emprestado com sucesso');
            }
            livroEncontrado = true;
            break;
        } else {
            console.log('Livro não encontrado');
        }
    }

    exibirLivros();
}

emprestarLivro();

// Devolver Livro
function devolverLivro() {
    let nomeLivro = prompt('Digite o nome do livro que deseja devolver: ');

    let livroEncontrado = false;

    for (let i = 0; i < biblioteca.livros.length; i++) {
        if (biblioteca.livros[i].titulo === nomeLivro) {
            if (!biblioteca.livros[i].emprestado) {
                console.log('Livro já disponível');
                alert('Livro já disponível');
            } else {
                biblioteca.livros[i].emprestado = false;
                console.log('Livro devolvido com sucesso');
                alert('Livro devolvido com sucesso');
            }
            livroEncontrado = true;
            break;
        } else {
            console.log('Livro não encontrado');
        }
    }

    exibirLivros();
}

devolverLivro();

// Funções - Funcionários

// Exibir Funcionários
function exibirFuncionarios() {
    for (let i = 0; i < biblioteca.funcionarios.length; i++) {
        console.log(`Funcionário: ${biblioteca.funcionarios[i].nome} - Idade: ${biblioteca.funcionarios[i].idade} - Cargo: ${biblioteca.funcionarios[i].cargo}`);
    }
}

exibirFuncionarios();

// Adicionar Funcionário
function adicionarFuncionario() {
    let nomeFuncionario = prompt('Digite o nome do funcionário que deseja adicionar: ');
    let idadeFuncionario = parseInt(prompt('Digite a idade do funcionário: '));
    let cargoFuncionario = prompt('Digite o cargo do funcionário: ');

    let novoFuncionario = {
        nome: nomeFuncionario,
        idade: idadeFuncionario,
        cargo: cargoFuncionario
    };

    biblioteca.funcionarios.push(novoFuncionario);

    console.log('Funcionário adicionado com sucesso');
    alert('Funcionário adicionado com sucesso');

    exibirFuncionarios();
}

adicionarFuncionario();

// Remover Funcionário

function removerFuncionario() {
    let nomeFuncionario = prompt('Digite o nome do funcionário que deseja remover: ');

    let funcionarioEncontrado = false;

    for (let i = 0; i < biblioteca.funcionarios.length; i++) {
        if (biblioteca.funcionarios[i].nome === nomeFuncionario) {
            biblioteca.funcionarios.splice(i, 1);
            console.log('Funcionário removido com sucesso');
            alert('Funcionário removido com sucesso');
            funcionarioEncontrado = true;
            break;
        } else {
            console.log('Funcionário não encontrado');
        }
    }

    exibirFuncionarios();
}

removerFuncionario();

// Funções - Usuários

// Exibir Usuários
function exibirUsuarios() {
    for (let i = 0; i < biblioteca.usuarios.length; i++) {
        console.log(`Usuário: ${biblioteca.usuarios[i].nome} - Idade: ${biblioteca.usuarios[i].idade} - Endereço: ${biblioteca.usuarios[i].endereco} - Telefone: ${biblioteca.usuarios[i].telefone}`);
    }
}

exibirUsuarios();

// Adicionar Usuário
function addicionarUsuario() {
    let nomeUsuario = prompt('Digite o nome do usuário que deseja adicionar: ');
    let idadeUsuario = parseInt(prompt('Digite a idade do usuário: '));
    let enderecoUsuario = prompt('Digite o endereço do usuário: ');
    let telefoneUsuario = prompt('Digite o telefone do usuário: ');

    let novoUsuario = {
        nome: nomeUsuario,
        idade: idadeUsuario,
        endereco: enderecoUsuario,
        telefone: telefoneUsuario
    }

    biblioteca.usuarios.push(novoUsuario);

    console.log('Usuário adicionado com sucesso');
    alert('Usuário adicionado com sucesso');

    exibirUsuarios();
}

addicionarUsuario();

// Remover Usuário
function removerUsuario() {
    let nomeUsuario = prompt('Digite o nome do usuário que deseja remover: ');

    let usuarioEncontrado = false;

    for (let i = 0; i < biblioteca.usuarios.length; i++) {
        if (biblioteca.usuarios[i].nome === nomeUsuario) {
            biblioteca.usuarios.splice(i, 1);
            console.log('Usuário removido com sucesso');
            alert('Usuário removido com sucesso');
            usuarioEncontrado = true;
            break;
        } else {
            console.log('Usuário não encontrado');
        }
    }

    exibirUsuarios();
}

removerUsuario();

// Funções - Recibo
function imprimirRecibo() {
    let nomeFuncionario = prompt('Digite o nome do funcionário que emprestou o livro: ');
    let nomeUsuario = prompt('Digite o nome do usuário que pegou o livro emprestado: ');
    let nomeLivro = prompt('Digite o nome do livro emprestado: ');
    let autorLivro = prompt('Digite o autor do livro emprestado: ');
    let dataEmprestimo = prompt('Digite a data do empréstimo: ');
    let dataDevolucao = prompt('Digite a data de devolução: ');

    console.log(`Recibo
    Funcionário: ${nomeFuncionario}
    Usuário: ${nomeUsuario}
    Livro: ${nomeLivro}
    Autor: ${autorLivro}
    Data de Empréstimo: ${dataEmprestimo}
    Data de Devolução: ${dataDevolucao}`);

    alert('Recibo impresso com sucesso');
}

imprimirRecibo();

// Funções - Localização
function exibirLocalizacao() {
    console.log(`Localização: Rua ${biblioteca.localizacao.rua}, ${biblioteca.localizacao.numero} - Bairro: ${biblioteca.localizacao.bairro} - Cidade: ${biblioteca.localizacao.cidade} - Estado: ${biblioteca.localizacao.estado}`);
}

exibirLocalizacao();

// Mudar algo em específico de um livro, funcionário ou usuário
function mudarLivro() {
    let nomeLivro = prompt('Digite o nome do livro que deseja alterar: ');
    let atributo = prompt('Digite o atributo que deseja alterar: ');

    let livroEncontrado = false;

    for (let i = 0; i < biblioteca.livros.length; i++) {
        if (biblioteca.livros[i].titulo === nomeLivro) {
            if (atributo === 'titulo') {
                let novoTitulo = prompt('Digite o novo título: ');
                biblioteca.livros[i].titulo = novoTitulo;
            } else if (atributo === 'autor') {
                let novoAutor = prompt('Digite o novo autor: ');
                biblioteca.livros[i].autor = novoAutor;
            } else if (atributo === 'genero') {
                let novoGenero = prompt('Digite o novo gênero: ');
                biblioteca.livros[i].genero = novoGenero;
            } else if (atributo === 'emprestado') {
                let novoEmprestado = prompt('Digite se o livro está emprestado: ');
                biblioteca.livros[i].emprestado = novoEmprestado;
            } else {
                console.log('Atributo inválido');
                alert('Atributo inválido');
            }
            livroEncontrado = true;
            break;
        }

        if (!livroEncontrado) {
            console.log('Livro não encontrado');
            alert('Livro não encontrado');
        }
    }

    exibirLivros();
}

mudarLivro();

function mudarFuncionario() {
    let nomeFuncionario = prompt('Digite o nome do funcionário que deseja alterar: ');
    let atributo = prompt('Digite o atributo que deseja alterar: ');

    let funcionarioEncontrado = false;

    for (let i = 0; i < biblioteca.funcionarios.length; i++) {
        if (biblioteca.funcionarios[i].nome === nomeFuncionario) {
            if (atributo === 'nome') {
                let novoNome = prompt('Digite o novo nome: ');
                biblioteca.funcionarios[i].nome = novoNome;
            } else if (atributo === 'idade') {
                let novaIdade = parseInt(prompt('Digite a nova idade: '));
                biblioteca.funcionarios[i].idade = novaIdade;
            } else if (atributo === 'cargo') {
                let novoCargo = prompt('Digite o novo cargo: ');
                biblioteca.funcionarios[i].cargo = novoCargo;
            } else {
                console.log('Atributo inválido');
                alert('Atributo inválido');
            }
            funcionarioEncontrado = true;
            break;
        }

        if (!funcionarioEncontrado) {
            console.log('Funcionário não encontrado');
            alert('Funcionário não encontrado');
        }
    }

    exibirFuncionarios();
}

mudarFuncionario();

function mudarUsuario() {
    let nomeUsuario = prompt('Digite o nome do usuário que deseja alterar: ');
    let atributo = prompt('Digite o atributo que deseja alterar: ');

    let usuarioEncontrado = false;

    for (let i = 0; i < biblioteca.usuarios.length; i++) {
        if (biblioteca.usuarios[i].nome === nomeUsuario) {
            if (atributo === 'nome') {
                let novoNome = prompt('Digite o novo nome: ');
                biblioteca.usuarios[i].nome = novoNome;
            } else if (atributo === 'idade') {
                let novaIdade = parseInt(prompt('Digite a nova idade: '));
                biblioteca.usuarios[i].idade = novaIdade;
            } else if (atributo === 'endereco') {
                let novoEndereco = prompt('Digite o novo endereço: ');
                biblioteca.usuarios[i].endereco = novoEndereco;
            } else if (atributo === 'telefone') {
                let novoTelefone = prompt('Digite o novo telefone: ');
                biblioteca.usuarios[i].telefone = novoTelefone;
            } else {
                console.log('Atributo inválido');
                alert('Atributo inválido');
            }
            usuarioEncontrado = true;
            break;
        }

        if (!usuarioEncontrado) {
            console.log('Usuário não encontrado');
            alert('Usuário não encontrado');
        }
    }

    exibirUsuarios();
}

mudarUsuario();