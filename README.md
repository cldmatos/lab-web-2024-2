## Descrição

Este é um projeto acadêmico desenvolvido pelos alunos **Cláudio Matos** e **Felipe Ferreira**, do curso de Desenvolvimento de Software Multiplataforma (DSM), da Fatec Franca. 

O projeto foi desenvolvido em Node.js, utilizando o framework Hapi.js para gerenciamento de rotas e o Joi para validação de dados. A base do projeto foi construída na disciplina de Laboratório Web.

Apresenta estrutura base para desenvolvimento de APIs.

## Requisitos

- Node.js (versão recomendada: 14 ou superior)
- npm (gerenciador de pacotes do Node.js)

## Instalação

1. Clone o repositório em sua máquina local
   
2. Acesse a pasta do projeto
   
3. Instale as dependências do projeto:
   ```bash
   npm install
   ```

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