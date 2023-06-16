# Crud para o processo seletivo da SDK

Conforme informado no desafio:
<br/>

Desenvolver um CRUD de pessoa com:
-ID
-Nome completo
-RG
-CPF
-Status (ativo ou inativo)
-Endereço
Expondo a API e fazendo testes no Postman.
Fazer a tela em React.js com back-end em Node.js.
Obs: somente pessoas com status inativo podem ser deletadas

Foi desenvolvido uma Tela em React e uma Api em NodeJs.

### Para rodar a api

```
$ cd backend
$ npm i
$ npm run dev
```

Informe as variaveis de ambiente

```
PORT=[ porta que desejar rodar a api]
DB_URL=["url mongodb"]
```

#### Endpoints

| Metodo | Endpoint                   | Objetivo                                          |
| ------ | -------------------------- | ------------------------------------------------- |
| GET    | /api/usuarios/listar       | Realiza a busca de todos os usuarios cadastrados. |
| POST   | /api/usuario/cadastrar     | Realiza o cadastro de um usuario.                 |
| PUT    | /api/usuario/atualizar/:id | Realiza o update de um usuario.                   |
| DELETE | /api/usuario/deletar/:id   | Realiza a exclução de um usuario.                 |

Para realizar um `POST`, os dados devem ser enviados no seguinte formato Json:

```
{
  "nome": "Tony Stark",
  "rg": "11.204.887-0",
  "cpf": "948.305.850-30",
  "cep": "24467535",
  "cidade": "Uma Cidade",
  "bairro": "Um Bairro",
  "estado": "Um Estado",
  "logradouro": "Uma Rua"
}
```

Caso prefira, você também pode enviar assim:

```
{
  "nome": "Tony Stark",
  "rg": "112048870",
  "cpf": "94830585030",
  "cep": "24467535",
  "cidade": "Uma Cidade",
  "bairro": "Um Bairro",
  "estado": "Um Estado",
  "logradouro": "Uma Rua"
}
```

### Para rodar o frontend

```
$ cd frontend
$ npm i
$ npm start

```
