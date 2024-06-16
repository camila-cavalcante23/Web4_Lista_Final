# Lista de Tarefas

## Descrição do Projeto

Este projeto consiste em transformar uma Single Page Application (SPA) desenvolvida com JavaScript puro em uma aplicação web utilizando React no front-end e C# no back-end. A aplicação realiza operações CRUD (Create, Read, Update, Delete) em uma entidade de tarefas.

## Tecnologias Utilizadas

- **Frontend:** React
- **Backend:** C# com .NET
- **Banco de Dados:** In Memory Database do .NET
- **Gerenciamento de Dependências:** npm (Node Package Manager)
- **HTTP Client:** axios

## Funcionalidades

- **Adicionar Tarefa:** Permite adicionar uma nova tarefa com descrição, prazo e prioridade.
- **Listar Tarefas:** Exibe a lista de todas as tarefas, filtradas por completas, pendentes ou todas.
- **Atualizar Tarefa:** Permite marcar tarefas como concluídas ou pendentes. Ao marcar como concluídas, atualize a página.
- **Remover Tarefa:** Permite remover uma tarefa da lista.


## Estrutura de Código
# Frontend
- src/components/TaskForm.js: Componente para adicionar novas tarefas.
- src/components/TaskItem.js: Componente para exibir uma tarefa individual.
- src/components/TaskList.js: Componente para listar e filtrar tarefas.
- src/api.js: Funções para interação com o backend (CRUD).
- src/App.js: Componente principal que integra os componentes de tarefa.
# Backend
- Controllers/TasksController.cs: Controlador que gerencia as requisições CRUD.
- Models/Task.cs: Modelo de dados para a tarefa.
- Data/AppDbContext.cs: Contexto do banco de dados.
# Exemplo de Uso
Abra o navegador e vá para http://localhost:3000 para acessar a aplicação frontend.
Utilize os campos e botões para adicionar, atualizar e remover tarefas.
As operações serão refletidas no backend e salvas no banco de dados em memória.

## API Endpoints
- GET /api/tasks: Retorna todas as tarefas.
- GET /api/tasks/{id}: Retorna uma tarefa específica por ID.
- POST /api/tasks: Cria uma nova tarefa.
- PUT /api/tasks/{id}: Atualiza uma tarefa existente.
- DELETE /api/tasks/{id}: Remove uma tarefa.

## Aplicação em Funcionamento

## tela inicial

## Adcionando uma tarrefa 

## Resposta da API

## Marcando tarefa como concluída 

## Resposta da API


