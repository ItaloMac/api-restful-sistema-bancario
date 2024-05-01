# API de Banco Digital
Este README fornece informações importantes sobre o projeto, incluindo uma visão geral, instruções de instalação e uso, além de detalhes sobre as principais funcionalidades.

## Visão Geral
A API foi desenvolvido com o objetivo de oferecer aos clientes uma experiência bancária moderna e eficiente. Ele permite que os usuários realizem diversas operações, como consultas de saldo, transferências, pagamentos de contas e muito mais. O aplicativo é fácil de usar e foi projetado com foco na segurança dos dados dos clientes.

## Funcionalidades
- Listar Contas Bancárias: Endpoint para listar todas as contas bancárias existentes.
- Criar Conta Bancária: Endpoint para criar uma nova conta bancária.
- Atualizar Dados do Usuário da Conta Bancária: Endpoint para atualizar os dados do usuário de uma conta bancária.
- Excluir Conta Bancária: Endpoint para excluir uma conta bancária existente.
- Depositar: Endpoint para realizar um depósito em uma conta bancária.
- Sacar: Endpoint para realizar um saque em uma conta bancária.
- Transferir: Endpoint para realizar uma transferência entre contas bancárias.
- Saldo: Endpoint para consultar o saldo de uma conta bancária.
- Extrato: Endpoint para listar as transações realizadas de uma conta específica.

## Como Usar
### Instalação
### Clone este repositório:
git clone https://github.com/ItaloMac/api-restful-sistema-bancario

### Instale as dependências:
- npm install
- Express.js
- Nodemon

## Endpoints
- Listar Contas Bancárias: GET /contas?senha_banco=<senha_do_banco>
- Criar Conta Bancária: POST /contas
- Atualizar Dados do Usuário da Conta Bancária: PUT /contas/:numeroConta/usuario
- Excluir Conta Bancária: DELETE /contas/:numeroConta
- Depositar: POST /transacoes/depositar
- Sacar: POST /transacoes/sacar
- Transferir: POST /transacoes/transferir
- Saldo: GET /contas/saldo?numero_conta=<numero_conta>&senha=<senha>
- Extrato: GET /contas/extrato?numero_conta=<numero_conta>&senha=<senha>

## Persistência de Dados
Os dados são armazenados em memória, utilizando um objeto no arquivo bancodedados.js. Todas as transações e contas bancárias são registradas neste objeto.

## Requisitos
Node.js
npm (Node Package Manager)

## Contribuição
Contribuições são bem-vindas! Se você encontrar um problema ou tiver uma ideia para melhorar o aplicativo, sinta-se à vontade para abrir um pull request ou discutir suas ideias na seção de issues do GitHub.