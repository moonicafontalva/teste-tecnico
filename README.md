# teste técnico B3
# introdução ao meu projeto 🙂

Esse projeto foi inicializado com [Create React App](https://create-react-app.dev/).
Uso da versão React JS v18 e Typescript.

## considerações da autora

Neste projeto pude compartilhar um pouco de meu conhecimento Front-End, a fim de expor minimamente meu trabalho com desenvolvimento e organização.
Nele foi possível também relembrar o uso de algumas bibliotecas e pacotes que deixei em desuso atualmente. E além disso (e não menos importante), pude aprender e aplicar funcionalidades que nunca tive contato em minha carreira profissional até o momento. (Por exemplo uso de Jest e testes unitários).

Considero um projeto simples, pelo tempo proposto não pude aplicar maiores complexidades. Mas garanto que foi criado e executado com empenho e dedicação.


## scripts disponíveis

Neste projeto, será possível executar:

### `npm start`

Inicia o aplicativo em modo de desenvolvimento:
Abra [http://localhost:3000](http://localhost:3000) para visualizar pelo navegador.
A página será recarregada sempre que for alterada e salva, e poderá ver quaisquer erros de lint no console.

### `npm test`

Inicia o executor de testes unitários criados para esta aplicação.
Foi necessário instalação das seguintes bibliotecas: `@testing-library/react` e `@testing-library/jest-dom`

### `npm run build`

Cria o aplicativo para produção na pasta `build`.\
Ele agrupa corretamente o React no modo de produção e otimiza a compilação para o melhor desempenho.
A compilação é minificada e os nomes dos arquivos incluem os hashes.\
Seu aplicativo está pronto para ser implantado.
Obs: Ainda não executado.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**
Obs2: Não executado. (provavelmente não será rs)


## `observações relevantes`

Instalados pacotes `prettier` e `eslint-config-prettier` para possíveis erros.

Executado `npm install --save-dev @babel/plugin-proposal-private-property-in-object` para remover mensagens de alerta nos terminais.

Executado `npm install --save-dev jest @testing-library/react axios jest-mock` para uso de teste unitário no componente do useEffect -> versão de React^18 ser compatível.

Erro ao executar teste unitárop em useFetchMoedas:
*O erro "Cannot use import statement outside a module" continua porque o Jest não está interpretando corretamente o Axios, que agora usa ESModules (ESM) ao invés de CommonJS.*
Fiquei em dúvida se seria necessário essa correção, ou se fiz da maneira incorreta.

Adicionado `'no-undef'` para ocultar mensagens de alerta/erro durante o desenvolvimento.


## leia mais em

[Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).
Para React [React documentation](https://reactjs.org/).

## considerações finais da autora

Agradeço desde já a oportunidade. ✨