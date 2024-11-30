## Descrição

Este é um projeto acadêmico desenvolvido pelos alunos **Cláudio Matos** e **Felipe Ferreira**, do curso de Desenvolvimento de Software Multiplataforma (DSM), da Fatec Franca. 

O projeto foi desenvolvido em **Node.js**, utilizando o **framework Hapi.js** para gerenciamento de rotas e criação de APIs. Para a validação de dados, utilizamos a biblioteca **Joi**, enquanto o **Sequelize** serve como ORM (Object-Relational Mapper) para facilitar o gerenciamento de banco de dados relacional, utilizando **PostgreSQL** como SGBD. O **pg** é utilizado como o cliente para a conexão com o banco de dados PostgreSQL, e o **dotenv** é utilizado para carregar as variáveis de ambiente necessárias, como as credenciais de acesso ao banco.

Este projeto oferece uma estrutura base para o desenvolvimento de APIs RESTful, incluindo funcionalidades de CRUD (Create, Read, Update, Delete) para gerenciamento de produtos.

A base do projeto foi construída na disciplina de **Laboratório Web** e serve como um modelo para o desenvolvimento de APIs em ambientes acadêmicos.

## Requisitos

- **Node.js** (versão recomendada: 14 ou superior)
- **npm** (gerenciador de pacotes do Node.js)
  
## Instalação

1. Clone o repositório em sua máquina local:
   ```bash
   git clone https://github.com/cldmatos/lab-web-2024-2
   
2. Acesse a pasta do projeto
  ```bash
  cd <pasta onde clonou o repositório>
  ```

3. Instale as dependências do projeto:
   ```bash
   npm install
   ```

## Instalando o PostgreSQL
  Linux:
    sudo apt update
    sudo apt install postgresql postgresql-contrib
    sudo systemctl status postgresql
  Mac: 
    brew install postgresql
    brew services start postgresql
  Windows:
    Baixe o instalador em `https://www.postgresql.org/download/windows/`
    psql --version

## Criando o Banco de dados e as tabelas
  --Criando banco de dados

  CREATE DATABASE seu_banco_de_dados;

  -- Criando a Tabela Produto
  CREATE TABLE produto (
      cod_produto SERIAL PRIMARY KEY,
      nome VARCHAR(100) NOT NULL,
      quantidade INTEGER,
      preco NUMERIC(10, 2)
  );

-- Criando a Tabela Aluno
  CREATE TABLE aluno (
      cod_aluno SERIAL PRIMARY KEY,
      nome VARCHAR(100) NOT NULL,
      idade INTEGER
  );

## Configurando conexão com o banco de dados

  Configure o arquvio `.env` com os parâmetros de conexão com seu banco.

  Exemplo de configuração:

  PORT=0000 (porta local no navegador, utilizamos 5005)
  HOST=0.0.0.0 (ip p/ teste (utilizamos localhost ou 0.0.0.0))

  DB_HOST=localhost
  DB_PORT=0000 (padrão 5432)
  DB_NAME=nome_do_banco
  DB_USER=seu_usuario
  DB_PASSWORD=sua_senha

## Scripts de Inicialização

- **Iniciar em Produção:**
  Para rodar o projeto no modo de produção, execute o comando:
  ```bash
  npm start
  ```
  Isso executará o arquivo `index.js` com o comando `node index.js`.

- **Modo de Desenvolvimento:**
  Para rodar o projeto com recarga automática no modo de desenvolvimento, use:
  ```bash
  npm run dev
  ```
  Este comando utiliza o flag `--watch` do Node.js para reiniciar automaticamente o servidor sempre que houver alterações no código.

## Dependências Principais

- **@hapi/hapi**: framework web para construir servidores e APIs.
- **joi**: biblioteca para validação de dados no Node.js.
- **Sequelize**: ORM e gerenciamento do banco de dados
- **pg**: cliente para a conexão com o banco de dados.