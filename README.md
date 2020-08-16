# Pizza CRUD API

Projeto criado como um exercício para colocar em prática conhecimentos adquiridos até então, desenvolvendo uma API com funcionalidade CRUD (Create, Read, Update, Delete) e implementando um frontend para consumir a API desenvolvida.

## Confira o projeto em execução: [Pizza Crud API](https://pizza-crud-api.web.app)

<div align="center">
<img src="/mockup.png">
</div>

## Características

Uma API construída com característcas CRUD, que permite a realização de quatro operações básicas de interface com o banco de dados: criar um novo registro (C, create), a de ler registros existentes (R, read), a de atualizar um registro (U, update) e por fim exluir um registro existente (D, delete).

Com base nisso, a ideia do projeto foi construir uma API para registros de sabores de pizzas, onde é possível inserir novas pizzas no banco de dados, com informações de ingredientes e preço, bem como editar ou excluir registros existentes. :pizza:

- A API foi construiída em [NodeJS](https://nodejs.org/en/) e hospedada no [Heroku](https://www.heroku.com/).
- O frontend foi construído com [React](https://pt-br.reactjs.org/) e hospedado na plataforma do [Google Firebase](https://firebase.google.com/?hl=pt) (dominio web.app)
- O banco de dados utilizado é o banco não-relacional [MongoDB](https://www.mongodb.com/).

## Roadmap

- [x] Inserir novas pizzas no banco de dados
- [x] Ler e exibir pizzas existentes no banco de dados
- [x] Editar informações sobre pizzas existentes
- [x] Apagar pizzas do banco de dados
- [ ] Validar dados enviados no cadastro e edição (tamanho máximo, caractéres invalidos, preço inválido, etc)
- [ ] Estruturar página de informações no frontend
- [ ] Implementar filtros (filtrar por preço, nome, data de criação, etc)

## Documentação da API

Além do frontend construído em React, a API desenvolvida é acessível através de chamadas via protocolo http/https, utilizando o método que preferir (Curl, Postman, Insomnia, etc) através do endereço https://pizza-crud-api.herokuapp.com/api

**Endereço Base**: https://pizza-crud-api.herokuapp.com/api


### Códigos de Retorno
| Código | Descrição                                                                                  |
| ------ | ------------------------------------------------------------------------------------------ |
| 200    | "OK", a requisição foi bem sucedida                                                        |
| 201    | "Created", nova pizza inserida no banco de dados com sucesso                               |
| 400    | "Bad Request", ocorreu algum erro com os parâmetros passados                               |
| 500    | "Internal Error", ocorreu algum erro do servidor no momento de processamento da requisição |

### Inserir pizza no banco de dados

| Parâmetro  | Descrição                                                                                                                               |
| ---------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| Método     | POST                                                                                                                                    |
| Rota       | /pizzas                                                                                                                                 |
| Body       | JSON                                                                                                                                    |
| Parâmetros | { <br>    "title": "Sabor da Pizza",<br>        "ingredients": ["Ingrediente 1", "Ingrediente 2", ... ],<br>        "price": 99.99<br>} |

### Listar pizzas existentes

| Parâmetro | Descrição                                                    |
| --------- | ------------------------------------------------------------ |
| Método    | GET                                                          |
| Rota      | /pizzas                                                      |
| Retorno   | JSON contendo todas as entradas existentes no banco de dados |

### Exibir uma pizza individualmente

| Parâmetro | Descrição                                                         |
| --------- | ----------------------------------------------------------------- |
| Método    | GET                                                               |
| Rota      | /pizzas/id<br> *Onde id é o ID individual da pizza a ser exibida* |
| Retorno   | JSON contendo os dados da pizza requisitada                       |

### Atualizar dados de uma pizza existente

| Parâmetro  | Descrição                                                                                                                                                                                                     |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Método     | PUT                                                                                                                                                                                                           |
| Rota       | /pizzas/id<br> *Onde id é o ID individual da pizza a ser editada*                                                                                                                                             |
| Body       | JSON                                                                                                                                                                                                          |
| Parâmetros | { <br>    "title": "Sabor da Pizza",<br>        "ingredients": ["Ingrediente 1", "Ingrediente 2", ... ],<br>        "price": 99.99<br>} <br><Br>*Podem ser passados apenas os atributos que se deseja editar* |
| Retorno    | JSON contendo os dados da pizza com os novos dados editados                                                                                                                                                   |

### Remover uma pizza do banco de dados

| Parâmetro | Descrição                                                           |
| --------- | ------------------------------------------------------------------- |
| Método    | DELETE                                                              |
| Rota      | /pizzas/id<bR> Onde id é o ID individual da pizza a ser editada     |
| Retorno   | JSON contendo a mensagem de sucesso ou falha na execução da chamada |

# Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

Fique a vontade para contribuir ;)