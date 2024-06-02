*Projeto para teste de vaga Desenvolvedor Front End*
<br/>*Hospedado:* https://delivery-interplanetario.vercel.app/

# Delivery Interplanetário
Sistema de delivery interplanetário, automação de entregas entre Marte e a Terra.


## Tecnologias Utilizadas

- **React**: Uma biblioteca JavaScript para construir interfaces de usuário.
- **React Router DOM**: Roteamento entre as páginas do delivery.
- **UUID**: Lib que gera um identificador universalmente exclusivo usando números aleatórios.

## Instalação

Para instalar e executar este projeto localmente, siga os passos abaixo:

Instale as dependências do projeto:
   ```bash
   npm install
   ```

## Executando o Projeto

Para iniciar o servidor de desenvolvimento, execute o comando abaixo:

```bash
npm run dev
```

Isso irá iniciar a aplicação em modo de desenvolvimento. Abra [http://localhost:5173](http://localhost:5173) para visualizar no navegador.

## Estrutura do Projeto

A estrutura de diretórios do projeto é organizada da seguinte forma:

```
├── public
│   └── (imagens e gifs)
├── src
│   ├── components
│   │   └── (componentes reutilizáveis)
│   ├── pages
│   │   └── (páginas da aplicação)
│   ├── routes
│   │   └── (configuração das rotas)
│   ├── services
│   │   └── (api para lidar com salvamento de dados)
│   ├── styles
│   │   └── (estilos globais)
│   ├── App.js
│   ├── index.js
│   └── (outros arquivos de configuração e utilitários)
```

## Funcionalidades

- **Navegação**: Utiliza o React Router DOM para navegação entre as páginas.
- **Api para salvar no Local Storage**: API para simular backend salvando no Local Storage.
- **CRUD**: Criar, Ler, Atualizar e Deletar endereços.