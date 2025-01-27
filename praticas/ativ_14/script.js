// Função para validar o nome
function validarNome(nome) {
    if (nome.trim() === '') {
        return false; 
    }
    return true; 
}

function validarIdade(idade) {
    if (idade < 18 || idade > 120) {
        return false;
    }
    return true;
}

function validarEmail(email) {
    if (!email.includes('@') || !email.includes('.com')) { 
        return false;
    }
    return true;
}

function classificarIdade(idade) {
    if (idade < 18) {
        return 'Menor de idade';
    } else if (idade >= 18 && idade <= 35) {
        return 'Jovem adulto';
    } else if (idade >= 36 && idade <= 65) {
        return 'Adulto';
    } else {    
        return 'Idoso';
    }
}

function cadastrarUsuario(nome, idade, email) {
    if (!validarNome(nome)) {
        console.log('Nome inválido');
        return;
    }

    if (!validarIdade(idade)) {
        console.log('Idade inválida');
        return;
    }

    if (!validarEmail(email)) {
        console.log('E-mail inválido');
        return;
    }

    const classificacao = classificarIdade(idade);
    console.log(`O usuário ${nome} foi cadastrado com sucesso! Sua classificação é: ${classificacao}`);
}

let usuarios = [];

function cadastrarUsuarioComArmazenamento(nome, idade, email) {
    if (!validarNome(nome)) {
        console.log('Nome inválido');
        return;
    }

    if (!validarIdade(idade)) {
        console.log('Idade inválida');
        return;
    }

    if (!validarEmail(email)) {
        console.log('E-mail inválido');
        return;
    }

    const classificacao = classificarIdade(idade);
    let usuario = { nome, idade, email, classificacao };
    usuarios.push(usuario); 

    console.log(`O usuário ${nome} foi cadastrado com sucesso! Sua classificação é: ${classificacao}`);
}

function exibirUsuarios() {
    if (usuarios.length === 0) {
        console.log('Não há usuários cadastrados.');
        return;
    }

    console.log("Usuários cadastrados:");
    usuarios.forEach(usuario => {
        console.log(`Nome: ${usuario.nome}, Idade: ${usuario.idade}, E-mail: ${usuario.email}, Classificação: ${usuario.classificacao}`);
    });
}

cadastrarUsuarioComArmazenamento("João", 25, "joao@dominio.com");
cadastrarUsuarioComArmazenamento("Maria", 17, "maria@dominio.com");
cadastrarUsuarioComArmazenamento("Carlos", 45, "carlos@dominio.com");
cadastrarUsuarioComArmazenamento("Ana", 67, "ana@dominio.com");
cadastrarUsuarioComArmazenamento("Lucas", 30, "lucas@dominio.com");

exibirUsuarios();
