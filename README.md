# Frontend Programming challenge - Orbita challenge

## ## Demonstration

https://youtu.be/hIGMT0mIWdw

## ## Startup Instructions

1. run project
   npm run start

## Descrição

O objetivo desse desafio é avaliar suas habilidades para construção de uma aplicação Single Page Application (SPA) usando [React.js](https://reactjs.org) para a construção da interface. Essa aplicação deverá se comunicar com a API descrita em [Backend.md](https://github.com/orbita-cc/challenge/blob/master/Backend.md#backend-programming-challenge).

A aplicação deve ter três páginas:

- ✅ Login
- ✅ Criação de conta
- ✅ Dashboard
- ✅ Apenas usuários logados podem ter acesso à página de Dashboard. A imagem abaixo serve como guia definitivo para a construção da UI da aplicação. Você deve buscar ser o mais fiel possível a ela.

Os 3 widgets disponíveis nas imagens devem mostrar:

1. ✅ Número de instalações feitas. Informações:
   - Valor total
   - Estado (`State`)
2. ✅ Mostrar a instalação com maior custo. Informações:
   - CEP (`Zip Code`) do local de instalação
   - Custo da instalação
3. ✅ Mostrar os 3 meses do ano com o maior número de instalações. Informações:
   - Total instalado

⚠️ Todas as informações mostradas no Dashboard devem abranger apenas o estado (`State`) do usuário logado.

## Requisitos obrigatórios

- ✅Utilizar React para construção da UI. Se preferir, use o [create-react-app](https://github.com/facebook/create-react-app) como ponto de partida
- ✅Padronização do código: seguir algum styleguide de JavaScript e CSS. Se preferir utilize o [Prettier](https://prettier.io/)
- ✅Construir a UI se aproximando o máximo possível da imagem acima.

## Bônus

- ✅ Implementar testes
  Implementado todas os testes das chamadas de serviços usando o arquivo de configuração do PostTMan
  [Orbita Challenge.postman_collection.json](./Orbita Challenge.postman_collection.json)

- ✅ Implementar a seguinte visualização usando gráfico:
  - Capacidade instalada (atributo `System Size` no conjunto de dados) agrupada pelo ano de instalação
    - Eixo x: ano de instalação
    - Eixo y: capacidade total instalada no ano
- ✅ Gerenciar estado da aplicação utilizando [Redux](https://redux.js.org)
- ✅ Nesse caso, utilizar [redux-thunk](https://github.com/reduxjs/redux-thunk) para chamadas assíncronas
