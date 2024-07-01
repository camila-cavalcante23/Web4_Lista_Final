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

## API Endpoints
- GET /api/tasks: Retorna todas as tarefas.
- GET /api/tasks/{id}: Retorna uma tarefa específica por ID.
- POST /api/tasks: Cria uma nova tarefa.
- PUT /api/tasks/{id}: Atualiza uma tarefa existente.
- DELETE /api/tasks/{id}: Remove uma tarefa.

## Aplicação em Funcionamento

## tela inicial
![image](https://github.com/camila-cavalcante23/Web4_Lista_Final/assets/142603637/3665bdf7-4e83-4682-b926-8325997b3708)
## Adicionando uma tarefa 
![image](https://github.com/camila-cavalcante23/Web4_Lista_Final/assets/142603637/2bc92f43-db33-45bd-ac3c-75c490924e99)
![image](https://github.com/camila-cavalcante23/Web4_Lista_Final/assets/142603637/28ea8850-6c83-4b36-a641-cd99a1a5dbc6)

## Resposta da API
![image](https://github.com/camila-cavalcante23/Web4_Lista_Final/assets/142603637/c5eca22d-03fa-417e-aa56-f262b7d0ebdb)

## Marcando tarefa como concluída 
![image](https://github.com/camila-cavalcante23/Web4_Lista_Final/assets/142603637/3522c138-151f-4604-9d4a-f815e905df0b)

## Resposta da API
![image](https://github.com/camila-cavalcante23/Web4_Lista_Final/assets/142603637/f7bf9f5f-f893-4300-9489-269c8912b12d)

## Desmarcando tarefa 
![image](https://github.com/camila-cavalcante23/Web4_Lista_Final/assets/142603637/9a674fcb-fed3-4265-a255-003f790265c0)

## Resposta da API
![image](https://github.com/camila-cavalcante23/Web4_Lista_Final/assets/142603637/a958a003-dc07-4451-aea2-06d40c720acb)

## Botão de todas as tarefas concluídas ou não 
![image](https://github.com/camila-cavalcante23/Web4_Lista_Final/assets/142603637/dce03c5e-9f02-4558-8f81-9c7416b20a46)

## Resposta da API
![image](https://github.com/camila-cavalcante23/Web4_Lista_Final/assets/142603637/52c63fe4-b04e-4ad8-b71f-19b9e0e4e208)

## Botão das tarefas completas
![image](https://github.com/camila-cavalcante23/Web4_Lista_Final/assets/142603637/00907209-34ea-4c65-9796-b7b5b5d74fcf)

## Botão das tarefas pendentes 
![image](https://github.com/camila-cavalcante23/Web4_Lista_Final/assets/142603637/961ea84f-a998-48a4-84d3-daa951ca7d2e)

## Botão das Instruções 
![image](https://github.com/camila-cavalcante23/Web4_Lista_Final/assets/142603637/d4ce4d71-ef60-4960-8909-965d3feed0b8)

## API Endpoints
![image](https://github.com/camila-cavalcante23/Web4_Lista_Final/assets/142603637/79506d31-58c0-4969-9cce-4913d5131d5f)




